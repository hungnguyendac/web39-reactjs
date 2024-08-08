import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import NotFound from "./pages/NotFound";
import Layout from "./pages/Layout";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Help from "./pages/Help";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
