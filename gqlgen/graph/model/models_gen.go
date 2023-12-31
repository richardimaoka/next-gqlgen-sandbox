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

type TerminalElement interface {
	IsTerminalElement()
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

type BrowserColumn struct {
	Placeholder *string `json:"_placeholder,omitempty"`
}

func (BrowserColumn) IsColumn()                    {}
func (this BrowserColumn) GetPlaceholder() *string { return this.Placeholder }

type ColumnWrapper struct {
	Index  *int    `json:"index,omitempty"`
	Column Column  `json:"column,omitempty"`
	Name   *string `json:"name,omitempty"`
}

type FileHighlight struct {
	FromLine *int `json:"fromLine,omitempty"`
	ToLine   *int `json:"toLine,omitempty"`
}

type FileNode struct {
	NodeType  *FileNodeType `json:"nodeType,omitempty"`
	Name      *string       `json:"name,omitempty"`
	FilePath  *string       `json:"filePath,omitempty"`
	Offset    *int          `json:"offset,omitempty"`
	IsUpdated *bool         `json:"isUpdated,omitempty"`
}

type ImageCentered struct {
	Width  *int    `json:"width,omitempty"`
	Height *int    `json:"height,omitempty"`
	Path   *string `json:"path,omitempty"`
	URL    *string `json:"url,omitempty"`
}

type ImageDescriptionColumn struct {
	Placeholder      *string                 `json:"_placeholder,omitempty"`
	Description      *Markdown               `json:"description,omitempty"`
	Image            *ImageCentered          `json:"image,omitempty"`
	Order            *ImageDescriptionOrder  `json:"order,omitempty"`
	ContentsPosition *ColumnVerticalPosition `json:"contentsPosition,omitempty"`
}

func (ImageDescriptionColumn) IsColumn()                    {}
func (this ImageDescriptionColumn) GetPlaceholder() *string { return this.Placeholder }

type Markdown struct {
	Step      *string            `json:"step,omitempty"`
	Contents  *string            `json:"contents,omitempty"`
	Alignment *MarkdownAlignment `json:"alignment,omitempty"`
}

type MarkdownColumn struct {
	Placeholder      *string                 `json:"_placeholder,omitempty"`
	Description      *Markdown               `json:"description,omitempty"`
	ContentsPosition *ColumnVerticalPosition `json:"contentsPosition,omitempty"`
}

func (MarkdownColumn) IsColumn()                    {}
func (this MarkdownColumn) GetPlaceholder() *string { return this.Placeholder }

type MarkdownOld struct {
	Step     *string `json:"step,omitempty"`
	Contents *string `json:"contents,omitempty"`
}

type Modal struct {
	Text     *string        `json:"text,omitempty"`
	Position *ModalPosition `json:"position,omitempty"`
}

type NextAction struct {
	TerminalName    *string          `json:"terminalName,omitempty"`
	TerminalCommand *TerminalCommand `json:"terminalCommand,omitempty"`
	Markdown        *MarkdownOld     `json:"markdown,omitempty"`
}

type OpenFile struct {
	FilePath      *string          `json:"filePath,omitempty"`
	FileName      *string          `json:"fileName,omitempty"`
	Content       *string          `json:"content,omitempty"`
	IsFullContent *bool            `json:"isFullContent,omitempty"`
	Language      *string          `json:"language,omitempty"`
	Highlight     []*FileHighlight `json:"highlight,omitempty"`
	Size          *float64         `json:"size,omitempty"`
}

type Page struct {
	Step        *string          `json:"step,omitempty"`
	NextStep    *string          `json:"nextStep,omitempty"`
	PrevStep    *string          `json:"prevStep,omitempty"`
	Columns     []*ColumnWrapper `json:"columns,omitempty"`
	Modal       *Modal           `json:"modal,omitempty"`
	FocusColumn *string          `json:"focusColumn,omitempty"`
}

type PageState struct {
	Step       *string      `json:"step,omitempty"`
	NextStep   *string      `json:"nextStep,omitempty"`
	PrevStep   *string      `json:"prevStep,omitempty"`
	SourceCode *SourceCode  `json:"sourceCode,omitempty"`
	Terminals  []*Terminal  `json:"terminals,omitempty"`
	Markdown   *MarkdownOld `json:"markdown,omitempty"`
	NextAction *NextAction  `json:"nextAction,omitempty"`
}

type SourceCodeColumn struct {
	Placeholder *string     `json:"_placeholder,omitempty"`
	SourceCode  *SourceCode `json:"sourceCode,omitempty"`
}

func (SourceCodeColumn) IsColumn()                    {}
func (this SourceCodeColumn) GetPlaceholder() *string { return this.Placeholder }

type Terminal struct {
	Step             *string         `json:"step,omitempty"`
	Name             *string         `json:"name,omitempty"`
	CurrentDirectory *string         `json:"currentDirectory,omitempty"`
	Nodes            []*TerminalNode `json:"nodes,omitempty"`
}

type TerminalColumn struct {
	Placeholder *string   `json:"_placeholder,omitempty"`
	Terminal    *Terminal `json:"terminal,omitempty"`
}

func (TerminalColumn) IsColumn()                    {}
func (this TerminalColumn) GetPlaceholder() *string { return this.Placeholder }

type TerminalCommand struct {
	BeforeExecution *bool   `json:"beforeExecution,omitempty"`
	Command         *string `json:"command,omitempty"`
}

func (TerminalCommand) IsTerminalElement() {}

type TerminalNode struct {
	Content TerminalElement `json:"content,omitempty"`
}

type TerminalOutput struct {
	Output *string `json:"output,omitempty"`
}

func (TerminalOutput) IsTerminalElement() {}

type ColumnVerticalPosition string

const (
	ColumnVerticalPositionTop    ColumnVerticalPosition = "TOP"
	ColumnVerticalPositionCenter ColumnVerticalPosition = "CENTER"
	ColumnVerticalPositionBottom ColumnVerticalPosition = "BOTTOM"
)

var AllColumnVerticalPosition = []ColumnVerticalPosition{
	ColumnVerticalPositionTop,
	ColumnVerticalPositionCenter,
	ColumnVerticalPositionBottom,
}

func (e ColumnVerticalPosition) IsValid() bool {
	switch e {
	case ColumnVerticalPositionTop, ColumnVerticalPositionCenter, ColumnVerticalPositionBottom:
		return true
	}
	return false
}

func (e ColumnVerticalPosition) String() string {
	return string(e)
}

func (e *ColumnVerticalPosition) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = ColumnVerticalPosition(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid ColumnVerticalPosition", str)
	}
	return nil
}

func (e ColumnVerticalPosition) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
}

type FileNodeType string

const (
	FileNodeTypeFile      FileNodeType = "FILE"
	FileNodeTypeDirectory FileNodeType = "DIRECTORY"
)

var AllFileNodeType = []FileNodeType{
	FileNodeTypeFile,
	FileNodeTypeDirectory,
}

func (e FileNodeType) IsValid() bool {
	switch e {
	case FileNodeTypeFile, FileNodeTypeDirectory:
		return true
	}
	return false
}

func (e FileNodeType) String() string {
	return string(e)
}

func (e *FileNodeType) UnmarshalGQL(v interface{}) error {
	str, ok := v.(string)
	if !ok {
		return fmt.Errorf("enums must be strings")
	}

	*e = FileNodeType(str)
	if !e.IsValid() {
		return fmt.Errorf("%s is not a valid FileNodeType", str)
	}
	return nil
}

func (e FileNodeType) MarshalGQL(w io.Writer) {
	fmt.Fprint(w, strconv.Quote(e.String()))
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
