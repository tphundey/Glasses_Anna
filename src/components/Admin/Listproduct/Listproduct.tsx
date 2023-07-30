import './Listproduct.css'

const Listproduct = () => {
    // Dữ liệu mẫu về kính
    const glassesData = [
        {
            id: 1,
            name: 'Kính mát cổ điển',
            price: 150,
            img: 'https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_4094-copy-1-300x300.jpg',
            material: 'Nhựa',
            color: 'Đen',
            quantity: 10,
            info: 'Đây là mô tả về kính mát cổ điển.',
        },
        {
            id: 2,
            name: 'Kính cận thời trang',
            price: 180,
            img: 'https://kinhmatanna.com/wp-content/uploads/2023/06/DSC_4094-copy-1-300x300.jpg',
            material: 'Kim loại',
            color: 'Vàng',
            quantity: 8,
            info: 'Đây là mô tả về kính cận thời trang.',
        },
        // Thêm các dữ liệu khác nếu cần
    ];

    return (
        <div className="listproduct">
            <a href="admin/addsanpham">Thêm sản phẩm mới !</a>
            <table>
                <thead>
                    <tr>
                        <th>Msp</th>
                        <th>Hình ảnh</th>
                        <th>Tên kính</th>
                        <th>Giá kính</th>
                        <th>Chất liệu</th>
                        <th>Màu sắc</th>
                        <th>Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {glassesData.map((glass) => (
                        <tr key={glass.id}>
                            <td>{glass.id}</td>
                            <td><img src={glass.img} alt="" /></td>
                            <td>{glass.name}</td>
                            <td>{glass.price}</td>
                            <td>{glass.material}</td>
                            <td>{glass.color}</td>
                            <td>{glass.quantity}</td>

                            <td className='chucnang'>
                                <a href=""><button className='sua'>Sửa</button></a>
                                <button className='xoa'>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listproduct