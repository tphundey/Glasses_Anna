import "./style.css"
import React, { useState } from 'react';


const Header = () => {
    const [showDiv, setShowDiv] = useState(false);

    const toggleDiv = (event: any) => {
        event.preventDefault(); // Ngăn chặn chuyển hướng đến URL không hợp lệ
        setShowDiv(!showDiv);
    };
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
                                <li><a href=""><img className="b" src="https://cdn.icon-icons.com/icons2/2987/PNG/512/home_set_of_house_clipart_icon_187233.png" alt="" /></a></li>
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
                            <button className="thanhtoan"><a href="">Thanh toán</a></button>

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

        </div>

    );
};

export default Header;
