import { IAlignSelfProps, IAlignContentProps } from "./layouts/typings";

const parseAlignSelf = (value?: IAlignSelfProps) => {
  const input = value || {};

  const output: IAlignSelfProps = {};

  Object.keys(input)?.forEach((key: string, index: number) => {
    let val = input[key];
    if (val === "left") {
      output[key] = "margin-right: auto;";
    } else if (val === "right") {
      output[key] = "margin-left: auto;";
    } else if (val === "center") {
      output[key] = "margin: auto;";
    }
  });

  return output;
};

const parseAlignContent = (value: IAlignContentProps) => {
  const input = value || {};
  const mapProps = {
    left: "flex-start",
    right: "flex-end",
    even: "space-evenly",
    between: "space-between",
    around: "space-around"
  };

  const output: IAlignContentProps = {};

  Object.keys(input)?.forEach((key: string, index: number) => {
    let val = input[key];
    output[key] = `justify-content: ${mapProps[val]};`;
  });

  return output;
};

const parseSizes = (value: string) => {
  return;
};

const parseInnerSpace = (value: string) => {
  return;
};

const parseOuterSpace = (value: string) => {
  return;
};

const parseBackground = (value: string) => {
  return;
};

const parsePosition = (value: string) => {
  return;
};

const combineStyles = (value: any) => {
  return {};
};

export {
  parseAlignSelf,
  parseAlignContent,
  parseSizes,
  parseInnerSpace,
  parseOuterSpace,
  parseBackground,
  parsePosition,
  combineStyles
};
