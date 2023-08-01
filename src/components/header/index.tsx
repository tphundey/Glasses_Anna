import "./style.css"
import { useState, useEffect } from 'react';
import { GoogleLogout } from "react-google-login";
import { useNavigate } from 'react-router-dom';
const clientId = "617522400337-v8petg67tn301qkocslk6or3j9c4jjmn.apps.googleusercontent.com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const navigate = useNavigate();

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
                                {/* <div className="hidden">
                                    <ul>
                                        <li className="select"><a href="">Sản Phẩm</a></li>
                                        <li className="select"><a href="">Sản Phẩm</a></li>
                                        <li className="select"><a href="">Sản Phẩm</a></li>
                                    </ul>
                                </div> */}
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
                                <span className="count">0</span>
                            </ul>
                        </div>

                        <div className={`hidden-div ${showDiv ? 'show-div' : ''}`}>
                            <div className="listcart">
                                <div className="cart">
                                    <div className="imgcart">
                                        <img src="https://kinhmatanna.com/wp-content/uploads/2023/06/Anna-195-1-300x300.jpg" alt="" />
                                    </div>
                                    <div className="thongtin">
                                        <div className="tencart">GK - 800NB</div>
                                        <div className="carttt">
                                            <div className="soluong">1 x</div>
                                            <div className="giatien">720.000đ</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tongtien">
                                <b>Tạm tính:</b> 720.000đ
                            </div>
                            <button className="thanhtoan"><a href="/thanhtoan">Thanh toán</a></button>

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
