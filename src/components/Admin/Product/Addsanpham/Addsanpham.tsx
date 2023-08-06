import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useAppDispatch } from "@/store/hook";
import { addProduct } from '@/actions/product';
import './add.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSpinner } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  categoriesId: number;
  color: string;
  quantity: number;
  info: string;
}

interface Material {
  id: number;
  name: string;
}

interface AddProductFormProps {
  onAddProduct: (product: Product) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [materials, setMaterials] = useState<Material[]>([]);
  const containsSpace = (value: string) => !/\s/.test(value);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset: formReset,
  } = useForm<Product>({
    defaultValues: {}
  });

  const fetchMaterials = async () => {
    try {
      const response = await fetch('http://localhost:3000/categories');
      const data = await response.json();
      setMaterials(data);
    } catch (error) {
      console.error('Error fetching materials:', error);
    }
  };
  useEffect(() => {
    fetchMaterials();
  }, []);

  const onSubmit = async (data: Product) => {
    setIsLoading(true);

    try {
      await dispatch(addProduct(data));
      formReset();

      toast.success('Thêm thành công!', {
        className: 'thongbaothanhcong',
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate('/admin')
      }, 3000);

    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Đã xảy ra lỗi khi thêm sản phẩm. Vui lòng thử lại!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }

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
                validate: {
                  noSpace: (value) => containsSpace(value) || 'Không nhận dữ liệu space',
                },
              }}
              render={({ field }) => <input type="text" {...field} />}
            />

          </label>
          {errors.name && <div className="error">{errors.name.message}</div>}
        </div>
        <div>
          <label>
            Giá thành:<Controller
              name="price"
              control={control}
              rules={{ required: 'Không được để trống dữ liệu', min: { value: 0, message: 'Price must be greater than 0' } }}
              render={({ field }) => <input type="number" {...field} />}
            />

          </label>
          {errors.price && <div className="error">{errors.price.message}</div>}
        </div>
        <div>
          <label>
            Đường dẫn:
            <Controller
              name="img"
              control={control}
              rules={{
                required: 'Không được để trống dữ liệu',
                validate: {
                  noSpace: (value) => containsSpace(value) || 'Không nhận dữ liệu space',
                },
              }}
              render={({ field }) => <input type="text" {...field} />}
            />
          </label>
          {errors.img && <div className="error">{errors.img.message}</div>}
        </div>
        <div>
          <Controller
            name="categoriesId"
            control={control}
            rules={{ required: 'Vui lòng chọn chất liệu' }}
            render={({ field }) => (
              <select
                {...field}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10); // Chuyển đổi giá trị sang kiểu number
                  field.onChange(value); // Cập nhật giá trị trong `Controller` là kiểu number
                }}
              >
                <option value="">-- Chọn chất liệu --</option>
                {materials.map((material) => (
                  <option key={material.id} value={material.id}>
                    {material.name}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.categoriesId && <div className="error">{errors.categoriesId.message}</div>}
        </div>

        <div>
          <label>
            Màu sắc:
            <Controller
              name="color"
              control={control}
              rules={{
                required: 'Không được để trống dữ liệu',
                validate: {
                  noSpace: (value) => containsSpace(value) || 'Không nhận dữ liệu space',
                },
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
              rules={{ required: 'Không được để trống dữ liệu', min: { value: 0, message: 'Quantity must be greater than 0' } }}
              render={({ field }) => <input type="number" {...field} />}
            />

          </label>{errors.quantity && <div className="error">{errors.quantity.message}</div>}
        </div>
        <div>
          <label>
            Mô tả:
            <Controller
              name="info"
              control={control}
              rules={{
                required: 'Không được để trống dữ liệu',
                validate: {
                  noSpace: (value) => containsSpace(value) || 'Không nhận dữ liệu space',
                },
              }}
              render={({ field }) => <textarea {...field} />}
            />
          </label>
          {errors.info && <div className="error">{errors.info.message}</div>}
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? <FaSpinner className="icon-spin" /> : 'Add Product'}
        </button>

      </form>
      {/* Component ToastContainer để hiển thị thông báo */}
      <ToastContainer />
    </div>
  );
};

export default AddProductForm;