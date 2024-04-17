import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./components/App.tsx";
import "./index.scss";
import { ChildrenList } from "./components/hero/ChildrenList.tsx";
import { Error } from "./components/errors/Error.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <App>
        <Routes>
          <Route path="/" element={<ChildrenList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </App>
    </React.StrictMode>
  </BrowserRouter>
);
