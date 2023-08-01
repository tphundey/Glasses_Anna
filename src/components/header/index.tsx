import "./style.css"
import { useState, useEffect } from 'react';
import axios from "axios";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
const clientId = "617522400337-v8petg67tn301qkocslk6or3j9c4jjmn.apps.googleusercontent.com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const navigate = useNavigate();
    const [cartItemsFromAPI, setCartItemsFromAPI] = useState([]);
    const userProfile = JSON.parse(localStorage.getItem("profile") || "{}");
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        // Lấy dữ liệu giỏ hàng từ API
        axios.get("http://localhost:3000/cart")
            .then((response) => {
                const cartItems = response.data;
                const userCart = cartItems.filter((cartItem) => cartItem.userProfile.email === userProfile.email);
                setCartItemsFromAPI(userCart);
                // Tính tổng số tiền
                const total = userCart.reduce((acc, item) => {
                    return acc + item.quantity * item.product.price;
                }, 0);

                setTotalPrice(total);
                const totalItems = userCart.reduce((acc, item) => {
                    return acc + item.quantity;
                }, 0);
                setTotalItems(totalItems);
            })

            .catch((error) => {
                console.error("Lỗi khi lấy dữ liệu giỏ hàng từ API:", error);
            });
    }, [userProfile.email]);

    useEffect(() => {
        // Check the user's login status from local storage
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsSignedIn(isLoggedIn);

    }, []);

    const toggleDiv = (event: any) => {
        event.preventDefault();
        setShowDiv(!showDiv);
    };

    const onSuccess = () => {
        console.log("Log out successfull !");
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('profile');
        toast.success('Đã đăng xuất tài khoản!', {
            className: 'thongbaothanhcong',
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000, // Thời gian tự động biến mất sau 3 giây
        });
        setTimeout(() => {
            navigate('/')
            location.reload()
        }, 2000);
    }

    return (
        <div>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="logo">
                            <img src="../../../public/img/logo.png" alt="" />
                        </div>
                        <div className="tab">
                            <ul>
                                <li><a href="/">Trang Chủ</a></li>
                                <li className="select"><a href="/products">Sản Phẩm *</a></li>
                                <li><a href="">Về ANNA</a></li>
                                <li><a href="">STORE</a></li>
                            </ul>
                        </div>
                        <div className="option">
                            <ul>
                                <li><a href=""><img className="a" src="https://cdn.icon-icons.com/icons2/1129/PNG/512/searchmagnifierinterfacesymbol_79894.png" alt="" /></a></li>
                                {/* ...Other header options here... */}
                                {isSignedIn ? (
                                    <li>
                                        <GoogleLogout
                                            clientId={clientId}
                                            buttonText="Logout"
                                            onLogoutSuccess={onSuccess}
                                        />
                                    </li>
                                ) : (
                                    <li><a href="/signin"><img className="b" src="https://cdn.icon-icons.com/icons2/2987/PNG/512/home_set_of_house_clipart_icon_187233.png" alt="" /></a></li>
                                )}
                                <li><a onClick={toggleDiv} href=""><img onClick={toggleDiv} className="c" src="https://cdn.icon-icons.com/icons2/1302/PNG/512/onlineshoppingcart_85781.png" alt="" /></a></li>
                                <span className="count"> {totalItems}</span>
                            </ul>
                        </div>

                        <div className={`hidden-div ${showDiv ? 'show-div' : ''}`}>

                            <div className="listcart">
                                {/* Hiển thị thông tin sản phẩm và số lượng từ API */}
                                {cartItemsFromAPI.map((cartItem) => (

                                    <div className="cart" key={cartItem.id}>
                                        <div className="imgcart">
                                            <img src={cartItem.product.img} alt="" />
                                        </div>
                                        <div className="thongtin">
                                            <div className="tencart">{cartItem.product.name}</div>
                                            <div className="carttt">
                                                <div className="soluong">{cartItem.quantity} x</div>
                                                <div className="giatien">{cartItem.product.price}.000đ</div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                                <br />
                                <div className="tongtien">
                                    <b>Tạm tính:</b> {totalPrice}.000đ
                                </div>
                                <button className="thanhtoan"><a href="/thanhtoan">Thanh toán</a></button>
                            </div>



                            <button className="thoat" onClick={toggleDiv}>X</button>
                        </div>
                    </div>
                </div>
            </header>
            <nav>
                <div className="value">
                    SEE BETTER THAN YESTERDAY - ANNA LOVE YOU!
                </div>
            </nav>
            {/* Component ToastContainer để hiển thị thông báo */}
            <ToastContainer />
        </div>
    );
};

export default Header;
