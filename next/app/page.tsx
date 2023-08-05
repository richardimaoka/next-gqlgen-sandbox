import { FileTreePane } from "@/app/components/sourcecode/filetree/FileTreePane";
import { graphql } from "@/libs/gql";
import { getClient } from "@/libs/gql/apolloClient";
import RouterMounting from "./RouterMounting";
import { FileContentPane } from "./components/sourcecode/openfile/FileContentPane";
import { ColumnTab } from "./components/column/ColumnTab";

const queryDefinition = graphql(/* GraphQL */ `
  query PageQuery($tutorial: String!, $step: String) {
    page(tutorial: $tutorial, step: $step) {
      columns {
        ...ColumnTab_Fragment
      }
    }
  }
`);

export default async function Home() {
  const { data } = await getClient().query({
    query: queryDefinition,
    variables: {
      tutorial: "sign-in-with-google",
      openFilePath: "src/index.tsx",
      step: "bf3aadbd-c876-4fd3-817b-3b0fc24b04f9",
    },
  });

  return (
    <RouterMounting>
      <main>
        {data?.page?.columns && data.page.columns[0] && (
          <ColumnTab isSelected={false} fragment={data.page?.columns[0]} />
        )}
      </main>
    </RouterMounting>
  );
}
