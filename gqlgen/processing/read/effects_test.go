package read_test

import (
	"fmt"
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/read"
)

func TestReadEffects(t *testing.T) {
	_, err := read.ReadEffects("testdata")
	if err != nil {
		t.Fatalf("ReadEffects failed to read file, %s", err)
	}
}

func TestToColumns(t *testing.T) {
	effects, err := read.ReadEffects("testdata")
	if err != nil {
		t.Fatalf("ReadEffects failed to read file, %s", err)
	}

	for i, effect := range effects {
		columns := effect.ToStateColumns()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/graphql/columns_golden%d.json", i), columns)
	}
}
