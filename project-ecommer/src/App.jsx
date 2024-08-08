import Home from "./pages/client/Home";
import "./assets/css/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/client/NotFound";
import Layout from "./pages/client/Layout";
import ProductDetail from "./pages/client/ProductDetail";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/product/:id" element={<ProductDetail/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;