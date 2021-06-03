import { Box } from "@material-ui/core";
import { IWrapperProps, IContainerProps, IPanelProps } from "./typings";
import "./styles.css";

const getValidClassName = (dcn: string, className: string = "") => {
  return `${dcn} ${className}`.trim();
};

const getMarginAlignProps = (alignType: string) => {
  if (alignType === "center") {
    return { margin: "auto" };
  } else if (alignType === "left") {
    return { marginRight: "auto" };
  } else if (alignType === "right") {
    return { marginLeft: "auto" };
  }
};

function Wrapper(props: IWrapperProps) {
  const {
    className = "",
    alignContent = "left",
    alignSelf = "left",
    maxWidth = 1024,
    children
  } = props;

  const mapAlign = {
    left: "flex-start",
    right: "flex-end",
    even: "space-evenly",
    between: "space-between",
    around: "space-around"
  };

  const styleGuide = {
    ...getMarginAlignProps(alignSelf)
  };

  return (
    <Box
      style={styleGuide}
      className={getValidClassName("wrapper", className)}
      justifyContent={mapAlign[alignContent] || alignContent}
      width={maxWidth}
    >
      {children}
    </Box>
  );
}

function Container(props: IContainerProps) {
  return (
    <Box className={getValidClassName("container", props?.className)}>
      {props?.children}
    </Box>
  );
}

function Panel(props: IPanelProps) {
  return (
    <Box className={getValidClassName("panel", props?.className)}>
      {props?.children}
    </Box>
  );
}

export { Wrapper, Container, Panel };
