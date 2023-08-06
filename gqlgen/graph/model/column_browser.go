package model

import "encoding/json"

func (this BrowserColumn) MarshalJSON() ([]byte, error) {
	extendedOutput := struct {
		TypeName    string  `json:"__typename"`
		Placeholder *string `json:"_placeholder,omitempty"`
	}{
		TypeName:    "BrowserColumn",
		Placeholder: this.Placeholder,
	}

	return json.Marshal(extendedOutput)
}
