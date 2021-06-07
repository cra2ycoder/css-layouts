import { Box } from "@material-ui/core";
import clsx from "clsx";
import {
  parseAlignSelf,
  parseAlignContent,
  parseSizes,
  parseInnerSpace,
  parseOuterSpace,
  parseBackground,
  parsePosition
} from "../utils";
import { IWrapperProps, IContainerProps, IPanelProps } from "./typings";
import "./styles.css";

function Wrapper(props: IWrapperProps) {
  const alignSelf = parseAlignSelf({
    sm: "left",
    lg: "right",
    xl: "center",
    xxl: "center"
  });

  const alignContent = parseAlignContent({
    sm: "left",
    lg: "right",
    xl: "center",
    xxl: "center"
  });

  console.log({ alignSelf, alignContent });

  // const {
  //   className = "",
  //   alignContent = "left",
  //   alignSelf = "left",
  //   maxWidth = 1024,
  //   children
  // } = props;

  // const mapAlign: any = {
  //   left: "flex-start",
  //   right: "flex-end",
  //   even: "space-evenly",
  //   between: "space-between",
  //   around: "space-around"
  // };

  // const enhancedProps = {
  //   maxWidth,
  //   className: clsx("wrapper", className, {
  //     "align-left": alignSelf === "left",
  //     "align-right": alignSelf === "right",
  //     "align-center": alignSelf === "center"
  //   }),
  //   justifyContent: mapAlign[alignContent] || alignContent
  // };

  return <Box>{props?.children}</Box>;
  // return <Box {...enhancedProps}>{children}</Box>;
}

function Container(props: IContainerProps) {
  return (
    <Box className={clsx("container", props.className)}>{props?.children}</Box>
  );
}

function Panel(props: IPanelProps) {
  return (
    <Box className={clsx("panel", props.className)}>{props?.children}</Box>
  );
}

export { Wrapper, Container, Panel };
