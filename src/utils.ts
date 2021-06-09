import {
  IAlignSelfProps,
  IAlignContentProps,
  ISizeProps,
  ISpaceProps,
  ICSSUnit,
  IScreenList
} from "./layouts/typings";

const RESPONSIVE_BREAK_POINTS = {
  xs: 320,
  sm: 640,
  md: 960,
  lg: 1024,
  xl: 1280,
  xxl: 1536
};

const getValue = (value: string = "", unit: ICSSUnit = "px") => {
  const input = value?.replace(/\s\s+/g, "")?.trim();
  return input !== "" && input !== "x" ? input : undefined;
};

const getTRBL = (prop: string, values: object, isGroup: boolean) => {
  const res = Object.values(values).join(" ");

  if (isGroup === true) {
    return `
      ${prop}: ${res.replace(/x/g, "").trim()};
    `.trim();
  } else {
    const [t, r, b, l] = res.split(" ");
    return `
      ${prop}-top: ${getValue(t)};
      ${prop}-right: ${getValue(r)};
      ${prop}-bottom: ${getValue(b)};
      ${prop}-left: ${getValue(l)};
    `.trim();
  }
};

const splitSizeValues = (value: string) => {
  // `wt|minWt|maxWt & ht|minHt|maxHt`;

  const [wt, ht] = value.split("&");
  const [width = "x", minWidth = "x", maxWidth = "x"] = wt.split("|");
  const [height = "x", minHeight = "x", maxHeight = "x"] = ht.split("|");

  return `
    width: ${getValue(width)};
    height: ${getValue(height)};
    "min-width": ${getValue(minWidth)};
    "max-width": ${getValue(maxWidth)};
    "min-height": ${getValue(minHeight)};
    "max-height": ${getValue(maxHeight)};
  `.trim();
};

const splitSpaceValues = (input: string, property: string) => {
  // sm: "*-10|4",
  // lg: "1|2|3|4",
  // md: "x|9|x|2",
  // xl: "*-100px|2rem"

  const [isGroup = "", values = ""] = input.includes("*")
    ? input.split("-")
    : ["", input];
  const [t = "x", r = "x", b = "x", l = "x"] = values?.split("|");
  // console.log({ isGroup, values });

  return getTRBL(property, { t, r, b, l }, isGroup === "*");
};

const parseAlignSelf = (value?: IAlignSelfProps) => {
  const input: IAlignSelfProps = value || {};

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

const parseOuterSpace = (value: ISpaceProps) => {
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
  let styles: string = ``;

  for (const prop in IScreenList) {
    let cssprops = ``;
    for (const [key, css] of Object.entries(value)) {
      cssprops += css[prop] + "\n";
    }

    styles += `
    \n\n@media(min-width: ${RESPONSIVE_BREAK_POINTS[prop]}px) {
      ${cssprops}
    }`.trim();
  }

  console.log({ styles });

  return {};
};

export {
  RESPONSIVE_BREAK_POINTS,
  parseAlignSelf,
  parseAlignContent,
  parseSizes,
  parseInnerSpace,
  parseOuterSpace,
  parseBackground,
  parsePosition,
  combineStyles
};
