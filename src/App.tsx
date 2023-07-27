// import Cart from "./components/Cart";
// import ProductList from "./components/ProductList";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "./components/header";
import TrangChu from "./components/TrangChu"
import "./App.css"
import Footer from "./components/footer";
function App() {
    return (

        <div>
            <Header></Header>
            <TrangChu></TrangChu>
            <Footer></Footer>
            {/* <ProductList /> */}

        </div>
    );
}

export default App;
