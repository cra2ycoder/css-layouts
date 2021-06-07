import { ReactNode } from "react";

export interface ILayoutProps {
  className?: string;
  children?: ReactNode;
}

export type TAlignContentTypes =
  | "left"
  | "center"
  | "right"
  | "even"
  | "around"
  | "between";

export type TAlignTypes = "left" | "center" | "right";

export interface IAlignSelfProps {
  xs?: TAlignTypes;
  sm?: TAlignTypes;
  md?: TAlignTypes;
  lg?: TAlignTypes;
  xl?: TAlignTypes;
  xxl?: TAlignTypes;
}

export interface IAlignContentProps {
  xs?: TAlignContentTypes;
  sm?: TAlignContentTypes;
  md?: TAlignContentTypes;
  lg?: TAlignContentTypes;
  xl?: TAlignContentTypes;
  xxl?: TAlignContentTypes;
}

export interface IScreenProps {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}

export type ICSSUnit = "px" | "rem" | "em" | "%";

/**
 * @description
 * `minWt|maxWt & minHt|maxHt`
 * `100%|200% & 100%|300px`
 */
export interface ISizeProps extends IScreenProps {}

/**
 * @description
 * `*-t|r|b|l`
 * `x|1|2|3`
 * `*-x|x|2|1`
 *  * indicates use group property `margin: 0 0`
 * if no * => margin-left: 10px; margin-right:10px;
 */
export interface ISpaceProps extends IScreenProps {}

/**
 * @description
 * `type-value`
 * `color-#000` || `color-rgba(0,0,0,0)`
 * `img-url("https://xyz.com/img.png")`
 * `pos-t|r|b|l`
 * `size-contain`
 */
export interface IBackgroundProps extends IScreenProps {}

/**
 * @description
 * `type-t|r|b|l`
 * `rel-1|x|x|4`
 * `abs-100px|200px|300px|x`
 */
export interface IPositionProps extends IScreenProps {}

export interface IWrapperProps extends ILayoutProps {
  alignSelf?: IAlignSelfProps;
  alignContent?: IAlignContentProps;
  sizes?: ISizeProps;
  innerSpace?: ISpaceProps;
  outerSpace?: ISpaceProps;
  background?: IBackgroundProps;
  position?: IPositionProps;
}

export interface IContainerProps extends ILayoutProps {}
export interface IPanelProps extends ILayoutProps {}
