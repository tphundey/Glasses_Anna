

const Listuser = () => {

    // Dữ liệu mẫu về danh sách người dùng
    const userData = [
        {
            id: 1,
            name: 'Nguyễn Văn Anh',
            age: 28,
            email: 'nguyenvananh@example.com',
            phoneNumber: '0123456789',
        },
        {
            id: 2,
            name: 'Trần Thị Bình',
            age: 25,
            email: 'tranthibinh@example.com',
            phoneNumber: '0987654321',
        },
        // Thêm các dữ liệu khác nếu cần
    ];

    return (
        <div className="listproduct">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên người dùng</th>

                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phoneNumber}</td>
                            <td>Xóa</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listuser