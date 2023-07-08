package effect_test

import (
	"fmt"
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/effect"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
)

func TestReadBgColumn(t *testing.T) {
	filepath := "testdata/bg_columns.json"
	effects, err := effect.ReadBackgroundColumnEffects(filepath)
	if err != nil {
		t.Fatalf("ReadBackgroundColumnEffects failed to read file, %s", err)
	}

	for i, e := range effects {
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/effect/bg_col_eff_golden%d.json", i), e)
	}
}

func TestToBgColumn(t *testing.T) {
	filepath := "testdata/bg_columns.json"
	effects, err := effect.ReadBackgroundColumnEffects(filepath)
	if err != nil {
		t.Fatalf("ReadBackgroundColumnEffects failed to read file, %s", err)
	}

	for i, e := range effects {
		col := e.ToBgImgColumn()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/column/bg_col_golden%d.json", i), col)
	}
}

func TestToGraphQLBgColumn(t *testing.T) {
	filepath := "testdata/bg_columns.json"
	effects, err := effect.ReadBackgroundColumnEffects(filepath)
	if err != nil {
		t.Fatalf("ReadBackgroundColumnEffects failed to read file, %s", err)
	}

	for i, e := range effects {
		col := e.ToBgImgColumn()
		gqlModel := col.ToGraphQLBgImgCol()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/graphql/bg_col_gql_golden%d.json", i), gqlModel)
	}
}