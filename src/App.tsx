import { useState } from "react";
import { Wrapper, Container, Panel } from "./layouts";
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
      <form
        style={{
          display: "flex",
          flexWrap: "nowrap",
          width: "100%",
          margin: "1rem"
        }}
      >
        <div>
          <label htmlFor="maxWidth">Width:</label>
          <input
            name="maxWidth"
            id="maxWidth"
            type="text"
            onBlur={(e) => {
              onSelectChange("maxWidth", e.target.value);
            }}
          />
          <label htmlFor="alignSelf">Align Self:</label>
          <select
            id="alignSelf"
            name="alignSelf"
            onChange={(e) => {
              onSelectChange("alignSelf", e.target.value);
            }}
          >
            <option>left</option>
            <option>right</option>
            <option>center</option>
          </select>
        </div>
        <div>
          <label htmlFor="alignContent">Align Content:</label>
          <select
            name="alignContent"
            id="alignContent"
            onChange={(e) => {
              onSelectChange("alignContent", e.target.value);
            }}
          >
            <option>left</option>
            <option>right</option>
            <option>center</option>
            <option>around</option>
            <option>between</option>
            <option>even</option>
          </select>
        </div>
      </form>
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
