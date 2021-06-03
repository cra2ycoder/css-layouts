import { useState } from "react";
import { Wrapper, Container, Panel } from "./layouts";
import { FlexBoxForm } from "./form";
import "./styles.css";

export default function App() {
  const [wrapperStyle, setWrapperStyle] = useState({
    alignContent: "center",
    alignSelf: "left"
  });

  const onSelectChange = (key: string, value: string) => {
    console.log({ key, value });
    wrapperStyle[key] = value;
    setWrapperStyle({ ...wrapperStyle });
  };

  return (
    <div className="App">
      <FlexBoxForm />
      <Wrapper
        alignSelf={wrapperStyle?.alignSelf}
        alignContent={wrapperStyle?.alignContent}
        maxWidth={wrapperStyle?.maxWidth}
      >
        <Panel className="child">Box</Panel>
        <Panel className="child">Box</Panel>
        <Panel className="child">Box</Panel>
        <Panel className="child">Box</Panel>
        <Panel className="child">Box</Panel>
        <Panel className="child">Box</Panel>
        <Panel className="child">Box</Panel>
        <Panel className="child">Box</Panel>
        <Panel className="child">Box</Panel>
      </Wrapper>
    </div>
  );
}
