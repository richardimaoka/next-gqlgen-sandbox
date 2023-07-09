package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.34

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
)

// Page is the resolver for the page field.
func (r *queryResolver) Page(ctx context.Context, tutorial string, step *string) (*model.PageState, error) {
	var filepath string
	if step == nil {
		filepath = fmt.Sprintf("data/%s/state/_initial.json", tutorial)
	} else {
		filepath = fmt.Sprintf("data/%s/state/%s.json", tutorial, *step)
	}

	var page *model.PageState
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &page) }
	err := internal.JsonRead(filepath, unmarshaller)
	if err != nil {
		return nil, fmt.Errorf("Error in Page(), %v", err)
	}

	return page, nil
}

// Columns is the resolver for the columns field.
func (r *queryResolver) Columns(ctx context.Context) ([]*model.ColumnWrapper, error) {
	var columnWrappers []*model.ColumnWrapper
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &columnWrappers) }
	err := internal.JsonRead("data/state000.json", unmarshaller)
	if err != nil {
		return nil, fmt.Errorf("Error in Columns(), %v", err)
	}

	return columnWrappers, nil
}

// ImageDescriptionColumn is the resolver for the imageDescriptionColumn field.
func (r *queryResolver) ImageDescriptionColumn(ctx context.Context) (*model.ImageDecriptionColumn, error) {
	file := "data/ImageDescriptionColumn.json"
	bytes, err := os.ReadFile(file)
	if err != nil {
		log.Printf("error reading file %s in Columns(), %+v", file, err)
		return nil, err
	}

	var column model.ImageDecriptionColumn
	json.Unmarshal(bytes, &column)
	if err != nil {
		log.Printf("error unmarshaling file %s in Columns(), %+v", file, err)
		return nil, err
	}

	log.Printf("ImageDescriptionColumn from %s successfully unmarshaled", file)
	return &column, nil
}

// MarkdownColumn is the resolver for the markdownColumn field.
func (r *queryResolver) MarkdownColumn(ctx context.Context) (*model.MarkdownColumn, error) {
	panic(fmt.Errorf("not implemented: MarkdownColumn - markdownColumn"))
}

// BackgroundImageColumn is the resolver for the backgroundImageColumn field.
func (r *queryResolver) BackgroundImageColumn(ctx context.Context) (*model.BackgroundImageColumn, error) {
	panic(fmt.Errorf("not implemented: BackgroundImageColumn - backgroundImageColumn"))
}

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
