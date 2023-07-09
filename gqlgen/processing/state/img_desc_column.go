package state

import "github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"

type ImageDescriptionColumn struct {
	Image       Image
	Description Markdown
}

func (p *ImageDescriptionColumn) ToGraphQLImgDescCol() *model.ImageDescriptionColumn {
	// copy to avoid mutation effect afterwards
	image := p.Image.ToGraphQLImage()
	description := p.Description.ToGraphQLMarkdown()

	return &model.ImageDescriptionColumn{
		Image:       image,
		Description: description,
	}
}
