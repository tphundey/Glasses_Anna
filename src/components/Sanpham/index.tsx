import "./style.css"
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getProduct, removeProduct, updateProduct } from '@/actions/product';
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom';
const Sanpham = () => {
    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);

    useEffect(() => {
        dispatch(getProduct());
    }, []);
    return (
        <div>


            <div className="container">
                <div className="title">
                    <div className="tl1">HOT TREND</div>
                    <div className="tl2">SẢN PHẨM</div>
                </div>
                <div className="flex">
                    <div className="filter">
                        <div className="th">
                            Thương hiệu
                        </div>
                        <div className="danhmuc">
                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Chemi</label>
                            </div>

                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Element</label>
                            </div>

                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Thailand</label>
                            </div>
                        </div>
                        <br /><br />
                        <div className="th">
                            Khoảng giá
                        </div>
                        <div className="danhmuc">
                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor=""> 100.000đ</label>
                            </div>

                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">200.000đ</label>
                            </div>

                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">300.000đ</label>
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        {products.map((item: any) => (
                            <div key={item.id} className="product">
                                <Link to={`/products/${item.id}`} >

                                    <div className="image">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="name">{item.name}</div>
                                    <div className="price">{item.price}.000đ</div>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>

            </div>

        </div>

    );
};

export default Sanpham;
