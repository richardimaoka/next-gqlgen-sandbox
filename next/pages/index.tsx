import { Column } from "@/components/Column";
import { IndexPageQuery } from "@/libs/gql/graphql";
import { css } from "@emotion/react";
import { GetServerSideProps } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { client } from "../libs/apolloClient";
import { graphql } from "../libs/gql";
import { NextButton } from "@/components/NextButton";
import { PrevButton } from "@/components/PrevButton";
import { ParsedUrlQuery } from "querystring";

const notoSansJP = Noto_Sans_JP({
  // Japanese font needs this settings, as index.d.ts doesn't allow subsets = japanese, which is probably due to the large size of japanese font
  preload: false, // removing this will cause error for missing subsets
  display: "swap", // removing this will unapplied japanese font, BUT THIS CAUSES LAYOUT SHIFT...!!!
});

const extractString = (
  queryString: string | string[] | undefined
): string | undefined => {
  // if object, it must be string[]
  if (typeof queryString == "object") {
    if (queryString.length > 0) {
      return queryString[0];
    } else {
      return undefined;
    }
  } else if (typeof queryString == "string") {
    return queryString;
  } else {
    return undefined;
  }
};

const queryDefinition = graphql(/* GraphQL */ `
  query IndexPage($tutorial: String!, $step: String) {
    page(tutorial: $tutorial, step: $step) {
      step
      nextStep
      prevStep
      columns {
        column {
          __typename
        }
      }
    }
  }
`);

interface PageParams extends ParsedUrlQuery {
  step: string;
}

export const getServerSideProps: GetServerSideProps<
  IndexPageQuery,
  PageParams
> = async (context) => {
  const step = extractString(context.query.step);

  const { data } = await client.query({
    query: queryDefinition,
    variables: { tutorial: "sign-in-with-google", step },
  });

  return {
    props: data,
  };
};

export default function Home({ page }: IndexPageQuery) {
  return (
    <div className={notoSansJP.className}>
      <div
        css={css`
          display: flex;
          gap: 16px;
        `}
      >
        {page?.columns?.map((column, index) => (
          <Column key={index} position="middle">
            {index}
          </Column>
        ))}
      </div>
      {page?.prevStep && <PrevButton href={`/?step=${page.prevStep}`} />}
      {page?.nextStep && <NextButton href={`/?step=${page.nextStep}`} />}
    </div>
  );
}
