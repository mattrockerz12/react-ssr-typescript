import ReactDOM from "react-dom/client";
import { App } from "./components/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./storage";

ReactDOM.hydrateRoot(
  document.getElementById("app")!,
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
