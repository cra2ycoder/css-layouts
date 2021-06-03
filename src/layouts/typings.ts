import { ReactNode } from "react";

export interface ILayoutProps {
  className?: string;
  children?: ReactNode;
}

type TAlignContentTypes =
  | "left"
  | "center"
  | "right"
  | "even"
  | "around"
  | "between";

type TAlignTypes = "left" | "center" | "right";

export interface IWrapperProps extends ILayoutProps {
  alignSelf?: TAlignTypes;
  alignContent?: TAlignContentTypes;
  maxWidth?: string | number;
}

export interface IContainerProps extends ILayoutProps {}
export interface IPanelProps extends ILayoutProps {}
