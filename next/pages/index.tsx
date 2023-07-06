import { Column } from "@/components/Column";
import { ImageCentered } from "@/components/ImageCentered";
import { MarkdownView } from "@/components/MarkdownView";
import { IndexPageQuery } from "@/libs/gql/graphql";
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
    columns {
      _placeholder
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

export default function Home({ columns }: IndexPageQuery) {
  return (
    <div className={notoSansJP.className}>
      <div
        css={css`
          display: flex;
          gap: 16px;
        `}
      >
        <Column position="middle">
          {/* {markdown && <MarkdownView fragment={markdown} />} */}
          <ImageCentered
            src="/images/sign-in-button.png"
            width={171}
            height={38}
          />
        </Column>
        <Column position="top">
          <div
            css={css`
              flex-shrink: 0;
              width: 800px;
              height: 1000px;
              background-color: #f0f0f0;
            `}
          />
        </Column>
      </div>
    </div>
  );
}
