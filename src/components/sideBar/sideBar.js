import './sideBar.css'

import React  from 'react';

import CategoriesBar from './CategoriesBar.js';
import SubCategories from './subCategories.js';
import SortPrice from './sort';



const SideBar = () => {


  return (
    <div className='options'>
    <CategoriesBar />
    <SubCategories />
    <SortPrice />
    </div>
  )
};

export default SideBar;

