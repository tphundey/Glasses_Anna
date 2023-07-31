import "./ProductDetail.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { addToCart, updateCartItem } from "@/actions/cart";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  info: string;
}

const ProductDetail = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams<{ id: string }>();
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

  const handleAddToCart = () => {
    const cartItem = { product, quantity };
    if (product) {
      const existingCartItem = cartItems.find((item) => item.product.id === product.id);
      if (existingCartItem) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tính tổng số lượng mới
        const updatedQuantity = existingCartItem.quantity + quantity;
        if (updatedQuantity <= 5) {
          // Nếu tổng số lượng mới không vượt quá giới hạn 5, cập nhật số lượng trong giỏ hàng
          const updatedCartItem = { ...existingCartItem, quantity: updatedQuantity };
          dispatch(updateCartItem(updatedCartItem)); // Gọi action updateCartItem để cập nhật số lượng sản phẩm trong giỏ hàng
        } else {
          // Nếu tổng số lượng mới vượt quá giới hạn 5, thông báo lỗi
          toast.error('Không thể thêm sản phẩm vào giỏ hàng. Số lượng vượt quá giới hạn (tối đa 5 sản phẩm).', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Thời gian tự động biến mất sau 3 giây
          });
        }
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới
        dispatch(addToCart(cartItem)); // Gọi action addToCart để thêm sản phẩm vào giỏ hàng
        toast.success('Thêm thành công!', {
          className: 'thongbaothanhcong',
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // Thời gian tự động biến mất sau 3 giây
        });
      }
    }
  };
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
                <button onClick={handleAddToCart}>Thêm Vào Giỏ Hàng</button>
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
      <ToastContainer />
    </div>

  );
};

export default ProductDetail;
