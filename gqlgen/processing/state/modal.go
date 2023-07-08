package state

import "github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"

type ModalPosition string

const (
	ModalPositionTop    ModalPosition = "top"
	ModalPositionMiddle ModalPosition = "middle"
	ModalPositionBottom ModalPosition = "bottom"
)

type Modal struct {
	Text     string
	Position ModalPosition
}

func convertModalPosition(pos ModalPosition) *model.ModalPosition {
	p := model.ModalPosition(pos)
	if p.IsValid() {
		return &p
	} else {
		return nil
	}
}

func (p *Modal) ToGraphQLModal() *model.Modal {
	// copy to avoid mutation effect afterwards
	text := stringRef(p.Text)
	position := convertModalPosition(p.Position) //p.Position is passed-by-copy, to avoid mutation effect afterwards

	return &model.Modal{
		Text:     text,
		Position: position,
	}
}
