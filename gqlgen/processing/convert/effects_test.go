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

	internal.CompareWitGoldenFile(t, *updateFlag, "testdata/convert/step_converter_golden.json", effects)
}

func TestToGraphQLPages(t *testing.T) {
	effects, err := convert.ReadStepConverters("testdata")
	if err != nil {
		t.Fatalf("ReadStepConverters failed to read file, %s", err)
	}

	pages := effects.ToGraphQLPages()
	internal.CompareWitGoldenFile(t, *updateFlag, "testdata/convert/pages.json", pages)
}
