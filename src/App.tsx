import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import {Routes , Route , BrowserRouter as Router} from "react-router-dom"
import BaseLayout from "./components/BaseLayout/BaseLayout";
import Home from "./components/TrangChu";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BaseLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/products">
                        <Route index element={<Home/>} />
                        <Route path=":id" element={<Home/>} />
                    </Route>
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
