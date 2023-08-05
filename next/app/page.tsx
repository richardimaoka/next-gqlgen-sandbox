import { FileTreePane } from "@/app/components/sourcecode/filetree/FileTreePane";
import { graphql } from "@/libs/gql";
import { getClient } from "@/libs/gql/apolloClient";
import RouterMounting from "./RouterMounting";
import { FileContentPane } from "./components/sourcecode/openfile/FileContentPane";

const queryDefinition = graphql(/* GraphQL */ `
  query PageQuery($openFilePath: String!) {
    sourceCode {
      ...FileTreePane_Fragment
      openFile(filePath: $openFilePath) {
        ...FileContentPane_Fragment
      }
    }
  }
`);

export default async function Home() {
  const { data } = await getClient().query({
    query: queryDefinition,
    variables: {
      openFilePath: "src/index.tsx",
    },
  });

  return (
    <RouterMounting>
      <main>
        {/* {data.sourceCode && (
          <FileTreePane fragment={data.sourceCode} step="_initial" />
        )} */}
        {data?.sourceCode?.openFile && (
          <FileContentPane fragment={data.sourceCode.openFile} />
        )}
      </main>
    </RouterMounting>
  );
}
