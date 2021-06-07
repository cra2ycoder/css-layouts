import {
  IAlignSelfProps,
  IAlignContentProps,
  ISizeProps,
  ISpaceProps,
  ICSSUnit
} from "./layouts/typings";

const getValue = (value: string = "", unit: ICSSUnit = "px") => {
  const input = value?.replace(/\s\s+/g, "")?.trim();
  return input !== "" && input !== "x" ? input : undefined;
};

const getTRBL = (prop: string, values: object, isGroup: boolean) => {
  const mapProps = {
    t: `${prop}-top`,
    r: `${prop}-right`,
    b: `${prop}-bottom`,
    l: `${prop}-left`
  };

  const res = Object.values(values).join(" ");

  if (isGroup === true) {
    return {
      [prop]: res.replace(/x/g, "").trim()
    };
  } else {
    const [t, r, b, l] = res.split(" ");
    return {
      [mapProps.t]: getValue(t),
      [mapProps.r]: getValue(r),
      [mapProps.b]: getValue(b),
      [mapProps.l]: getValue(l)
    };
  }
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

const splitSpaceValues = (input: string, property: string) => {
  // sm: "*-10|4",
  //   lg: "1|2|3|4",
  //   md: "x|9|x|2",
  //   xl: "*-100px|2rem"

  const [isGroup = "", values = ""] = input.includes("*")
    ? input.split("-")
    : ["", input];
  const [t = "x", r = "x", b = "x", l = "x"] = values?.split("|");
  // console.log({ isGroup, values });

  return getTRBL(property, { t, r, b, l }, isGroup === "*");
};

const parseAlignSelf = (value?: IAlignSelfProps) => {
  const input = value || {};

  const output: IAlignSelfProps = {};

  Object.keys(input)?.forEach((key: string) => {
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

  Object.keys(input)?.forEach((key: string) => {
    let val = input[key];
    output[key] = `justify-content: ${mapProps[val]};`;
  });

  return output;
};

const parseSizes = (value: ISizeProps) => {
  const input = value || {};
  const output: IAlignContentProps = {};

  Object.keys(input)?.forEach((key: string) => {
    let val = input[key];
    output[key] = splitSizeValues(val);
  });

  return output;
};

const parseInnerSpace = (value: ISpaceProps) => {
  const input = value || {};
  const output: IAlignContentProps = {};

  Object.keys(input)?.forEach((key: string) => {
    let val = input[key];
    output[key] = splitSpaceValues(val, "padding");
  });

  return output;
};

const parseOuterSpace = (value: string) => {
  const input = value || {};
  const output: IAlignContentProps = {};

  Object.keys(input)?.forEach((key: string) => {
    let val = input[key];
    output[key] = splitSpaceValues(val, "margin");
  });

  return output;
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
