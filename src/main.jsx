/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

const providerConfig = {
  domain: import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Auth0Provider {...providerConfig}>
          <App />
        </Auth0Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
