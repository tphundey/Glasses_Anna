import "./ProductDetail.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  useEffect(() => {
    // Gọi action để lấy sản phẩm theo ID khi component tải lên
    getProductById(id);
  }, [id]);

  const getProductById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`); // Thay đổi đường dẫn tới API của bạn
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setProduct(null);
    }
  };
  if (!product) {
    return <div>Đang tải...</div>;
  }
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }

  }
  return (
    <div className="container">
      <div className="product_detail">
        <div className="product_detail-top">Trang chủ - Sản phẩm</div>
        <div className="product_detail-info">
          <div className="detail_info-left">
            <div className="img-primary">
              <img src="../../../public/img/img_pri.jpg" alt="" />
            </div>
          </div>
          <div className="detail_info-right">
            <div className="info-top">
              <div className="name">{product.name}</div> <br />
              <div className="price">{product.price}.000₫</div>
              <div className="title">
                <p>Mã sản phẩm: 200CK032</p>
                <p>Chất liệu: Kim loại</p>
                <p>Màu sắc: {product.color}</p>
                <p>Thông tin: {product.info}</p>

              </div>
              <div className="ship">
                Miễn phí giao hàng từ 500k ( vận chuyển 3 - 5 ngày )
              </div>
              <div className="input">
                <button className="btn_quantily down" onClick={handleDecrease}>-</button>
                <input defaultValue={1} min={1} max={5} type="number" className="input_quantily" value={quantity} />
                <button className="btn_quantily up" onClick={handleIncrease}>+</button>
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
