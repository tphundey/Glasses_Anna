// import Cart from "./components/Cart";
// import ProductList from "./components/ProductList";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "./components/header";
import TrangChu from "./components/TrangChu";
import Sanpham from "./components/Sanpham";
import "./App.css"
import Footer from "./components/footer";
function App() {
    return (

        <div>
            <Header></Header>
            {/* <TrangChu></TrangChu> */}
            <Sanpham></Sanpham>
            <Footer></Footer>
            {/* <ProductList /> */}

        </div>
    );
}

export default App;
