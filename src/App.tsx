import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import Home from "./components/TrangChu";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Sanpham from "./components/Sanpham";
import Thanhtoan from "./components/Thanhtoan";
import Signup from "./components/Signup/Signup";
import Signin from "./components/Signin/Signin";
import Hoadon from "./components/HoaDon/Hoadon";
import BaseLayoutadmin from "./components/Admin/BaseAdmin/BaseAdmin";
import Listproduct from "./components/Admin/Listproduct/Listproduct";
import Listdanhmuc from "./components/Admin/Listdanhmuc/Listdanhmuc";
import Listuser from "./components/Admin/Listuser/Listuser";
import Listdonhang from "./components/Admin/Listdonhang/Listdonhang";
import AddProductFormProps from "./components/Admin/Addsanpham/Addsanpham";
import SuaSanPham from "./components/Admin/Updatesanpham/Updatesanpham";
import AddCategory from "./components/Admin/Adddanhmuc/Adddanhmuc";
import UpdateCategory from "./components/Admin/UpdateCategory/UpdateCategory";
interface Product {
  id: number;
  name: string;
  price: number;
}
interface Category {
  id: number;
  name: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategory] = useState<Category[]>([]);
  const handleAddProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };
  const handleAddCate = (newCate: Product) => {
    setCategory([...categories, newCate]);
  }
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
          <Route path="/hoadon" element={<Hoadon />} />
        </Route>

        {/* router admin */}
        <Route path="/admin" element={<BaseLayoutadmin />}>
          <Route index element={<Listproduct />} />
          <Route path="addsanpham" element={<AddProductFormProps onAddProduct={handleAddProduct} />} />
          <Route path="suasanpham/:id" element={<SuaSanPham/>} />
          {/* <Route path="category" element={<Listdanhmuc />} />
          <Route path="addCate" element={<AddCategory onAddCategory={handleAddCate}/>}/>
          <Route path="updateCate/:id" element={<UpdateCategory/>} /> */}

          <Route path="category">
            <Route index element={<Listdanhmuc />} />
            <Route path="addCate" element={<AddCategory onAddCategory={handleAddCate}/>}/>
            <Route path="updateCate/:id" element={<UpdateCategory/>}/>
          </Route>

          <Route path="user" element={<Listuser />} />
          <Route path="donhang" element={<Listdonhang />} />
        </Route>

        
      </Routes>
    </Router>
  );
}

export default App;
