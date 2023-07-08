package read

import "fmt"

type All struct {
	ImageDecriptionColumns ImageDecriptionColumns
	BackgroundImageColumns BackgroundImageColumns
}

func InitialRead(dirName string) error {
	a := All{}
	var err error

	a.BackgroundImageColumns, err = ReadBackgroundImageColumns(dirName + "/bg_columns.json")
	if err != nil {
		return fmt.Errorf("InitialRead failed, %s", err)
	}

	a.ImageDecriptionColumns, err = ReadImageDecriptionColumns(dirName + "/img_columns.json")
	if err != nil {
		return fmt.Errorf("InitialRead failed, %s", err)
	}

	return nil
}
