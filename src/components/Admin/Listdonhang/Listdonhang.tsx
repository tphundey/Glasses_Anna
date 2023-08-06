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
                        <th>Tên</th>
                        <th>Số điện thoại</th>
                        <th>Thành phố</th>
                        <th>Địa chỉ</th>
                        <th>Phương thức</th>
                        <th>Tổng giá trị</th>
                        <th>Thông tin</th>
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
                            <td>{order.totalPrice}.000đ</td>
                            <td>
                                <ul>
                                    {order.cartItems.map((item) => (
                                        <div key={item.id}>
                                            <p>{item.quantity} cái {item.product.name} </p>
                                            
                                        </div>
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
