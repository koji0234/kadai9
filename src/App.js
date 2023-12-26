import { CssModules } from "./compornents/CssModules";
import { InlineStyle } from "./compornents/InlineStyle";
import { StyledJsx } from "./compornents/StyledJsx";
import { Emotion } from "./compornents/Emotion";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <Emotion />
    </div>
  );
}
