import React from "react";
import Layout from "./pages/Layout";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Router>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Router>
            </BrowserRouter>
        </>
    );
};

export default App;
