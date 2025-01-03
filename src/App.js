import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import routes from "./router/index";

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<Navigate to="/login" />} /> {/* 404 重定向 */}
      </Routes>
    </Router>
  );
}

export default App;
