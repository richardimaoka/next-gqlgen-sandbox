package convert_test

import (
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/convert"
)

func TestReadStepConverters(t *testing.T) {
	effects, err := convert.ReadStepConverters("testdata")
	if err != nil {
		t.Fatalf("ReadStepConverters failed to read file, %s", err)
	}

	internal.CompareWitGoldenFile(t, *updateFlag, "testdata/step_converter_golden.json", effects)
}
