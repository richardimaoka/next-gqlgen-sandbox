package processing

import "github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"

type ModalPosition string

const (
	ModalPositionTop    ModalPosition = "top"
	ModalPositionMiddle ModalPosition = "middle"
	ModalPositionBottom ModalPosition = "bottom"
)

type Modal struct {
	text     string
	position ModalPosition
}

func convertModalPosition(pos ModalPosition) model.ModalPosition {
	p := model.ModalPosition(pos)
	if p.IsValid() {
		return p
	} else {
		return model.ModalPositionTop
	}
}

func (p *Modal) ToGraphQLModal() *model.Modal {
	// copy to avoid mutation effect afterwards
	text := p.text
	position := convertModalPosition(p.position)

	return &model.Modal{
		Text:     &text,
		Position: &position,
	}
}
