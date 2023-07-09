package convert

import (
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/read"
)

// Other packages don't use this, so unexported (lowercase) struct
type stepConverter struct {
	// Uppercase fields to allow json dump for testing
	Step                  string                      `json:"step"`
	NColumns              int                         `json:"nColumns"`
	PrevStep              string                      `json:"prevStep,omitempty"`
	NextStep              string                      `json:"nextStep,omitempty"`
	BackgroundImageColumn *read.BackgroundImageColumn `json:"backgroundImageColumn,omitempty"`
	ImageDecriptionColumn *read.ImageDecriptionColumn `json:"imageDecriptionColumn,omitempty"`
}

type StepConverters []stepConverter

func (this stepConverter) ToGraphQLColumns() []*model.ColumnWrapper {
	var colWrappers []*model.ColumnWrapper
	for i := 0; i < this.NColumns; i++ {
		if this.BackgroundImageColumn != nil && this.BackgroundImageColumn.Column == i {
			state := this.BackgroundImageColumn.ToStateBgImgColumn()
			column := state.ToGraphQLBgImgCol()
			colWrappers = append(colWrappers, &model.ColumnWrapper{Column: column})
		}

		if this.ImageDecriptionColumn != nil && this.ImageDecriptionColumn.Column == i {
			state := this.ImageDecriptionColumn.ToStateImgDescColumn()
			column := state.ToGraphQLImgDescCol()
			colWrappers = append(colWrappers, &model.ColumnWrapper{Column: column})
		}
	}

	return colWrappers
}

func (this StepConverters) ToGraphQLPages() []model.PageState {
	var pages []model.PageState
	for _, c := range this {
		// copy to avoid mutation effects afterwards
		step := internal.StringRef(c.Step)
		prevStep := internal.StringRef(c.PrevStep)
		nextStep := internal.StringRef(c.NextStep)
		columns := c.ToGraphQLColumns()

		page := model.PageState{
			Step:     step,
			PrevStep: prevStep,
			NextStep: nextStep,
			Columns:  columns,
		}
		pages = append(pages, page)
	}

	return pages
}

func (this StepConverters) WriteResults(dirName string) error {
	for _, p := range this.ToGraphQLPages() {
		filename := fmt.Sprintf("%s/state/%s.json", dirName, *p.Step)
		err := internal.WriteJsonToFile(p, filename)
		if err != nil {
			return fmt.Errorf("WriteResults failed, %s", err)
		}
	}

	return nil
}

func ReadStepConverters(dirName string) (StepConverters, error) {
	//------------------------------------
	// 1. read from JSON files
	//------------------------------------
	steps, err := read.ReadSteps(dirName + "/steps.json")
	if err != nil {
		return nil, fmt.Errorf("InitialRead failed, %s", err)
	}

	backgroundImageColumns, err := read.ReadBackgroundImageColumns(dirName + "/bg_columns.json")
	if err != nil {
		return nil, fmt.Errorf("InitialRead failed, %s", err)
	}

	imageDecriptionColumns, err := read.ReadImageDecriptionColumns(dirName + "/img_columns.json")
	if err != nil {
		return nil, fmt.Errorf("InitialRead failed, %s", err)
	}

	//--------------------------------------------------------
	// 2. construct data for each step
	//--------------------------------------------------------
	var converters StepConverters
	for i, step := range steps {
		bgCol := backgroundImageColumns.FindBySeqNo(step.SeqNo)
		imgCol := imageDecriptionColumns.FindBySeqNo(step.SeqNo)

		var prevStep string
		if i == 0 {
			prevStep = ""
		} else {
			prevStep = steps[i-1].Step
		}

		var nextStep string
		if i == len(steps)-1 {
			nextStep = ""
		} else {
			nextStep = steps[i+1].Step
		}

		conv := stepConverter{
			Step:                  step.Step,
			NColumns:              step.NColumns,
			PrevStep:              prevStep,
			NextStep:              nextStep,
			BackgroundImageColumn: bgCol,
			ImageDecriptionColumn: imgCol,
		}
		converters = append(converters, conv)
	}

	return converters, nil
}

func Process(dirName string) error {
	converters, err := ReadStepConverters(dirName)
	if err != nil {
		return fmt.Errorf("Process failed, %s", err)
	}
	if err := converters.WriteResults(dirName); err != nil {
		return fmt.Errorf("Process failed, %s", err)
	}
	return nil
}
