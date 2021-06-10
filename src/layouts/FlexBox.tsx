import { Box } from "@material-ui/core";
import styled from "styled-components";
import clsx from "clsx";
import {
  parseAlignSelf,
  parseAlignContent,
  parseSizes,
  parseInnerSpace,
  parseOuterSpace,
  combineStyles
  // parseBackground,
  // parsePosition
} from "../utils";
import { IWrapperProps, IContainerProps, IPanelProps } from "./typings";
import "./styles.css";

const StyledBox = styled.div((props) => {
  // console.log(props.styles);
  return props.styles;
});

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

  const sizes = parseSizes({
    sm: "x|100|200 & x|100%|3rem"
  });

  const innerSpaces = parseInnerSpace({
    sm: "*-10|4",
    lg: "1|2|3|4",
    md: "x|9|x|2",
    xl: "*-100px|2rem"
  });

  const outerSpaces = parseOuterSpace({
    sm: "*-10|4",
    lg: "1|2|3|4",
    md: "x|9|x|2",
    xl: "*-100px|2rem"
  });

  // console.log({ alignSelf, alignContent, sizes, innerSpaces, outerSpaces });

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

  const stylesString = combineStyles({
    alignSelf,
    alignContent,
    sizes,
    innerSpaces,
    outerSpaces
  });

  return <StyledBox styles={stylesString}>{props?.children}</StyledBox>;

  // return <Box>{props?.children}</Box>;
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
