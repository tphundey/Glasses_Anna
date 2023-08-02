import "./Hoadon.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Hoadon = () => {

    const [orderData, setOrderData] = useState(null);
    const userProfile = JSON.parse(localStorage.getItem("profile") || "{}");
    const userEmail = userProfile.email; // Lấy email từ Local Storage
    useEffect(() => {
        // Gọi API để lấy dữ liệu đơn hàng dựa trên email từ Local Storage
        axios.get(`http://localhost:3000/hoadon?email=${userEmail}`)
            .then((response) => {
                // Lưu trữ dữ liệu đơn hàng vào state
                setOrderData(response.data[0]);
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Lỗi khi lấy dữ liệu đơn hàng:', error);
            });
    }, []);

    if (!orderData) {
        // Hiển thị loading hoặc thông báo khi chưa có dữ liệu
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="wrapper_hoadon">
                <div className="hoadon_top" style={{ textAlign: "center" }}>
                    <img src="../../../public/img/thankyou.png" alt="" /> <br />
                    <br />
                    <br />
                    <h3>Cảm ơn ! Đơn hàng của bạn đã được đặt thành công</h3>
                </div>
                <hr />
                <div className="hoadon_info">
                    <table>
                        <tr>
                            <th>PRODUCT</th>
                            <th>TOTAL</th>
                        </tr>

                        {orderData.cartItems.map((cartItem) => (
                            <tr key={cartItem.id}>
                                <td>{cartItem.product.name}</td>
                                <td>{cartItem.quantity}</td>
                            </tr>

                        ))}
                        <tr>
                            <td>Voucher:</td>
                            <td>{orderData.voucher}</td>
                        </tr>
                        <tr>
                            <td>Phương thức thanh toán:</td>
                            <td>{orderData.paymentMethod}</td>
                        </tr>
                        <tr>
                            <td>Tổng cộng:</td>
                            <td>{orderData.totalPrice},000₫</td>
                        </tr>

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Hoadon