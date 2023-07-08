package read

import (
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/state"
)

type Effect struct {
	Step                  Step
	BackgroundImageColumn *BackgroundImageColumn
	ImageDecriptionColumn *ImageDecriptionColumn
}

type Effects []Effect

func (this Effect) ToStateColumns() []state.Column {
	var columns []state.Column
	for i := 0; i < this.Step.NColumns; i++ {
		if this.BackgroundImageColumn.Column == i {
			columns = append(columns, this.BackgroundImageColumn.ToStateBgImgColumn())
		}

		if this.ImageDecriptionColumn.Column == i {
			columns = append(columns, this.ImageDecriptionColumn.ToStateImgDescColumn())
		}
	}

	return columns
}

func ReadAllJsonFiles(dirName string) (Effects, error) {
	//------------------------------------
	// 1. read from JSON files
	//------------------------------------
	steps, err := ReadSteps(dirName + "/steps.json")
	if err != nil {
		return nil, fmt.Errorf("InitialRead failed, %s", err)
	}

	backgroundImageColumns, err := ReadBackgroundImageColumns(dirName + "/bg_columns.json")
	if err != nil {
		return nil, fmt.Errorf("InitialRead failed, %s", err)
	}

	imageDecriptionColumns, err := ReadImageDecriptionColumns(dirName + "/img_columns.json")
	if err != nil {
		return nil, fmt.Errorf("InitialRead failed, %s", err)
	}

	//--------------------------------------------------------
	// 2. construct data for each step
	//--------------------------------------------------------
	var effects Effects
	for _, step := range steps {
		bgCol := backgroundImageColumns.FindBySeqNo(step.SeqNo)
		imgCol := imageDecriptionColumns.FindBySeqNo(step.SeqNo)
		effects = append(effects, Effect{Step: step, BackgroundImageColumn: bgCol, ImageDecriptionColumn: imgCol})
	}

	return effects, nil
}
