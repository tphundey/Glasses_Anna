import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Listdonhang = () => {
    const [orderData, setOrderData] = useState([]);

    useEffect(() => {
        // Fetch data from the API
        axios.get('http://localhost:3000/hoadon')
            .then((response) => {
                // Handle the data received from the API
                setOrderData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="listproduct">
            <table>
                <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Tên khách hàng</th>

                        <th>Số điện thoại</th>
                        <th>Thành phố</th>

                        <th>Địa chỉ</th>

                        <th>Phương thức thanh toán</th>
                        <th>Tổng giá trị đơn hàng</th>
                        <th>Thông tin sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.name}</td>

                            <td>{order.phone}</td>
                            <td>{order.city}</td>

                            <td>{order.address}</td>

                            <td>{order.paymentMethod}</td>
                            <td>{order.totalPrice}</td>
                            <td>
                                <ul>
                                    {order.cartItems.map((item) => (
                                        <li key={item.id}>
                                            <p>Tên sản phẩm: {item.product.name}</p>
                                            <p>Số lượng: {item.quantity}</p>
                                        </li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listdonhang;
