import { CarmineILHedgeWidget } from "carmine-ilhedge-widget";
import "./App.css";

function App() {
  const handleClick = () =>
    window.dispatchEvent(new Event("CARMINE_ILHEDGE_OPEN"));
  return (
    <>
      <h1>Carmine ILHedge DEMO</h1>
      <p>
        This is a simple React page that demonstrates implementation of{" "}
        <a href="https://github.com/CarmineOptions/ilhedge-widget">
          Carmine ILHedge Widget
        </a>
        .
      </p>
      <p>
        You can read more about Impermanent Loss Hedging in the{" "}
        <a href="https://medium.com/@carminefinanceinfo/hedging-impermanent-loss-part-1-52c51846f3da">
          Medium article
        </a>
        .
      </p>
      <button style={{ border: "1px solid #ffb000" }} onClick={handleClick}>
        Open Widget
      </button>
      <CarmineILHedgeWidget parent={"root"} />
    </>
  );
}

export default App;
