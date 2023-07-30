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
import Hoadon from "./components/HoaDon/Hoadon";
import BaseLayoutadmin from "./components/Admin/BaseAdmin/BaseAdmin";
import Listproduct from "./components/Admin/Listproduct/Listproduct";
import Listdanhmuc from "./components/Admin/Listdanhmuc/Listdanhmuc";
import Listuser from "./components/Admin/Listuser/Listuser";
import Listdonhang from "./components/Admin/Listdonhang/Listdonhang";

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
                    <Route path="/hoadon" element={<Hoadon/>}/>
                    <Route path="/thanhtoan" element={<Thanhtoan />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
                <Route path="/admin" element={<BaseLayoutadmin />}>
                    <Route index element={<Listproduct />} />
                </Route>
                <Route path="/admin/danhmuc" element={<BaseLayoutadmin />}>
                    <Route index element={<Listdanhmuc />} />
                </Route>
                <Route path="/admin/user" element={<BaseLayoutadmin />}>
                    <Route index element={<Listuser />} />
                </Route>
                <Route path="/admin/donhang" element={<BaseLayoutadmin />}>
                    <Route index element={<Listdonhang />} />
                </Route>
            </Routes>
        </Router>

    );
}

export default App;
