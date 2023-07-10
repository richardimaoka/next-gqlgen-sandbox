package read_test

import (
	"fmt"
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/read"
)

func TestReadMarkdownColumn(t *testing.T) {
	filepath := "testdata/md_columns.json"
	elements, err := read.ReadMarkdownColumns(filepath)
	if err != nil {
		t.Fatalf("ReadMarkdownColumns failed to read file, %s", err)
	}

	for i, e := range elements {
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/read/md_col_eff_golden%d.json", i), e)
	}
}

func TestToMarkdownColumn(t *testing.T) {
	filepath := "testdata/md_columns.json"
	elements, err := read.ReadMarkdownColumns(filepath)
	if err != nil {
		t.Fatalf("ReadMarkdownColumns failed to read file, %s", err)
	}

	for i, e := range elements {
		col := e.ToStateMarkdownColumn()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/state/md_col_golden%d.json", i), col)
	}
}

func TestToGraphQLMarkdownColumn(t *testing.T) {
	filepath := "testdata/md_columns.json"
	columns, err := read.ReadMarkdownColumns(filepath)
	if err != nil {
		t.Fatalf("ReadMarkdownColumns failed to read file, %s", err)
	}

	for i, e := range columns {
		col := e.ToStateMarkdownColumn()
		gqlModel := col.ToGraphQLMarkdownColumn()
		internal.CompareWitGoldenFile(t, *updateFlag, fmt.Sprintf("testdata/graphql/md_col_gql_golden%d.json", i), gqlModel)
	}
}
