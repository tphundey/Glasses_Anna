import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCategoryById, updateCategory } from '@/actions/category';

interface Cate {
    id: number;
    name: string;
}

interface RouteParams {
    id: string;
}

const UpdateCategory: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams<RouteParams>();
    const category = useAppSelector((state) => state.category.categories.find((item) => item.id === parseInt(id)));

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Cate>({
        defaultValues: category || {},
    });

    useEffect(() => {
        dispatch(getCategoryById(parseInt(id)));
    }, [dispatch, id]);




    const onSubmit = (data: Cate) => {
        // Gọi action để cập nhật sản phẩm
        dispatch(updateCategory(data));
        toast.success('Sửa thành công!', {
            className: 'thongbaothanhcong',
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,// Thời gian tự động biến mất sau 3 giây

        });

    };
    return (
        <div className="formadd">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>
                        Tên danh mục:
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: 'Không được để trống dữ liệu',

                            }}
                            render={({ field }) => <input type="text" {...field} />}
                        />
                    </label>
                    {errors.name && <div className="error">{errors.name.message}</div>}
                </div>
                
                <button type="submit">Cập nhật Danh mục</button>
            </form>
            {/* Component ToastContainer để hiển thị thông báo */}
            <ToastContainer />
        </div>
    );
};

export default UpdateCategory;
