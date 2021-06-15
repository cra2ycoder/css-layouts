// import { useState } from "react";
// import { Wrapper, Container, Panel } from "./layouts";
// import { FlexBoxForm } from "./form";
import "./styles.css";

import { Heading } from "./layouts";

export default function App() {
  // const [wrapperStyle, setWrapperStyle] = useState<object>({
  //   alignContent: "center",
  //   alignSelf: "left",
  //   maxWidth: "1024px"
  // });

  return (
    <div className="App">
      <Heading text="Heading" type="h1" />

      {/* <FlexBoxForm
        getFieldValues={(values: object) => {
          console.log({ values });
          setWrapperStyle({ ...values });
        }}
      /> */}
      {/* <Wrapper
        alignSelf={{}}
        // alignSelf={wrapperStyle?.alignSelf}
        // alignContent={wrapperStyle?.alignContent}
        // maxWidth={wrapperStyle?.maxWidth}
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
      </Wrapper> */}
    </div>
  );
}
