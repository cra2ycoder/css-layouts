import { useState } from "react";
import { Wrapper, Container, Panel } from "./layouts";
import { FlexBoxForm } from "./form";
import "./styles.css";

export default function App() {
  const [wrapperStyle, setWrapperStyle] = useState<object>({
    alignContent: "center",
    alignSelf: "left",
    maxWidth: "1024px"
  });

  return (
    <div className="App">
      <FlexBoxForm
        getFieldValues={(values: object) => {
          console.log({ values });
          setWrapperStyle({ ...values });
        }}
      />
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
