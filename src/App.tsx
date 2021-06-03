import { FlexBox } from "./layouts";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlexBox type="wrapper">
        <FlexBox type="container">
          <FlexBox className="child">Box</FlexBox>
          <FlexBox className="child">Box</FlexBox>
          <FlexBox className="child">Box</FlexBox>
          <FlexBox className="child">Box</FlexBox>
          <FlexBox className="child">Box</FlexBox>
          <FlexBox className="child">Box</FlexBox>
          <FlexBox className="child">Box</FlexBox>
          <FlexBox className="child">Box</FlexBox>
          <FlexBox className="child">Box</FlexBox>
        </FlexBox>
      </FlexBox>
    </div>
  );
}
