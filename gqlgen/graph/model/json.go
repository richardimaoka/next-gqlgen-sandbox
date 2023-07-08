package model

import (
	"encoding/json"
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
)

func (t *ColumnWrapper) UnmarshalJSON(b []byte) error {
	var obj internal.JsonObj
	err := json.Unmarshal(b, &obj)
	if err != nil {
		return fmt.Errorf("failed in ColumnWrapper UnmarshalJSON() while unmarshaling to Go data, %w", err)
	}

	columnObj, ok := obj["column"]
	if !ok {
		return fmt.Errorf(`failed in ColumnWrapper UnmarshalJSON(), "column" field does not exist, %w`, err)
	}

	bytes, err := json.Marshal(columnObj)
	if err != nil {
		return fmt.Errorf("failed in ColumnWrapper UnmarshalJSON() while marshaling the column object, %w", err)
	}

	column, err := columnFromBytes(bytes)
	if err != nil {
		return fmt.Errorf("failed in ColumnWrapper UnmarshalJSON() while unmarshaling the column object, %w", err)
	}
	t.Column = column

	return nil
}

func columnFromBytes(bytes []byte) (Column, error) {
	fromField := "__typename"
	typename, err := internal.ExtractTypeName(bytes, fromField)
	if err != nil {
		return nil, err
	}

	switch typename {
	case "BackgroundImageColumn":
		var col BackgroundImageColumn
		if err := json.Unmarshal(bytes, &col); err != nil {
			return nil, err
		}
		return &col, nil

	case "ImageDecriptionColumn":
		var col ImageDecriptionColumn
		if err := json.Unmarshal(bytes, &col); err != nil {
			return nil, err
		}
		return &col, nil

	default:
		return nil, fmt.Errorf("\"%s\" = %s is not a valid TerminalElement type", fromField, typename)
	}
}