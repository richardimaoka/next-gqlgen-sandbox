package processing

import "github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"

type ImageDecriptionColumn struct {
	Image       Image
	Description Markdown
}

func (p *ImageDecriptionColumn) ToGraphQLImgDescCol() *model.ImageDecriptionColumn {
	// copy to avoid mutation effect afterwards
	image := p.Image.ToGraphQLImage()
	description := p.Description.ToGraphQLMarkdown()

	return &model.ImageDecriptionColumn{
		Image:       image,
		Description: description,
	}
}
