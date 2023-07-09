package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/graph"
	"github.com/richardimaoka/next-gqlgen-sandbox/gqlgen/processing/convert"
)

const defaultPort = "8080"

func server() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))

	http.Handle("/", playground.Handler("GraphQL playground", "/query"))
	http.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func processing() {
	err := convert.Process("data/sign-in-with-google")
	if err != nil {
		panic(err)
	}
}

func main() {
	// processing()
	server()

}
