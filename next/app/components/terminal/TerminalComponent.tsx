import { CurrentDirectory } from "./CurrentDirectory";
import { TerminalContentsComponent } from "./TerminalContentsComponent";

import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TerminalComponent_Fragment on Terminal {
    ...TerminalCurrentDirectory_Fragment
    ...TerminalContentsComponent_Fragment
  }
`);

interface TerminalComponentProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TerminalComponent = (props: TerminalComponentProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div>
      <CurrentDirectory fragment={fragment} />
      <TerminalContentsComponent fragment={fragment} />
    </div>
  );
};
