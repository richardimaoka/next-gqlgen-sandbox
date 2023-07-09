package convert_test

import (
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/convert"
)

func TestReadEffects(t *testing.T) {
	_, err := convert.ReadEffects("testdata")
	if err != nil {
		t.Fatalf("ReadEffects failed to read file, %s", err)
	}
}
