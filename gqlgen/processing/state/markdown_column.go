package state

import "github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"

type MarkdownColumn struct {
	Image       Image
	Description Markdown
}

func (p *MarkdownColumn) ToGraphQLMarkdownColumn() *model.MarkdownColumn {
	// copy to avoid mutation effect afterwards
	description := p.Description.ToGraphQLMarkdown()

	return &model.MarkdownColumn{
		Description: description,
	}
}
