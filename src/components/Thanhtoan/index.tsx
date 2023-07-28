import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';

import './thanhtoan.css';
import { Button } from '..';

const Thanhtoan = () => {

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

    const onSubmit = (data: any) => {
        // Xử lý đăng ký tại đây
        console.log(data);
    };
    const [paymentMethod, setPaymentMethod] = useState('cash');

    const handlePaymentMethodChange = (event:any) => {
        setPaymentMethod(event.target.value);
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
                                    <p>Điền thông tin thanh toán chuyển khoản vào đây.</p>
                                </div>
                            )}
                        </div>
                        <button type="submit">Đặt hàng</button>
                    </form>
                </div>
                <div className="right">
                    <h2>Nhập mã giảm giá</h2>
                    <form className='giamgia' onSubmit={handleSubmit(onSubmit)}>

                        <Controller
                            name="voucher"
                            control={control}
                            defaultValue=""
                            render={({ field }) => <input {...field} type="text" placeholder="Nhập mã giảm giá" />}
                        />
                        <Button> Áp dụng</Button>
                    </form>
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
                        <b>Tổng cộng:</b> 720.000đ
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Thanhtoan;
