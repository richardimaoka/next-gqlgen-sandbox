package read

import (
	"encoding/json"
	"fmt"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
)

type Step struct {
	SeqNo    int    `json:"seqNo"`
	Step     string `json:"step"`
	NColumns int    `json:"nColumns"`
}

type Steps []Step

func ReadSteps(filePath string) (Steps, error) {
	var elements Steps
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &elements) }
	err := internal.JsonRead(filePath, unmarshaller)
	if err != nil {
		return nil, fmt.Errorf("ReadSteps failed to read file, %s", err)
	}

	return elements, err
}
