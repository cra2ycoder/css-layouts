import React from "react";
import { Typography } from "@material-ui/core";

interface ITextBaseProps {
  text: string;
  children?: React.ReactNode;
}

type IHeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface IHeadingProps extends ITextBaseProps {
  type?: IHeadingTypes;
}

function Plain(props: ITextBaseProps) {
  return (
    <Typography component="div">
      {props?.text}
      {props?.children}
    </Typography>
  );
}

function Heading(props: IHeadingProps) {
  return (
    <Typography variant={props?.type}>
      {props?.text}
      {props?.children}
    </Typography>
  );
}

function Paragraph() {}

function Link() {}
function Button() {}
function Label() {}

export { Heading, Paragraph, Plain, Link, Button, Label };
