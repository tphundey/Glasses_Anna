import "./ProductDetail.css";

const ProductDetail = () => {
  return (
    <div className="container">
      <div className="product_detail">
        <div className="product_detail-top">Trang chủ</div>
        <div className="product_detail-info">
          <div className="detail_info-left">
            <div className="img-primary">
              <img src="../../../public/img/img_pri.jpg" alt="" />
            </div>
          </div>
          <div className="detail_info-right">
            <div className="info-top">
              <div className="name">GK - 200CK032</div> <br />
              <div className="price">200,000₫</div>
              <div className="title">
                <p>Mã sản phẩm: 200CK032</p>
                <p>Chất liệu: Kim loại</p>
                <p>Màu sắc: Trắng, Đen hồng, Hồng, Đen vàng, Đen trắng, Đen</p>
                <p>Gía sản phẩm: 200.000</p>
              </div>
              <div className="ship">
                Miễn phí giao hàng từ 500k ( vận chuyển 3 - 5 ngày )
              </div>
              <div className="input">
                <button className="btn_quantily down">-</button>
                  <input type="text" className="input_quantily" value={`1`}/>
                <button className="btn_quantily up">+</button>
              </div>
              <div className="add_cart">
                <button>Thêm Vào Giỏ Hàng</button>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="product_info">
        <div className="info_left">
          <div className="info_left-header">
            <h4>Thông tin</h4>
          </div>
          <div className="info_left-content">
            <p>Chịu trách nhiệm sản phẩm: Công Ty TNHH Dịch vụ và Thương mại Anna Việt Nam</p>
            <p>Cảnh báo: Bảo quản trong hộp kính</p>
            <p>Hướng dẫn sử dụng:</p>
            <p>+ Tháo kính bằng 2 tay</p>
            <p>+ Không bỏ kính vào cốp xe hoặc những nơi có nhiệt độ cao làm biến dạng kính.</p>
            <p>+ Không bỏ kính vào túi sách nếu không có hộp kính, vật dụng nhọn như chìa khóa sẽ làm xước kính.</p>
            <p>+ Không rửa kính lau kính bằng các chất có tính tẩy rửa mạnh làm bong tróc lớp váng phủ</p>

          </div>
        </div>
        <div className="info_right">
          <div className="info_right-img">
            <img src="../../../public/img/product_detail-img.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
