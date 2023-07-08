package read

import "fmt"

type Effect struct {
	ImageDecriptionColumn *ImageDecriptionColumn
	BackgroundImageColumn *BackgroundImageColumn
}

type Effects []Effect

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
		effects = append(effects, Effect{BackgroundImageColumn: bgCol, ImageDecriptionColumn: imgCol})
	}

	return effects, nil
}
