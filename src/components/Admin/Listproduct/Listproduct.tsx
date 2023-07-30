import './Listproduct.css';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getProduct, removeProduct, updateProduct } from '@/actions/product';
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom';

const Listproduct = () => {
    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);

    useEffect(() => {
        dispatch(getProduct());
    }, []);


    return (
        <div className="listproduct">

            <a className='themspmoi' href="admin/addsanpham">Thêm sản phẩm mới !</a>
            <table>
                <thead>
                    <tr>
                        <th>Msp</th>
                        <th>Hình ảnh</th>
                        <th>Tên kính</th>
                        <th>Giá kính</th>
                        <th>Chất liệu</th>
                        <th>Màu sắc</th>
                        <th>Số lượng</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item: any) => (
                        <tr key={item.id}>
                            <td>SP{item.id}</td>
                            <td><img src={item.img} alt="" /></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.materialId}</td>
                            <td>{item.color}</td>
                            <td>{item.quantity}</td>
                            <td className='chucnang'>
                                <div className="">
                                    <Link to={`/admin/suasanpham/${item.id}`} className='sua'>Sửa</Link>
                                </div>
                                <div>
                                    <button onClick={() => dispatch(removeProduct(item.id))} className='xoa'>Xóa</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listproduct;
