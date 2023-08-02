import { useState, useEffect } from 'react';
import axios from "axios";
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './thanhtoan.css';
import { useNavigate } from 'react-router-dom';
import { Button } from '..';

const Thanhtoan = () => {
    const navigate = useNavigate();
    const [showDiv, setShowDiv] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [cartItemsFromAPI, setCartItemsFromAPI] = useState([]);
    const userProfile = JSON.parse(localStorage.getItem("profile") || "{}");
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [discountAmount, setDiscountAmount] = useState(0); // State để lưu số tiền giảm giá
    const [isDiscountApplied, setIsDiscountApplied] = useState(false); // State để kiểm tra xem mã giảm giá đã được áp dụng hay chưa
    const [voucherCode, setVoucherCode] = useState("");

    useEffect(() => {
        if (voucherCode === "GIAMGIA50") {
            setDiscountAmount(50); // Nếu mã giảm giá hợp lệ, giảm 50 trong tổng số tiền
            setIsDiscountApplied(true);
        } else {
            setDiscountAmount(0); // Nếu mã giảm giá không hợp lệ, không giảm tiền
            setIsDiscountApplied(false);
        }
    }, [voucherCode]);

    const onSubmitVoucherForm = (data: any) => {
        setVoucherCode(data.voucher);
    };
    useEffect(() => {
        // Lấy dữ liệu giỏ hàng từ API
        axios.get("http://localhost:3000/cart")
            .then((response) => {
                const cartItems = response.data;
                const userCart = cartItems.filter((cartItem) => cartItem.userProfile.email === userProfile.email);
                setCartItemsFromAPI(userCart);
            })
            .catch((error) => {
                console.error("Lỗi khi lấy dữ liệu giỏ hàng từ API:", error);
            });
    }, [userProfile.email]);

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
    const wardsByCity = {
        'Hà Nội': ['Ba Đình', 'Hoàn Kiếm', 'Đống Đa', 'Cầu Giấy', 'Hai Bà Trưng', 'Hoàng Mai'],
        'Hồ Chí Minh': ['Quận 1', 'Quận 2', 'Quận 3', 'Quận 4', 'Quận 5', 'Quận 6'],
        // Thêm dữ liệu cho các thành phố/huyện khác ở đây
    };

    const cities = [
        { value: 'Hà Nội', label: 'Hà Nội' },
        { value: 'Hồ Chí Minh', label: 'Hồ Chí Minh' },
        // Thêm các tùy chọn khác ở đây
    ];

    const { handleSubmit, control } = useForm();
    const [selectedCity, setSelectedCity] = useState(cities[0]); // Khởi tạo với thành phố đầu tiên
    const [wardsOptions, setWardsOptions] = useState([]); // Lưu trữ các lựa chọn cho "Xã/Phường"

    // Hàm được gọi khi chọn một thành phố
    const handleCityChange = (selectedCity: any) => {
        setSelectedCity(selectedCity);

        // Lấy danh sách xã/phường dựa trên thành phố được chọn
        const wards = wardsByCity[selectedCity?.value] || [];
        setWardsOptions(
            wards.map((ward: any) => ({ value: ward, label: ward }))
        );
    };


    const [paymentMethod, setPaymentMethod] = useState('cash');

    const handlePaymentMethodChange = (event: any) => {
        setPaymentMethod(event.target.value);
    };
    // Hàm tính tổng số tiền và tổng số sản phẩm trong giỏ hàng
    const calculateCartTotal = (cartItems) => {
        const total = cartItems.reduce((acc, item) => {
            return acc + item.quantity * item.product.price;
        }, 0);
        setTotalPrice(total);

        const totalItems = cartItems.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);
        setTotalItems(totalItems);
    };

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const handleDeleteCartItem = (cartItemId) => {
        axios
            .delete(`http://localhost:3000/cart/${cartItemId}`)
            .then((response) => {
                console.log("Xóa sản phẩm khỏi giỏ hàng thành công:", response.data);
                // Cập nhật lại danh sách giỏ hàng sau khi xóa thành công
                setCartItemsFromAPI((prevCartItems) =>
                    prevCartItems.filter((item) => item.id !== cartItemId)
                );
            })
            .catch((error) => {
                console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
                // Xử lý lỗi và hiển thị thông báo cho người dùng nếu cần
            });
    };

    // Lắng nghe sự thay đổi của danh sách giỏ hàng sau khi xóa sản phẩm
    useEffect(() => {
        // Sau khi danh sách giỏ hàng thay đổi, tính lại tổng số tiền và tổng số sản phẩm
        calculateCartTotal(cartItemsFromAPI);
    }, [cartItemsFromAPI]);
    const onSubmit = (data: any) => {

        if (data.voucher === "GIAMGIA50") {
            setDiscountAmount(50); // Nếu mã giảm giá hợp lệ, giảm 50 trong tổng số tiền
            setIsDiscountApplied(true);
        } else {
            setDiscountAmount(0); // Nếu mã giảm giá không hợp lệ, không giảm tiền
            setIsDiscountApplied(false);
        }
        const orderData = {

            name: data.name,
            email: data.email,
            phone: data.phone,
            city: data.city.value,
            ward: data.ward?.value || '',
            address: data.address,
            voucher: data.voucher,
            paymentMethod: paymentMethod,
            cartItems: cartItemsFromAPI, // Thêm thông tin sản phẩm trong giỏ hàng vào dữ liệu đặt hàng
            totalPrice: totalPrice - (isDiscountApplied ? discountAmount : 0)
        };

        // Gửi dữ liệu lên API
        axios.post("http://localhost:3000/hoadon", orderData)
            .then((response) => {
                console.log("Đặt hàng thành công:", response.data);

                toast.success('Đặt hàng thành công!', {
                    className: 'thongbaothanhcong',
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000, // Thời gian tự động biến mất sau 3 giây
                });
                navigate('/hoadon')
            })
            .catch((error) => {
                console.error("Lỗi khi đặt hàng:", error);
                // Xử lý lỗi và hiển thị thông báo cho người dùng nếu cần
            });

    };
    return (
        <div className="container2">
            <div className='layout'>
                <div className="left">
                    <h2>THANH TOÁN</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Controller

                            name="name"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="text" placeholder="Họ và tên" />}
                        />
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="email" placeholder="Email" />}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="tel" placeholder="Số điện thoại" />}
                        />
                        {/* ...Các trường input khác */}
                        <Controller
                            name="city"
                            control={control}
                            defaultValue={cities[0]} // Khởi tạo với thành phố đầu tiên
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={cities}
                                    value={selectedCity}
                                    onChange={handleCityChange}
                                    isClearable
                                    placeholder="Thành phố/Huyện"
                                />
                            )}
                        /> <br />
                        <Controller
                            name="ward"
                            control={control}
                            defaultValue=""
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={wardsOptions} // Thiết lập các lựa chọn động dựa trên thành phố được chọn
                                    isClearable
                                    placeholder="Xã/Phường"
                                />
                            )}
                        /><br />
                        <Controller
                            name="address"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="text" placeholder="Số nhà và đường" />}
                        />
                        <br />
                        <div>
                            <h2>Phương thức thanh toán</h2>
                            <select className='phuongthuc' value={paymentMethod} onChange={handlePaymentMethodChange}>
                                <option value="cash">Tiền mặt</option>
                                <option value="transfer">Chuyển khoản</option>
                            </select>

                            {paymentMethod === 'cash' ? (
                                <div>
                                    <p>Thanh toán tiền mặt với Shipper</p>
                                </div>
                            ) : (
                                <div>
                                    {/* Thêm nội dung của tab thanh toán chuyển khoản ở đây */}
                                    <img width={'320px'} src='https://b-f10-zpcloud.zdn.vn/3712333603563929973/1df2db0055f486aadfe5.jpg'></img>
                                </div>
                            )}
                        </div>
                        <button type="submit">Đặt hàng</button>
                    </form>
                </div>
                <div className="right">
                    <h2>Nhập mã giảm giá</h2>
                    <form className='giamgia' onSubmit={handleSubmit(onSubmitVoucherForm)}>

                        <Controller
                            name="voucher"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="text" placeholder="Nhập mã giảm giá" />}
                        />
                        <button>Áp dụng</button>
                    </form>
                    <div className="listcart">
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
                                        <button className='removecart' onClick={() => handleDeleteCartItem(cartItem.id)}>Xóa</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tongtien">
                        <b>Tạm tính:</b> {totalPrice - (isDiscountApplied ? discountAmount : 0)}.000đ
                    </div>
                </div>
            </div>
            {/* Component ToastContainer để hiển thị thông báo */}
            <ToastContainer />
        </div>
    );
};

export default Thanhtoan;
