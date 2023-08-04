import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch } from "@/store/hook";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory } from '@/actions/category';

interface Cate {
  id: number;
  name: string;
  price: number;
  img: string;
  materialId: number;
  color: string;
  quantity: number;
  info: string;
}

interface Material {
  id: number;
  name: string;
}

interface AddCateProps {
  onAddCategory: (product: Cate) => void;
}

const AddCategory: React.FC<AddCateProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); // Hook để chuyển hướng

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset: formReset,
  } = useForm<Cate>({
    defaultValues: {}
  });
  // State để lưu trữ dữ liệu chất liệu từ API
  const [materials, setMaterials] = useState<Material[]>([]);

  // Hàm để lấy dữ liệu chất liệu từ API
  const fetchMaterials = async () => {
    try {
      // Thay đổi URL này thành API endpoint của bạn để lấy dữ liệu chất liệu từ server
      const response = await fetch('http://localhost:3000/categories');
      const data = await response.json();
      setMaterials(data);
    } catch (error) {
      console.error('Error fetching materials:', error);
    }
  };

  // Sử dụng useEffect để gọi API và cập nhật dữ liệu chất liệu khi component mount
  useEffect(() => {
    fetchMaterials();
  }, []);
  const containsSpace = (value: string) => !/\s/.test(value);
  const onSubmit = (data: Cate) => {
    // Sử dụng action creator addProduct và gửi action để thêm sản phẩm vào Redux store
    dispatch(addCategory(data));
    // formReset(); // Gọi formReset thay vì reset()
    formReset();

    toast.success('Thêm thành công!', {
      className: 'thongbaothanhcong',
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // Thời gian tự động biến mất sau 3 giây
    });
    // Load lại trang sau khi thêm thành công
    // Đặt thời gian biến mất của thông báo trước khi tải lại trang
    setTimeout(() => {
      navigate('/admin')
    }, 3000);
  };

  return (
    <div className="formadd">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Tên Danh Mục:
            <Controller
              name="name"
              control={control}
              rules={{
                required: 'Không được để trống dữ liệu',
                // validate: {
                //   noSpace: (value) => containsSpace(value) || 'Không nhận dữ liệu space',
                // },
              }}
              render={({ field }) => <input type="text" {...field} />}
            />

          </label>
          {errors.name && <div className="error">{errors.name.message}</div>}
        </div>
        
        <button type="submit">Add Danh Mục</button>

      </form>
      <ToastContainer />
    </div>
  );
};

export default AddCategory;
