import { ApolloProvider } from "@apollo/client";
import "antd/dist/antd.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { client } from "./graphql/client";
import HomePage from "./pages/HomePage";
import PageTemplate from "./templates/PageTemplate";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <PageTemplate>
        <HomePage />
      </PageTemplate>
    </ApolloProvider>
  </React.StrictMode>
);
