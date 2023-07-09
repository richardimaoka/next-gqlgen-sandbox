package read

import (
	"encoding/json"
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/state"
)

type ImageDescriptionColumn struct {
	SeqNo                int    `json:"seqNo"`
	Column               int    `json:"column"`
	Width                int    `json:"width"`
	Height               int    `json:"height"`
	OriginalWidth        int    `json:"originalWidth"`
	OriginalHeight       int    `json:"originalHeight"`
	Path                 string `json:"path"`
	DescriptionContents  string `json:"description.contents"`
	DescriptionAlignment string `json:"description.alignment"`
}

type ImageDescriptionColumns []ImageDescriptionColumn

func ReadImageDescriptionColumns(filePath string) (ImageDescriptionColumns, error) {
	var elements ImageDescriptionColumns
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &elements) }
	err := internal.JsonRead(filePath, unmarshaller)
	if err != nil {
		return nil, fmt.Errorf("ReadImageDescriptionColumns failed to read file, %s", err)
	}

	return elements, err
}

func (t ImageDescriptionColumns) FindBySeqNo(seqNo int) *ImageDescriptionColumn {
	for _, e := range t {
		if e.SeqNo == seqNo {
			return &e // found!
		}
	}

	return nil
}

func (e ImageDescriptionColumn) ToStateImgDescColumn() *state.ImageDescriptionColumn {
	return &state.ImageDescriptionColumn{
		Image: state.Image{
			Width:          e.Width,
			Height:         e.Height,
			OriginalWidth:  e.OriginalWidth,
			OriginalHeight: e.OriginalHeight,
			Path:           e.Path,
		},
		Description: state.Markdown{
			Contents:  e.DescriptionContents,
			Alignment: state.MarkdownAlignment(e.DescriptionAlignment),
		},
	}
}
