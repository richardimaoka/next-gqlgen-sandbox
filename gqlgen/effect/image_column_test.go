package effect_test

import (
	"fmt"
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/effect"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
)

func TestImgColumn(t *testing.T) {
	filepath := "testdata/bg_columns.json"
	effects, err := effect.ReadImageColumnEffects(filepath)
	if err != nil {
		t.Fatalf("ReadImageColumnEffects failed to read file, %s", err)
	}

	for i, e := range effects {
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/img_column_golden%d.json", i), e)
	}
}
