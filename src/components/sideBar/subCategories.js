import React from 'react'
import { useNavigate } from 'react-router-dom';
import { get } from '../../service/apiClient';
import { useEffect, useState } from 'react';


const SubCategories = () => {

    const navigate = useNavigate();
    const [subCategories, setSubCategories] = useState([]);
    const [selectedSubCategory, setSelectedSubCategory] = useState('all');

    useEffect(() => {
        const fetchSubCategories = async () => {
            try {
                const res = await get('shop/subcategories');
                setSubCategories(res.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchSubCategories();
    }, []);

    const selectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedSubCategory(selectedValue);
        navigate(`/shop/${selectedValue}`);
    };

  return (
    <div>
          <h4>SubCategories</h4>
          <select onChange={selectChange} value={selectedSubCategory}>
              <option value='all'>All Categories</option>
              {subCategories.map((subCategory) => (
                  <option key={subCategory.id} value={subCategory.name}>
                      {subCategory.name}
                  </option>
              ))}
          </select>
    </div>
  )
}

export default SubCategories
