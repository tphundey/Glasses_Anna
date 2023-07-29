import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import BaseLayout from "./components/BaseLayout/BaseLayout";
import Home from "./components/TrangChu";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Sanpham from "./components/Sanpham";
import Thanhtoan from "./components/Thanhtoan"
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import BaseLayoutadmin from "./components/Admin/BaseAdmin/BaseAdmin";
import Listproduct from "./components/Admin/Listproduct/Listproduct";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BaseLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/products">
                        <Route index element={<Sanpham />} />
                        <Route path=":id" element={<ProductDetail />} />
                    </Route>
                    <Route path="/thanhtoan" element={<Thanhtoan />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
                <Route path="/admin" element={<BaseLayoutadmin />}>
                    <Route index element={<Listproduct />} />

                </Route>
            </Routes>
        </Router>

    );
}

export default App;
