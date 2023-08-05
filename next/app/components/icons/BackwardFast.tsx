import Image from "next/image";
import FileImg from "../../../public/images/backward-fast-solid.svg";

export const BackwardFastIcon = (): JSX.Element => {
  return (
    <Image src={FileImg} height="16" width="16" alt="backward fast icon" />
  );
};
