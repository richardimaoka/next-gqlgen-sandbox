package processing

import "github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"

type Image struct {
	Width          int
	Height         int
	OriginalWidth  int
	OriginalHeight int
	Path           string
	URL            string
}

func (p *Image) ToGraphQLImage() *model.ImageCentered {
	// copy to avoid mutation effect afterwards
	width := p.Width
	height := p.Height
	path := stringRef(p.Path)
	url := stringRef(p.URL)

	return &model.ImageCentered{
		Width:  &width,
		Height: &height,
		Path:   path,
		URL:    url,
	}
}
