import { FileTreePane } from "@/app/components/sourcecode/filetree/FileTreePane";
import { getClient } from "@/libs/gql/apolloClient";
import { graphql } from "@/libs/gql";
import RouterMounting from "./RouterMounting";

const queryDefinition = graphql(/* GraphQL */ `
  query PageQuery {
    sourceCode {
      ...FileTreePane_Fragment
    }
  }
`);

export default async function Home() {
  const { data } = await getClient().query({
    query: queryDefinition,
  });

  return (
    <RouterMounting>
      <main>
        {data.sourceCode && (
          <FileTreePane fragment={data.sourceCode} step="_initial" />
        )}
      </main>
    </RouterMounting>
  );
}
