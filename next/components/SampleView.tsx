import { FragmentType, graphql, useFragment } from "../libs/gql";

const SampleView = graphql(`
  fragment SampleView on Todo {
    id
  }
`);
