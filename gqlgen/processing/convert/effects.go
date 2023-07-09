package convert

import (
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/read"
)

type StepConverter struct {
	Step                  string                      `json:"step"`
	NColumns              int                         `json:"nColumns"`
	PrevStep              string                      `json:"prevStep,omitempty"`
	NextStep              string                      `json:"nextStep,omitempty"`
	BackgroundImageColumn *read.BackgroundImageColumn `json:"backgroundImageColumn,omitempty"`
	ImageDecriptionColumn *read.ImageDecriptionColumn `json:"imageDecriptionColumn,omitempty"`
}

type StepConverters []StepConverter

func (this StepConverter) ToGraphQLColumns() []*model.ColumnWrapper {
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

// func (this StepConverters) WriteResults(dirName string) {
// 	for _, effect := range this {
// 		columns := effect.ToStateColumns()
// 		internal.WriteJsonToFile(columns, fmt.Sprintf("%s/state/%s.json", dirName, effect.Step.Step))
// 	}
// }

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
			prevStep = steps[i+1].Step
		}

		conv := StepConverter{
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
