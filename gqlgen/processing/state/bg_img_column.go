package state

import "github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"

type BackgroundImageColumn struct {
	Width  int
	Height int
	Path   string
	URL    string
	Modal  Modal
}

func (p *BackgroundImageColumn) ToGraphQLBgImgCol() *model.BackgroundImageColumn {
	// copy to avoid mutation effect afterwards
	width := p.Width
	height := p.Height
	path := stringRef(p.Path)
	url := stringRef(p.URL)
	modal := p.Modal.ToGraphQLModal() //ToGraphQLModal() performs copy internally, to avoid mutation effect afterwards

	return &model.BackgroundImageColumn{
		Width:  &width,
		Height: &height,
		Path:   path,
		URL:    url,
		Modal:  modal,
	}
}
