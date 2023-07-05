import { Column } from "@/components/Column";
import { css } from "@emotion/react";
import { GetServerSideProps } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { client } from "../libs/apolloClient";
import { graphql } from "../libs/gql";

const notoSansJP = Noto_Sans_JP({
  // Japanese font needs this settings, as index.d.ts doesn't allow subsets = japanese, which is probably due to the large size of japanese font
  preload: false, // removing this will cause error for missing subsets
  display: "swap", // removing this will unapplied japanese font, BUT THIS CAUSES LAYOUT SHIFT...!!!
});

const queryDefinition = graphql(/* GraphQL */ `
  query IndexPage {
    markdown {
      ...MarkdownFragment
    }
  }
`);

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: queryDefinition,
  });

  return {
    props: data,
  };
};

export default function Home() {
  return (
    <div className={notoSansJP.className}>
      <div
        css={css`
          display: flex;
          gap: 16px;
        `}
      >
        <Column>
          <div
            css={css`
              flex-shrink: 0;
              width: 800px;
              height: 1000px;
              background-color: #f0f0f0;
            `}
          />
        </Column>
        <Column>
          <div
            css={css`
              flex-shrink: 0;
              width: 1000px;
              height: 1800px;
              background-color: #f0f0f0;
            `}
          />
        </Column>
        <Column>
          <div
            css={css`
              flex-shrink: 0;
              width: 800px;
              height: 1000px;
              background-color: #f0f0f0;
            `}
          />
        </Column>
        <Column>
          <div
            css={css`
              flex-shrink: 0;
              width: 900px;
              height: 1200px;
              background-color: #f0f0f0;
            `}
          />
        </Column>
      </div>
    </div>
  );
}
