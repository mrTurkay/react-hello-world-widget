import ReactDOM from "react-dom";
import App from "./App";
import HelloWorldWidget from "./HelloWorldWidget";

declare global {
  interface Window {
    initHelloWorldWidget: (containerId: string) => void;
  }
}

window.initHelloWorldWidget = (containerId: string) => {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error("You had one job... find the container.");
    return;
  }

  ReactDOM.render(<HelloWorldWidget />, container);
};

// This is the entry point for the React app.
ReactDOM.render(<App />, document.getElementById("root"));
