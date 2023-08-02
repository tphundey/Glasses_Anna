import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Listuser = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        // Gọi API để lấy dữ liệu người dùng
        axios.get('http://localhost:3000/googleAccount')
            .then((response) => {
                // Lưu trữ dữ liệu người dùng vào state
                setUserData(response.data);
            })
            .catch((error) => {
                console.error('Lỗi khi lấy dữ liệu người dùng:', error);
            });
    }, []); // Dependency array rỗng để useEffect chỉ chạy một lần sau khi component mount
    // Hàm xử lý sự kiện khi nhấn nút xóa người dùng
    const handleDeleteUser = (userId) => {
        const shouldDelete = window.confirm('Bạn có chắc chắn muốn xóa người dùng này?');
        if (shouldDelete) {
            // Gọi API để xóa người dùng với id tương ứng
            axios.delete(`http://localhost:3000/googleAccount/${userId}`)
                .then((response) => {
                    console.log('Xóa người dùng thành công:', response.data);
                    // Cập nhật lại danh sách người dùng sau khi xóa thành công
                    setUserData((prevUserData) => prevUserData.filter((user) => user.id !== userId));
                })
                .catch((error) => {
                    console.error('Lỗi khi xóa người dùng:', error);
                });
        }
    };
    return (
        <div className="listproduct">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên người dùng</th>
                        <th>Email</th>
                        <th>Hình ảnh</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><img src={user.img} alt="" /></td>
                            <td>
                                <button style={{ padding: 10, backgroundColor: 'red', border: 'none', color: 'white', borderRadius: 5 }} onClick={() => handleDeleteUser(user.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listuser;
