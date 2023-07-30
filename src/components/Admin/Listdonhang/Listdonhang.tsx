
const Listdonhang = () => {
    // Dữ liệu mẫu về danh sách đơn hàng
    const orderData = [
        {
            id: 1,
            orderCode: 'DH001',
            customerName: 'Nguyễn Văn Anh',
            products: [
                { name: 'Kính mát cổ điển', quantity: 3, price: 150 },
                { name: 'Kính cận thời trang', quantity: 1, price: 180 },
            ],
            totalAmount: 630,
            status: 'Đang giao hàng',
        },
        {
            id: 2,
            orderCode: 'DH002',
            customerName: 'Trần Thị Bình',
            products: [{ name: 'Kính cận thời trang', quantity: 4, price: 180 }],
            totalAmount: 720,
            status: 'Đã giao hàng',
        },
        // Thêm các dữ liệu khác nếu cần
    ];
    return (
        <div className="listproduct">
            <table>
                <thead>
                    <tr>
                        <th>Mã đơn hàng</th>
                        <th>Tên khách hàng</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orderData.map((order) => (
                        <tr key={order.id}>
                            <td>{order.orderCode}</td>
                            <td>{order.customerName}</td>
                            <td>
                                {order.products.map((product) => (
                                    <div key={product.name}>
                                        {product.name}
                                    </div>
                                ))}
                            </td>
                            <td>
                                {order.products.map((product) => (
                                    <div key={product.name}>
                                        {product.quantity}
                                    </div>
                                ))}
                            </td>
                            <td>
                                {order.products.map((product) => (
                                    <div key={product.name}>
                                        {product.price}
                                    </div>
                                ))}
                            </td>
                            <td>{order.totalAmount}</td>
                            <td>{order.status}</td>
                            <td>Xóa</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listdonhang