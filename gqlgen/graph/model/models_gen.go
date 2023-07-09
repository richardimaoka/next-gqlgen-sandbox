// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

import (
	"fmt"
	"io"
	"strconv"
)

type Column interface {
	IsColumn()
	GetPlaceholder() *string
}

type BackgroundImageColumn struct {
	Placeholder *string `json:"_placeholder,omitempty"`
	Width       *int    `json:"width,omitempty"`
	Height      *int    `json:"height,omitempty"`
	Path        *string `json:"path,omitempty"`
	URL         *string `json:"url,omitempty"`
	Modal       *Modal  `json:"modal,omitempty"`
}

func (BackgroundImageColumn) IsColumn()                    {}
func (this BackgroundImageColumn) GetPlaceholder() *string { return this.Placeholder }

type ColumnWrapper struct {
	Index  *int   `json:"index,omitempty"`
	Column Column `json:"column,omitempty"`
}

type ImageCentered struct {
	Width  *int    `json:"width,omitempty"`
	Height *int    `json:"height,omitempty"`
	Path   *string `json:"path,omitempty"`
	URL    *string `json:"url,omitempty"`
}

type ImageDescriptionColumn struct {
	Placeholder *string                `json:"_placeholder,omitempty"`
	Description *Markdown              `json:"description,omitempty"`
	Image       *ImageCentered         `json:"image,omitempty"`
	Order       *ImageDescriptionOrder `json:"order,omitempty"`
}

func (ImageDescriptionColumn) IsColumn()                    {}
func (this ImageDescriptionColumn) GetPlaceholder() *string { return this.Placeholder }

type Markdown struct {
	Contents  *string            `json:"contents,omitempty"`
	Alignment *MarkdownAlignment `json:"alignment,omitempty"`
}

type MarkdownColumn struct {
	Placeholder *string   `json:"_placeholder,omitempty"`
	Description *Markdown `json:"description,omitempty"`
}

func (MarkdownColumn) IsColumn()                    {}
func (this MarkdownColumn) GetPlaceholder() *string { return this.Placeholder }

type Modal struct {
	Text     *string        `json:"text,omitempty"`
	Position *ModalPosition `json:"position,omitempty"`
}

type PageState struct {
	Step     *string          `json:"step,omitempty"`
	NextStep *string          `json:"nextStep,omitempty"`
	PrevStep *string          `json:"prevStep,omitempty"`
	Columns  []*ColumnWrapper `json:"columns,omitempty"`
}

type ImageDescriptionOrder string

const (
	ImageDescriptionOrderImageThenDescription ImageDescriptionOrder = "IMAGE_THEN_DESCRIPTION"
	ImageDescriptionOrderDescriptionThenImage ImageDescriptionOrder = "DESCRIPTION_THEN_IMAGE"
)

var AllImageDescriptionOrder = []ImageDescriptionOrder{
	ImageDescriptionOrderImageThenDescription,
	ImageDescriptionOrderDescriptionThenImage,
}

func (e ImageDescriptionOrder) IsValid() bool {
	switch e {
	case ImageDescriptionOrderImageThenDescription, ImageDescriptionOrderDescriptionThenImage:
		return true
	}
	return false
}

func (e ImageDescriptionOrder) String() string {
	return string(e)
}

func (e *ImageDescriptionOrder) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = ImageDescriptionOrder(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid ImageDescriptionOrder", str)
	}
	return nil
}

func (e ImageDescriptionOrder) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type MarkdownAlignment string

const (
	MarkdownAlignmentLeft   MarkdownAlignment = "LEFT"
	MarkdownAlignmentCenter MarkdownAlignment = "CENTER"
)

var AllMarkdownAlignment = []MarkdownAlignment{
	MarkdownAlignmentLeft,
	MarkdownAlignmentCenter,
}

func (e MarkdownAlignment) IsValid() bool {
	switch e {
	case MarkdownAlignmentLeft, MarkdownAlignmentCenter:
		return true
	}
	return false
}

func (e MarkdownAlignment) String() string {
	return string(e)
}

func (e *MarkdownAlignment) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = MarkdownAlignment(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid MarkdownAlignment", str)
	}
	return nil
}

func (e MarkdownAlignment) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type ModalPosition string

const (
	ModalPositionTop    ModalPosition = "TOP"
	ModalPositionCenter ModalPosition = "CENTER"
	ModalPositionBottom ModalPosition = "BOTTOM"
)

var AllModalPosition = []ModalPosition{
	ModalPositionTop,
	ModalPositionCenter,
	ModalPositionBottom,
}

func (e ModalPosition) IsValid() bool {
	switch e {
	case ModalPositionTop, ModalPositionCenter, ModalPositionBottom:
		return true
	}
	return false
}

func (e ModalPosition) String() string {
	return string(e)
}

func (e *ModalPosition) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = ModalPosition(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid ModalPosition", str)
	}
	return nil
}

func (e ModalPosition) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}
