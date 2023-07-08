package effect

import (
	"encoding/json"
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/state"
)

type BackgroundColumnEffect struct {
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

type BackgroundColumnEffects []BackgroundColumnEffect

func ReadBackgroundColumnEffects(filePath string) (BackgroundColumnEffects, error) {
	var effects BackgroundColumnEffects
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &effects) }
	err := internal.JsonRead(filePath, unmarshaller)
	if err != nil {
		return nil, fmt.Errorf("ReadBackgroundColumnEffects failed to read file, %s", err)
	}

	return effects, err
}

func (t BackgroundColumnEffects) FindBySeqNo(seqNo int) *BackgroundColumnEffect {
	for _, e := range t {
		if e.SeqNo == seqNo {
			return &e // found!
		}
	}

	return nil
}

func (e BackgroundColumnEffect) ToBgImgColumn() *state.BackgroundImageColumn {
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
