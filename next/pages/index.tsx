import { Browser } from "@/components/Browser";
import { Column } from "@/components/Column";
import { MainContainer } from "@/components/MainContainer";
import { css } from "@emotion/react";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  // Japanese font needs this settings, as index.d.ts doesn't allow subsets = japanese, which is probably due to the large size of japanese font
  preload: false, // removing this will cause error for missing subsets
  display: "swap", // removing this will unapplied japanese font, BUT THIS CAUSES LAYOUT SHIFT...!!!
});

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
