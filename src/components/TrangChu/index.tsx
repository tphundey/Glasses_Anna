import "./style.css"
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getProduct, removeProduct, updateProduct } from '@/actions/product';
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom';
const Home = () => {

    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);

    useEffect(() => {
        dispatch(getProduct());
    }, []);


    return (
        <div>
            <div className="banner">
                <img src="https://kinhmatanna.com/wp-content/uploads/2023/02/Untitled-3-02-1-2048x665.png" alt="" />
            </div>

            <div className="container">
                <div className="title">
                    <div className="tl1">HOT TREND</div>
                    <div className="tl2">HÀNG MỚI LÊN KỆ</div>
                </div>
                <div className="list-tc">
                    {products.map((item: any) => (
                        <div className="product">
                            <div className="image">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="name">{item.name}</div>
                            <div className="price">{item.price}.000đ</div>
                        </div>
                    ))}


                </div>
                <div className="title">
                    <div className="tl1">ĐỊA ĐIỂM</div>
                    <div className="tl2">HỆ THỐNG CỬA HÀNG</div>
                </div>
                <div className="diadiem">
                    <div className="left">
                        <img src="https://kinhmatanna.com/wp-content/uploads/2022/10/Untitled-1.png" alt="" />
                    </div>
                    <div className="right">
                        <img src="https://kinhmatanna.com/wp-content/uploads/2022/10/756daa592822ed7cb433-768x1365.jpg" alt="" />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Home;
