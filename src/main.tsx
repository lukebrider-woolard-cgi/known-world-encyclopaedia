import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import { ArticlesPage } from "./pages/ArticlesPage/ArticlesPage.tsx";
import { MapsPage } from "./pages/MapsPage/MapsPage.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="known-world-encyclopaedia" element={<App />}>
          <Route path="articles/category/:categoryId/article/:articleId" element={<ArticlesPage />} />
          <Route path="maps" element={<MapsPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
