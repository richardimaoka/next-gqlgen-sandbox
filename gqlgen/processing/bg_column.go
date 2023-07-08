package processing

import "github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"

type BackgroundImageColumn struct {
	Width  int
	Height int
	Path   string
	URL    string
	Modal  Modal
}

func stringRef(s string) *string {
	if s == "" {
		return nil
	} else {
		return &s
	}
}

func (p *BackgroundImageColumn) ToGraphQLBgImgCol() *model.BackgroundImageColumn {
	// copy to avoid mutation effect afterwards
	width := p.Width
	height := p.Height
	path := p.Path
	url := p.URL
	modal := p.Modal

	return &model.BackgroundImageColumn{
		Width:  &width,
		Height: &height,
		Path:   stringRef(path),
		URL:    stringRef(url),
		Modal:  modal.ToGraphQLModal(),
	}
}
