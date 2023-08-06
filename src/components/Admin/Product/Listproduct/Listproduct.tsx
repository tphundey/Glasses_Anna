import './Listproduct.css';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getProduct, removeProduct } from '@/actions/product';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';

const Listproduct = () => {

    const dispatch = useAppDispatch();
    const { products } = useAppSelector((state: any) => state.products);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const itemsPerPage = 4;
    useEffect(() => {
        dispatch(getProduct());
    }, []);

    const totalItems = products.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

    const currentItems = products.slice(startIndex, endIndex);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const isAdmin = JSON.parse(localStorage.getItem('profile'))?.email === 'anhnek033@gmail.com';
        if (!isLoggedIn || !isAdmin) {
            navigate('/'); // Chuyển hướng người dùng về trang chủ nếu không thỏa mãn điều kiện truy cập admin
        }
    },);
    return (
        <div className="listproduct">

            <a className='themspmoi' href="admin/addsanpham">Thêm sản phẩm mới !</a>
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
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map((item: any) => (
                        <tr key={item.id}>
                            <td>SP{item.id}</td>
                            <td><img src={item.img} alt="" /></td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.categoriesId}</td>
                            <td>{item.color}</td>
                            <td>{item.quantity}</td>
                            <td className='chucnang'>
                                <div className="">
                                    <Link to={`/admin/suasanpham/${item.id}`} className='sua'>Sửa</Link>
                                </div>
                                <div>
                                    <button onClick={() => dispatch(removeProduct(item.id))} className='xoa'>Xóa</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                current={currentPage}
                onChange={handlePageChange}
                total={totalItems}
                pageSize={itemsPerPage}
            />
        </div>
    );
};

export default Listproduct;
