package read

import (
	"encoding/json"
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/state"
)

type MarkdownColumn struct {
	SeqNo                int    `json:"seqNo"`
	Column               int    `json:"column"`
	DescriptionContents  string `json:"description.contents"`
	DescriptionAlignment string `json:"description.alignment"`
}

type MarkdownColumns []MarkdownColumn

func ReadMarkdownColumns(filePath string) (MarkdownColumns, error) {
	var elements MarkdownColumns
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &elements) }
	err := internal.JsonRead(filePath, unmarshaller)
	if err != nil {
		return nil, fmt.Errorf("ReadMarkdownColumns failed to read file, %s", err)
	}

	return elements, err
}

func (t MarkdownColumns) FindBySeqNo(seqNo int) *MarkdownColumn {
	for _, e := range t {
		if e.SeqNo == seqNo {
			return &e // found!
		}
	}

	return nil
}

func (e MarkdownColumn) ToStateMarkdownColumn() *state.MarkdownColumn {
	return &state.MarkdownColumn{
		Description: state.Markdown{
			Contents:  e.DescriptionContents,
			Alignment: state.MarkdownAlignment(e.DescriptionAlignment),
		},
	}
}
