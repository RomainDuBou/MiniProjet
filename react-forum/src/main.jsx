import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Questions from "./pages/subpages/Questions.jsx";
import Responses from "./pages/subpages/Responses.jsx";
import Informations from "./pages/subpages/Informations.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index="/home" element={<Home />} />
                    <Route path="/question" element={<Questions />} />
                    <Route path="/response" element={<Responses />} />
                    <Route path="/informations" element={<Informations />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
);
