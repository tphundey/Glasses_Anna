import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import {Routes , Route , BrowserRouter as Router} from "react-router-dom"
import BaseLayout from "./components/BaseLayout/BaseLayout";
import Home from "./components/TrangChu";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Sanpham from "./components/Sanpham";
<<<<<<< HEAD
import Thanhtoan from "./components/Thanhtoan"
=======
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
>>>>>>> d2d751f1712d938f31e151fc31af1ef7dce6832e
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
<<<<<<< HEAD
                    <Route path="/thanhtoan" element={<Thanhtoan/>}/>
=======
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<Signup/>}/>

>>>>>>> d2d751f1712d938f31e151fc31af1ef7dce6832e
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
