import ReactDOM from "react-dom/client";
import "./Style.css"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./auth0/Auth0Provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
  <Auth0ProviderWithNavigate>
    <App />
  </Auth0ProviderWithNavigate>
</BrowserRouter>
);
