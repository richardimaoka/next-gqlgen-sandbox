import { css } from "@emotion/react";
import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => (
  // four main purposes of the container:
  // 1. set the width
  // 2. center the container
  // 3. top and bottom spacing
  // 4. background color or image <- this is the only thing to set in the outer container element
  <main>
    <div
      css={css`
        margin: 0 auto;
        max-width: 834px;
      `}
    >
      {children}
    </div>
  </main>
);
