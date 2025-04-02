import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import App from "./App";
import ArticlesPage from "./pages/ArticlesPage";
import MapsPage from "./pages/MapsPage";
import WelcomePage from "./pages/WelcomePage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename='/known-world-encyclopaedia'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<WelcomePage />} />
          <Route path='articles/category/:categoryId/article/:articleId' element={<ArticlesPage />} />
          <Route path='maps' element={<MapsPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
