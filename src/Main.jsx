const React = require("react");
const ReactDOM = require("react-dom");
const App = require("./App");
require("./index.css");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
