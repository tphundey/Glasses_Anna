import './Listproduct.css'

const Listproduct = () => {
    // Dữ liệu mẫu về kính
    const glassesData = [
        {
            id: 1,
            name: 'Kính mát cổ điển',
            price: 150,
            material: 'Nhựa',
            color: 'Đen',
            productPrice: 200,
            quantity: 10,
            info: 'Đây là mô tả về kính mát cổ điển.',
        },
        {
            id: 2,
            name: 'Kính cận thời trang',
            price: 180,
            material: 'Kim loại',
            color: 'Vàng',
            productPrice: 230,
            quantity: 8,
            info: 'Đây là mô tả về kính cận thời trang.',
        },
        // Thêm các dữ liệu khác nếu cần
    ];

    return (
        <div className="listproduct">
            <table>
                <thead>
                    <tr>
                        <th>Tên kính</th>
                        <th>Giá kính</th>
                        <th>Chất liệu</th>
                        <th>Màu sắc</th>
                        <th>Giá sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Thông tin kính</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {glassesData.map((glass) => (
                        <tr key={glass.id}>
                            <td>{glass.name}</td>
                            <td>{glass.price}</td>
                            <td>{glass.material}</td>
                            <td>{glass.color}</td>
                            <td>{glass.productPrice}</td>
                            <td>{glass.quantity}</td>
                            <td>{glass.info}</td>
                            <td>Xóa</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listproduct