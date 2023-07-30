import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import {Routes , Route , BrowserRouter as Router} from "react-router-dom"
import BaseLayout from "./components/BaseLayout/BaseLayout";
import Home from "./components/TrangChu";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Sanpham from "./components/Sanpham";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Hoadon from "./components/HoaDon/Hoadon";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/products">
                        <Route index element={<Sanpham/>} />
                        <Route path=":id" element={<ProductDetail/>} />
                    </Route>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/hoadon" element={<Hoadon/>}/>

                </Route>
        </Routes>
        </Router>
        // <div>
        //     {/* <Header></Header>
        //     <TrangChu></TrangChu>
        //     <Footer></Footer> */}
        //     {/* <ProductList /> */}
            
        // </div>
    );
}

export default App;
