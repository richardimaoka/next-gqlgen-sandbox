package read

import (
	"encoding/json"
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/state"
)

type BackgroundImageColumn struct {
	SeqNo          int    `json:"seqNo"`
	Column         int    `json:"column"`
	Width          int    `json:"width"`
	Height         int    `json:"height"`
	OriginalWidth  int    `json:"originalWidth"`
	OriginalHeight int    `json:"originalHeight"`
	Path           string `json:"path"`
	ModalText      string `json:"modal.text"`
	ModalPosition  string `json:"modal.position"`
}

type BackgroundImageColumns []BackgroundImageColumn

func ReadBackgroundImageColumns(filePath string) (BackgroundImageColumns, error) {
	var elements BackgroundImageColumns
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &elements) }
	err := internal.JsonRead(filePath, unmarshaller)
	if err != nil {
		return nil, fmt.Errorf("ReadBackgroundImageColumns failed to read file, %s", err)
	}

	return elements, err
}

func (t BackgroundImageColumns) FindBySeqNo(seqNo int) *BackgroundImageColumn {
	for _, e := range t {
		if e.SeqNo == seqNo {
			return &e // found!
		}
	}

	return nil
}

func (e BackgroundImageColumn) ToStateBgImgColumn() *state.BackgroundImageColumn {
	return &state.BackgroundImageColumn{
		Width:  e.Width,
		Height: e.Height,
		Path:   e.Path,
		Modal: state.Modal{
			Text:     e.ModalText,
			Position: state.ModalPosition(e.ModalPosition),
		},
	}
}
