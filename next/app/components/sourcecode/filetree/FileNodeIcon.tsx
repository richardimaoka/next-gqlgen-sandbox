import { DirectoryIcon } from "@/app/components/icons/DirectoryIcon";
import { FileIcon } from "@/app/components/icons/FileIcon";

export interface FileNodeIconProps {
  nodeType: "FILE" | "DIRECTORY";
}

export const FileNodeIcon = ({ nodeType }: FileNodeIconProps): JSX.Element => {
  switch (nodeType) {
    case "FILE":
      return <FileIcon />;
    case "DIRECTORY":
      return <DirectoryIcon />;
    default:
      const _exhaustiveCheck: never = nodeType;
      return _exhaustiveCheck;
  }
};
