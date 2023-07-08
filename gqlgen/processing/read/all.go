package read

import "fmt"

type All struct {
	Steps                  Steps
	ImageDecriptionColumns ImageDecriptionColumns
	BackgroundImageColumns BackgroundImageColumns
}

func InitialRead(dirName string) (*All, error) {
	a := All{}
	var err error

	a.Steps, err = ReadSteps(dirName + "/steps.json")
	if err != nil {
		return nil, fmt.Errorf("InitialRead failed, %s", err)
	}

	a.BackgroundImageColumns, err = ReadBackgroundImageColumns(dirName + "/bg_columns.json")
	if err != nil {
		return nil, fmt.Errorf("InitialRead failed, %s", err)
	}

	a.ImageDecriptionColumns, err = ReadImageDecriptionColumns(dirName + "/img_columns.json")
	if err != nil {
		return nil, fmt.Errorf("InitialRead failed, %s", err)
	}

	return &a, nil
}
