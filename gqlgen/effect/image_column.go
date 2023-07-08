package effect

import (
	"encoding/json"
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/state"
)

type ImageColumnEffect struct {
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

type ImageColumnEffects []ImageColumnEffect

func ReadImageColumnEffects(filePath string) (ImageColumnEffects, error) {
	var effects ImageColumnEffects
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &effects) }
	err := internal.JsonRead(filePath, unmarshaller)
	if err != nil {
		return nil, fmt.Errorf("ReadImageColumnEffects failed to read file, %s", err)
	}

	return effects, err
}

func (t ImageColumnEffects) FindBySeqNo(seqNo int) *ImageColumnEffect {
	for _, e := range t {
		if e.SeqNo == seqNo {
			return &e // found!
		}
	}

	return nil
}

func (e ImageColumnEffect) ToImgDescColumn() *state.ImageDecriptionColumn {
	return &state.ImageDecriptionColumn{
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
