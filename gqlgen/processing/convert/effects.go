package convert

import (
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/read"
)

type StepConverter struct {
	Step                  read.Step
	BackgroundImageColumn *read.BackgroundImageColumn
	ImageDecriptionColumn *read.ImageDecriptionColumn
}

type StepConverters []StepConverter

func (this StepConverter) ToGraphQLColumns() []*model.ColumnWrapper {
	var colWrappers []*model.ColumnWrapper
	for i := 0; i < this.Step.NColumns; i++ {
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
	for _, step := range steps {
		bgCol := backgroundImageColumns.FindBySeqNo(step.SeqNo)
		imgCol := imageDecriptionColumns.FindBySeqNo(step.SeqNo)

		conv := StepConverter{
			Step:                  step,
			BackgroundImageColumn: bgCol,
			ImageDecriptionColumn: imgCol,
		}
		converters = append(converters, conv)
	}

	return converters, nil
}
