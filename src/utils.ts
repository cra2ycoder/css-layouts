import {
  IAlignSelfProps,
  IAlignContentProps,
  ISizeProps,
  ICSSUnit
} from "./layouts/typings";

const getValue = (value: string = "", unit: ICSSUnit = "px") => {
  const input = value?.replace(/\s\s+/g, "")?.trim();
  return input !== "" && input !== "x" ? input : undefined;
};

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

const splitSizeValues = (value: string) => {
  // `wt|minWt|maxWt & ht|minHt|maxHt`;

  const [wt, ht] = value.split("&");
  const [width = "x", minWidth = "x", maxWidth = "x"] = wt.split("|");
  const [height = "x", minHeight = "x", maxHeight = "x"] = ht.split("|");

  return {
    width: getValue(width),
    height: getValue(height),
    "min-width": getValue(minWidth),
    "max-width": getValue(maxWidth),
    "min-height": getValue(minHeight),
    "max-height": getValue(maxHeight)
  };
};

const parseSizes = (value: ISizeProps) => {
  const input = value || {};

  const output: IAlignContentProps = {};

  Object.keys(input)?.forEach((key: string, index: number) => {
    let val = input[key];
    output[key] = splitSizeValues(val);
  });

  return output;
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
