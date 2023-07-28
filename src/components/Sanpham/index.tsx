import "./style.css"

const Sanpham = () => {

    return (
        <div>


            <div className="container">
                <div className="title">
                    <div className="tl1">HOT TREND</div>
                    <div className="tl2">SẢN PHẨM</div>
                </div>
                <div className="flex">
                    <div className="filter">
                        <div className="th">
                            Thương hiệu
                        </div>
                        <div className="danhmuc">
                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Chemi</label>
                            </div>

                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Element</label>
                            </div>

                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Thailand</label>
                            </div>
                        </div>
                        <br /><br />
                        <div className="th">
                            Khoảng giá
                        </div>
                        <div className="danhmuc">
                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor=""> 100.000đ</label>
                            </div>

                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">200.000đ</label>
                            </div>

                            <div className="ft">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">300.000đ</label>
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="product">
                            <a href="/products/:id">
                            <div className="image">
                                <img src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_4094-copy-1-300x300.jpg" alt="" />
                            </div>
                            <div className="name">GK - 380CK116</div>
                            <div className="price">342,000đ</div>
                            </a>
                        </div>

                        <div className="product">
                            <div className="image">
                                <img src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_4094-copy-1-300x300.jpg" alt="" />
                            </div>
                            <div className="name">GK - 380CK116</div>
                            <div className="price">342,000đ</div>
                        </div>

                        <div className="product">
                            <div className="image">
                                <img src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_4094-copy-1-300x300.jpg" alt="" />
                            </div>
                            <div className="name">GK - 380CK116</div>
                            <div className="price">342,000đ</div>
                        </div>

                        <div className="product">
                            <div className="image">
                                <img src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_4094-copy-1-300x300.jpg" alt="" />
                            </div>
                            <div className="name">GK - 380CK116</div>
                            <div className="price">342,000đ</div>
                        </div>

                        <div className="product">
                            <div className="image">
                                <img src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_4094-copy-1-300x300.jpg" alt="" />
                            </div>
                            <div className="name">GK - 380CK116</div>
                            <div className="price">342,000đ</div>
                        </div>

                        <div className="product">
                            <div className="image">
                                <img src="https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_4094-copy-1-300x300.jpg" alt="" />
                            </div>
                            <div className="name">GK - 380CK116</div>
                            <div className="price">342,000đ</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Sanpham;
