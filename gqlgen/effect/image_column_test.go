package effect_test

import (
	"fmt"
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/effect"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
)

func TestReadImgColumn(t *testing.T) {
	filepath := "testdata/bg_columns.json"
	effects, err := effect.ReadImageColumnEffects(filepath)
	if err != nil {
		t.Fatalf("ReadImageColumnEffects failed to read file, %s", err)
	}

	for i, e := range effects {
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/img_col_eff_golden%d.json", i), e)
	}
}

func TestToImgColumn(t *testing.T) {
	filepath := "testdata/img_columns.json"
	effects, err := effect.ReadImageColumnEffects(filepath)
	if err != nil {
		t.Fatalf("ReadImageColumnEffects failed to read file, %s", err)
	}

	for i, e := range effects {
		col := e.ToImgDescColumn()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/img_col_golden%d.json", i), col)
	}
}

func TestToGraphQLImgColumn(t *testing.T) {
	filepath := "testdata/img_columns.json"
	effects, err := effect.ReadImageColumnEffects(filepath)
	if err != nil {
		t.Fatalf("ReadImageColumnEffects failed to read file, %s", err)
	}

	for i, e := range effects {
		col := e.ToImgDescColumn()
		gqlModel := col.ToGraphQLImgDescCol()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/img_col_gql_golden%d.json", i), gqlModel)
	}
}
