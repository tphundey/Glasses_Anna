import './footer.css'

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul>
                            <li className='footer-light'>Tất cả sản phẩm</li>
                            <li>Gọng kính</li>
                            <li>Tròng kính</li>
                            <li>Kinh râm</li>
                            <li>Phụ kiện</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li className='footer-light'>Chính sách mua hàng</li>
                            <li>Hình thức thanh toán</li>
                            <li>Chính sách giao hàng</li>
                            <li>Chính sách bảo hành</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li className='footer-light'>Thông tin liên hệ</li>
                            <li>Điện thoại: 1900 0359</li>
                            <li>Email: marketing@kinhmatanna.com</li>
                            <li>Website: kinhmatanna.com</li>
                            <li>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                                <div className="icon"></div>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li className='footer-light'>Về Anna</li>
                            <li>Mã số thuế: 0108195925</li>
                            <li>
                                <div className="img_logo">
                                    <img src="../../../public/img/logoSaleNoti.png" alt="" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="text-footer">
                    <p>© 2022 annaeyeglasses. Powered by OkHub Việt Nam.</p>
                </div>
                <br />
            </div>
        </footer>
    </div>
  )
}

export default Footer