package read_test

import (
	"fmt"
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/read"
)

func TestReadImgColumn(t *testing.T) {
	filepath := "testdata/bg_columns.json"
	effects, err := read.ReadImageColumnEffects(filepath)
	if err != nil {
		t.Fatalf("ReadImageColumnEffects failed to read file, %s", err)
	}

	for i, e := range effects {
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/effect/img_col_eff_golden%d.json", i), e)
	}
}

func TestToImgColumn(t *testing.T) {
	filepath := "testdata/img_columns.json"
	effects, err := read.ReadImageColumnEffects(filepath)
	if err != nil {
		t.Fatalf("ReadImageColumnEffects failed to read file, %s", err)
	}

	for i, e := range effects {
		col := e.ToImgDescColumn()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/column/img_col_golden%d.json", i), col)
	}
}

func TestToGraphQLImgColumn(t *testing.T) {
	filepath := "testdata/img_columns.json"
	effects, err := read.ReadImageColumnEffects(filepath)
	if err != nil {
		t.Fatalf("ReadImageColumnEffects failed to read file, %s", err)
	}

	for i, e := range effects {
		col := e.ToImgDescColumn()
		gqlModel := col.ToGraphQLImgDescCol()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/graphql/img_col_gql_golden%d.json", i), gqlModel)
	}
}
