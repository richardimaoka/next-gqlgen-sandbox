import { TerminalComponent } from "./TerminalComponent";

import { FragmentType, graphql, useFragment } from "@/libs/gql";

const fragmentDefinition = graphql(`
  fragment TerminalColumn_Fragment on Terminal {
    ...TerminalComponent_Fragment
  }
`);

interface TerminalColumnProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const TerminalColumn = (props: TerminalColumnProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  return (
    <div>
      <TerminalComponent fragment={fragment} />
    </div>
  );
};
