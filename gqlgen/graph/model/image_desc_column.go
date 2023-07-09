package model

import "encoding/json"

func (this ImageDecriptionColumn) MarshalJSON() ([]byte, error) {
	extendedOutput := struct {
		TypeName    string                 `json:"__typename"`
		Placeholder *string                `json:"_placeholder,omitempty"`
		Description *Markdown              `json:"description,omitempty"`
		Image       *ImageCentered         `json:"image,omitempty"`
		Order       *ImageDescriptionOrder `json:"order,omitempty"`
	}{
		TypeName:    "ImageDecriptionColumn",
		Placeholder: this.Placeholder,
		Description: this.Description,
		Image:       this.Image,
		Order:       this.Order,
	}

	return json.Marshal(extendedOutput)
}
