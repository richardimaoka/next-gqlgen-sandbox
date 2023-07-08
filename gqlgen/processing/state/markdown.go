package state

import "github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"

type MarkdownAlignment string

const (
	MarkdownAlignmentLeft   MarkdownAlignment = "LEFT"
	MarkdownAlignmentCenter MarkdownAlignment = "CENTER"
)

type Markdown struct {
	Contents  string
	Alignment MarkdownAlignment
}

func convertMarkdownAlignment(align MarkdownAlignment) *model.MarkdownAlignment {
	a := model.MarkdownAlignment(align)
	if a.IsValid() {
		return &a
	} else {
		return nil
	}
}

func (p *Markdown) ToGraphQLMarkdown() *model.Markdown {
	// copy to avoid mutation effect afterwards
	contents := stringRef(p.Contents)
	alignment := convertMarkdownAlignment(p.Alignment) //p.Alignment is passed-by-copy, to avoid mutation effect afterwards

	return &model.Markdown{
		Contents:  contents,
		Alignment: alignment,
	}
}
