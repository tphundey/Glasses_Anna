import { useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getCategories,removeCategory } from '@/actions/category';
import { Link } from 'react-router-dom';

const Listdanhmuc = () => {
    const dispatch = useAppDispatch();
    const { categories} = useAppSelector((state: any) => state.category);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    return (
        <div className="listproduct">
            <a className='themspmoi' href="/admin/category/addCate">Thêm Danh mục!</a>

            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Loại kính</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category:any) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td className='chucnang2'>
                                <div className="">
                                    <Link to={`/admin/category/updateCate/${category.id}`} className='sua'>Sửa</Link>
                                </div>
                                <div>
                                    <button onClick={() => dispatch(removeCategory(category.id))} className='xoa'>Xóa</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listdanhmuc