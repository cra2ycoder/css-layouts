import React from "react";
import { Box } from "@material-ui/core";
import "./styles.css";

type TFlexBoxTypes = "wrapper" | "container" | "box";

interface IFlexBoxProps {
  type?: TFlexBoxTypes;
  className?: string;
  children?: React.ReactNode;
}

function FlexBox(props: IFlexBoxProps) {
  const { type = "box", className = "", children } = props;

  const getValidClassName = (dcn: string) => {
    return `${dcn} ${className}`.trim();
  };

  return (
    <>
      {type === "box" && (
        <Box className={getValidClassName("box")}>{children}</Box>
      )}
      {type === "container" && (
        <Box className={getValidClassName("container")}>{children}</Box>
      )}
      {type === "wrapper" && (
        <Box className={getValidClassName("wrapper")}>{children}</Box>
      )}
    </>
  );
}

export { FlexBox };
