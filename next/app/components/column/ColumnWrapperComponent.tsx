import { FragmentType, graphql, useFragment } from "@/libs/gql";
import { ColumnHeader } from "./ColumnHeader";

import styles from "./style.module.css";

const fragmentDefinition = graphql(`
  fragment ColumnWrapperComponent_Fragment on ColumnWrapper {
    name
    column {
      __typename
    }
  }
`);

interface ColumnWrapperComponentProps {
  fragment: FragmentType<typeof fragmentDefinition>;
}

export const ColumnWrapperComponent = (props: ColumnWrapperComponentProps) => {
  const fragment = useFragment(fragmentDefinition, props.fragment);

  const Column = (): JSX.Element => {
    if (!fragment?.column?.__typename) {
      return <div></div>;
    }

    switch (fragment.column.__typename) {
      case "SourceCodeColumn":
        return <div>sc</div>;
      case "TerminalColumn":
        return <div>tm</div>;
      default:
        return <div>default</div>;
    }
  };

  return <Column />;
};
