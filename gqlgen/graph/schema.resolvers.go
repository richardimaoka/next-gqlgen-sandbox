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

// PageState is the resolver for the pageState field.
func (r *queryResolver) PageState(ctx context.Context, step *string) (*model.PageState, error) {
	panic(fmt.Errorf("not implemented: PageState - pageState"))
}

// Page is the resolver for the page field.
func (r *queryResolver) Page(ctx context.Context, tutorial string, step *string) (*model.Page, error) {
	var dirName = fmt.Sprintf("data/%s/state", tutorial)
	var initialStep = "_initial"

	var filename string
	if step == nil {
		filename = fmt.Sprintf(dirName+"/%s.json", initialStep)
	} else {
		filename = fmt.Sprintf(dirName+"/%s.json", *step)
	}

	log.Printf("reading data from %s", filename)
	data, err := os.ReadFile(filename)
	if err != nil {
		return nil, err
	}

	var page model.Page
	err = json.Unmarshal(data, &page)
	if err != nil {
		log.Printf("failed to read data from %s, %s", filename, err)
		return nil, fmt.Errorf("internal server error %s", *step)
	}

	return &page, nil
}

// SourceCode is the resolver for the sourceCode field.
func (r *queryResolver) SourceCode(ctx context.Context) (*model.SourceCode, error) {
	data, err := os.ReadFile("data/sourcecode.json")
	if err != nil {
		return nil, err
	}

	var sourceCode model.SourceCode
	err = json.Unmarshal(data, &sourceCode)
	if err != nil {
		return nil, fmt.Errorf("internal server error - failed to unmarshal page from %s", err)
	}

	return &sourceCode, nil
}

// OpenFile is the resolver for the openFile field.
func (r *sourceCodeResolver) OpenFile(ctx context.Context, obj *model.SourceCode, filePath *string) (*model.OpenFile, error) {
	filename := "data/sourcecode.json"
	data, err := os.ReadFile(filename)
	if err != nil {
		return nil, err
	}

	var sourceCode *model.SourceCode
	err = json.Unmarshal(data, &sourceCode)
	if err != nil {
		return nil, fmt.Errorf("internal server error - failed to unmarshal source code from %s", filename)
	}

	var openFilePath string
	if filePath != nil {
		openFilePath = *filePath
	} else if obj.DefaultOpenFilePath != "" {
		log.Printf("filePath argument is null, so using default file path %s", obj.DefaultOpenFilePath)
		openFilePath = obj.DefaultOpenFilePath
	} else {
		log.Printf("returning empty openFile as filePath argument is null and defaultOpenFilePath is empty")
		// return nil openFile, instead of error, so that the entire page can still render
		// TODO: enable default open file returning, once SourceCode has defaultOpenFilePath set
		return nil, nil
	}

	openFile, ok := sourceCode.FileContents[openFilePath]
	if !ok {
		log.Printf("OpenFile() file not found: %s", openFilePath)
		// return nil openFile, instead of error, so that the entire page can still render
		return nil, nil
	}

	log.Printf("OpenFile() returning file for: %s", openFilePath)
	return &openFile, nil
}

// Query returns QueryResolver implementation.
func (r *Resolver) Query() QueryResolver { return &queryResolver{r} }

// SourceCode returns SourceCodeResolver implementation.
func (r *Resolver) SourceCode() SourceCodeResolver { return &sourceCodeResolver{r} }

type queryResolver struct{ *Resolver }
type sourceCodeResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *queryResolver) Columns(ctx context.Context) ([]*model.ColumnWrapper, error) {
	var columnWrappers []*model.ColumnWrapper
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &columnWrappers) }
	err := internal.JsonRead("data/state000.json", unmarshaller)
	if err != nil {
		return nil, fmt.Errorf("Error in Columns(), %v", err)
	}

	return columnWrappers, nil
}
func (r *queryResolver) ImageDescriptionColumn(ctx context.Context) (*model.ImageDescriptionColumn, error) {
	file := "data/ImageDescriptionColumn.json"
	bytes, err := os.ReadFile(file)
	if err != nil {
		log.Printf("error reading file %s in Columns(), %+v", file, err)
		return nil, err
	}

	var column model.ImageDescriptionColumn
	json.Unmarshal(bytes, &column)
	if err != nil {
		log.Printf("error unmarshaling file %s in Columns(), %+v", file, err)
		return nil, err
	}

	log.Printf("ImageDescriptionColumn from %s successfully unmarshaled", file)
	return &column, nil
}
func (r *queryResolver) MarkdownColumn(ctx context.Context) (*model.MarkdownColumn, error) {
	panic(fmt.Errorf("not implemented: MarkdownColumn - markdownColumn"))
}
func (r *queryResolver) BackgroundImageColumn(ctx context.Context) (*model.BackgroundImageColumn, error) {
	panic(fmt.Errorf("not implemented: BackgroundImageColumn - backgroundImageColumn"))
}
