import { ModalPosition } from "@/libs/gql/graphql";
import { css } from "@emotion/react";
import { ReactNode } from "react";

const ModalBox = ({ message }: { message: string }) => (
  <div
    css={css`
      //modal box styling
      padding: 8px;
      background-color: rgba(255, 255, 255, 0.9);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      width: fit-content;
      margin: 0 auto;
    `}
  >
    {message}
  </div>
);

interface ModalFrameProps {
  children: ReactNode;
  position: ModalPosition;
  message: string;
}

export const ModalFrame = ({
  children,
  position,
  message,
}: ModalFrameProps) => {
  const f = (p: ModalPosition): string => {
    switch (p) {
      case "TOP":
        return "top: 20px;";
      case "CENTER":
        return "top: 50%;";
      case "BOTTOM":
        return "bottom: 20px;";
    }
  };
  const topBottomPosition = f(position);

  return (
    <div
      css={css`
        position: relative; //to contain the modal box
      `}
    >
      <div
        css={css`
          //modal box positioning
          position: absolute;
          left: 0;
          ${topBottomPosition}
          width: 100%;
          z-index: 1; /* Sit on top */
        `}
      >
        <ModalBox message={message} />
      </div>
      {children}
    </div>
  );
};
