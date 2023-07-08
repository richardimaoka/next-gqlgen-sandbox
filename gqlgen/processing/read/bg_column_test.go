package read_test

import (
	"fmt"
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/read"
)

func TestReadBgColumn(t *testing.T) {
	filepath := "testdata/bg_columns.json"
	effects, err := read.ReadBackgroundImageColumns(filepath)
	if err != nil {
		t.Fatalf("ReadBackgroundImageColumns failed to read file, %s", err)
	}

	for i, e := range effects {
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/read/bg_col_eff_golden%d.json", i), e)
	}
}

func TestToBgColumn(t *testing.T) {
	filepath := "testdata/bg_columns.json"
	effects, err := read.ReadBackgroundImageColumns(filepath)
	if err != nil {
		t.Fatalf("ReadBackgroundImageColumns failed to read file, %s", err)
	}

	for i, e := range effects {
		col := e.ToStateBgImgColumn()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/state/bg_col_golden%d.json", i), col)
	}
}

func TestToGraphQLBgColumn(t *testing.T) {
	filepath := "testdata/bg_columns.json"
	effects, err := read.ReadBackgroundImageColumns(filepath)
	if err != nil {
		t.Fatalf("ReadBackgroundImageColumns failed to read file, %s", err)
	}

	for i, e := range effects {
		col := e.ToStateBgImgColumn()
		gqlModel := col.ToGraphQLBgImgCol()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/graphql/bg_col_gql_golden%d.json", i), gqlModel)
	}
}
