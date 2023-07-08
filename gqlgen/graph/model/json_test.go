package model_test

import (
	"encoding/json"
	"testing"

	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph/model"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/internal"
)

func TestUnmarshalImageDecriptionColumn(t *testing.T) {
	var wrapper model.ColumnWrapper
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &wrapper) }
	err := internal.JsonRead("testdata/img-col-wrapper.json", unmarshaller)
	if err != nil {
		t.Fatalf("TestColumnUnmarshal failed, %+v", err)
	}

	col, ok := wrapper.Column.(*model.ImageDecriptionColumn)
	if !ok {
		t.Fatalf("TestColumnUnmarshal failed to cast wrapper.column to ImageDecriptionColumn")
	}
	if col.Description == nil || col.Description.Contents == nil {
		t.Fatalf("TestColumnUnmarshal failed to get description string, %v", col.Description)
	}
	expectedDescription := "それではデモンストレーションの手順を見ていきます。\n\n1. まずはGoogle Cloud Platform上での設定が必要です。OAuth Client IDを作成しましょう。"
	if *col.Description.Contents != expectedDescription {
		t.Fatalf("TestColumnUnmarshal failed, description mismatch\nexpected = %s,\nresult   = %s", expectedDescription, *col.Description.Contents)
	}
}

func TestUnmarshalBackgroundImageColumn(t *testing.T) {
	var wrapper model.ColumnWrapper
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &wrapper) }
	err := internal.JsonRead("testdata/bg-col-wrapper.json", unmarshaller)
	if err != nil {
		t.Fatalf("TestUnmarshalBackgroundImageColumn failed, %+v", err)
	}

	col, ok := wrapper.Column.(*model.BackgroundImageColumn)
	if !ok {
		t.Fatalf("TestUnmarshalBackgroundImageColumn failed to cast wrapper.column to BackgroundImageColumn")
	}
	if col.Path == nil {
		t.Fatalf("TestUnmarshalBackgroundImageColumn failed to get path string, %v", col.Path)
	}
	expectedPath := "/images/003.png"
	if *col.Path != expectedPath {
		t.Fatalf("TestUnmarshalBackgroundImageColumn failed, description mismatch\nexpected = %s,\nresult   = %s", expectedPath, *col.Path)
	}
}

func TestUnmarshalColumnWrapperSlice(t *testing.T) {
	var wrappers []*model.ColumnWrapper
	unmarshaller := func(jsonBytes []byte) error { return json.Unmarshal(jsonBytes, &wrappers) }
	err := internal.JsonRead("testdata/column-wrappers.json", unmarshaller)
	if err != nil {
		t.Fatalf("TestUnmarshalColumnWrapperSlice failed, %+v", err)
	}

	if len(wrappers) != 2 {
		t.Fatalf("TestUnmarshalColumnWrapperSlice failed, length mismatch\nexpected = %d,\nresult   = %d", 2, len(wrappers))
	}
}
