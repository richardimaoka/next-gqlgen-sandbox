package read

import (
	"encoding/json"
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
)

type Step struct {
	SeqNo int    `json:"seqNo"`
	Step  string `json:"step"`
}

type Steps []Step

func ReadSteps(filePath string) (Steps, error) {
	var effects Steps
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &effects) }
	err := internal.JsonRead(filePath, unmarshaller)
	if err != nil {
		return nil, fmt.Errorf("ReadSteps failed to read file, %s", err)
	}

	return effects, err
}