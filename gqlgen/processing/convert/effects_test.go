package convert_test

import (
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/convert"
)

func TestReadEffects(t *testing.T) {
	effects, err := convert.ReadEffects("testdata")
	if err != nil {
		t.Fatalf("ReadEffects failed to read file, %s", err)
	}

	internal.CompareWitGoldenFile(t, *updateFlag, "testdata/effects_golden.json", effects)
}
