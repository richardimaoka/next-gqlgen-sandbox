package read_test

import (
	"fmt"
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/read"
)

func TestReadImgColumn(t *testing.T) {
	filepath := "testdata/bg_columns.json"
	effects, err := read.ReadImageDecriptionColumns(filepath)
	if err != nil {
		t.Fatalf("ReadImageDecriptionColumns failed to read file, %s", err)
	}

	for i, e := range effects {
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/read/img_col_eff_golden%d.json", i), e)
	}
}

func TestToImgColumn(t *testing.T) {
	filepath := "testdata/img_columns.json"
	effects, err := read.ReadImageDecriptionColumns(filepath)
	if err != nil {
		t.Fatalf("ReadImageDecriptionColumns failed to read file, %s", err)
	}

	for i, e := range effects {
		col := e.ToStateImgDescColumn()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/state/img_col_golden%d.json", i), col)
	}
}

func TestToGraphQLImgColumn(t *testing.T) {
	filepath := "testdata/img_columns.json"
	effects, err := read.ReadImageDecriptionColumns(filepath)
	if err != nil {
		t.Fatalf("ReadImageDecriptionColumns failed to read file, %s", err)
	}

	for i, e := range effects {
		col := e.ToStateImgDescColumn()
		gqlModel := col.ToGraphQLImgDescCol()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/graphql/img_col_gql_golden%d.json", i), gqlModel)
	}
}
