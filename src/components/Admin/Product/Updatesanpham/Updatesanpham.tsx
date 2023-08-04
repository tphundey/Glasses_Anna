import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getProductById, updateProduct } from '@/actions/product';
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Product {
    id: number;
    name: string;
    price: number;
    img: string;
    material: string;
    color: string;
    quantity: number;
}

interface RouteParams {
    id: string;
}

const SuaSanPham: React.FC = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams<RouteParams>();
    const product = useAppSelector((state) => state.products.products.find((item) => item.id === parseInt(id)));

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Product>({
        defaultValues: product || {},
    });

    useEffect(() => {
        dispatch(getProductById(parseInt(id)));
    }, [dispatch, id]);


    const onSubmit = (data: Product) => {
        // Gọi action để cập nhật sản phẩm
        dispatch(updateProduct(data));

        toast.success('Sửa thành công!', {
            className: 'thongbaothanhcong',
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Thời gian tự động biến mất sau 3 giây
        });

    };
    return (
        <div className="formadd">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>
                        Tên sản phẩm:
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
                <div>
                    <label>
                        Giá sản phẩm:
                        <Controller
                            name="price"
                            control={control}
                            rules={{
                                required: 'Không được để trống dữ liệu',
                                min: { value: 0, message: 'Giá sản phẩm phải lớn hơn 0' },
                            }}
                            render={({ field }) => <input type="number" {...field} />}
                        />
                    </label>
                    {errors.price && <div className="error">{errors.price.message}</div>}
                </div>
                <div>
                    <label>
                        Ảnh sản phẩm:
                        <Controller
                            name="img"
                            control={control}
                            rules={{
                                required: 'Không được để trống dữ liệu',
                            }}
                            render={({ field }) => <input type="text" {...field} />}
                        />
                    </label>
                    {errors.img && <div className="error">{errors.img.message}</div>}
                </div>

                <div>
                    <label>
                        Màu sắc:
                        <Controller
                            name="color"
                            control={control}
                            rules={{
                                required: 'Không được để trống dữ liệu',
                            }}
                            render={({ field }) => <input type="text" {...field} />}
                        />
                    </label>
                    {errors.color && <div className="error">{errors.color.message}</div>}
                </div>
                <div>
                    <label>
                        Số lượng:
                        <Controller
                            name="quantity"
                            control={control}
                            rules={{
                                required: 'Không được để trống dữ liệu',
                                min: { value: 0, message: 'Số lượng phải lớn hơn 0' },
                            }}
                            render={({ field }) => <input type="number" {...field} />}
                        />
                    </label>
                    {errors.quantity && <div className="error">{errors.quantity.message}</div>}
                </div>
                <button type="submit">Cập nhật sản phẩm</button>
            </form>
            {/* Component ToastContainer để hiển thị thông báo */}
            <ToastContainer />
        </div>
    );
};

export default SuaSanPham;
