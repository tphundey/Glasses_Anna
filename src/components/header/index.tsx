import "./style.css"

const Header = () => {

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
                                <li><a href=""><img className="c" src="https://cdn.icon-icons.com/icons2/1302/PNG/512/onlineshoppingcart_85781.png" alt="" /></a></li>
                                <span className="count">0</span>
                            </ul>
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
