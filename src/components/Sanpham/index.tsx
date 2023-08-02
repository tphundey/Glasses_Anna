import "./style.css";
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { getProduct } from '@/actions/product';
import Skeleton from "react-loading-skeleton";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sanpham = () => {
    const dispatch = useAppDispatch();
    const { products, isLoading, error } = useAppSelector((state: any) => state.products);
    const [categories, setCategories] = useState([]);
    const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [priceOptions] = useState([
        { id: 1, value: 1, label: "< 100.000" },
        { id: 2, value: 2, label: "< 200.000" },
        { id: 3, value: 3, label: "< 300.000" },
    ]);

    const [selectedPriceIds, setSelectedPriceIds] = useState([]);
    const [isLoadingDelay, setIsLoadingDelay] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoadingDelay(false);
        }, 1000);
        dispatch(getProduct());

        axios.get('http://localhost:3000/categories')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    useEffect(() => {
        const updatedFilteredProducts = products.filter(product => {
            const isInSelectedCategories = selectedCategoryIds.length === 0 || selectedCategoryIds.includes(product.categoriesId);
            const isInSelectedPriceRanges = (
                selectedPriceIds.length === 0 ||
                (selectedPriceIds.includes(1) && product.price < 100) ||
                (selectedPriceIds.includes(2) && product.price < 200) ||
                (selectedPriceIds.includes(3) && product.price < 300)
            );
            return isInSelectedCategories && isInSelectedPriceRanges;
        });
        setFilteredProducts(updatedFilteredProducts);
    }, [selectedCategoryIds, selectedPriceIds, products]);
    const handlePriceChange = (priceId) => {
        if (selectedPriceIds.includes(priceId)) {
            setSelectedPriceIds(selectedPriceIds.filter(id => id !== priceId));
        } else {
            setSelectedPriceIds([...selectedPriceIds, priceId]);
        }
    };
    const handleCategoryChange = (categoryId) => {
        if (selectedCategoryIds.includes(categoryId)) {
            setSelectedCategoryIds(selectedCategoryIds.filter(id => id !== categoryId));
        } else {
            setSelectedCategoryIds([...selectedCategoryIds, categoryId]);
        }
    };
    if (isLoading || isLoadingDelay) return <Skeleton count={30} height={35} highlightColor="#9AD3CE" />;
    if (error) return <div>{error}</div>;
    return (
        <div>
            <div className="container">
                <div className="title">
                    <div className="tl1">HOT TREND</div>
                    <div className="tl2">SẢN PHẨM</div>
                </div>
                <div className="flex">
                    <div className="filter">
                        <div className="th">
                            Thương hiệu
                        </div>
                        <div className="danhmuc">
                            {/* Display categories fetched using Axios */}
                            {categories.map((category) => (
                                <div key={category.id} className="ft">
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        checked={selectedCategoryIds.includes(category.id)}
                                        onChange={() => handleCategoryChange(category.id)}
                                    />
                                    <label htmlFor="">{category.name}</label>
                                </div>
                            ))}
                        </div>
                        <br /><br />
                        <div className="th">
                            Khoảng giá
                        </div>
                        <div className="danhmuc">
                            {/* Display price options */}
                            {priceOptions.map((option) => (
                                <div key={option.id} className="ft">
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        checked={selectedPriceIds.includes(option.id)}
                                        onChange={() => handlePriceChange(option.id)}
                                    />
                                    <label htmlFor="">{option.label}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="list">
                        {/* Display filtered products */}
                        {filteredProducts.map((item: any) => (
                            <div key={item.id} className="product">
                                <Link to={`/products/${item.id}`} >
                                    <div className="image">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="name">{item.name}</div>
                                    <div className="price">{item.price}.000đ</div>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sanpham;
