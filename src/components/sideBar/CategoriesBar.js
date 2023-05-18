import React from 'react'
import { useNavigate } from 'react-router-dom';
import { get } from '../../service/apiClient';
import { useEffect, useState } from 'react';


const CategoriesBar = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await get('shop/categories');
                setCategories(res.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const selectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue);
        navigate(`/shop/${selectedValue}`);
    };

    return (
        <div className='sideBar'>
            <h4>Categories</h4>
            <select onChange={selectChange} value={selectedCategory}>
                <option value='all'>All Categories</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategoriesBar
