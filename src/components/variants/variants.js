import React, { useState } from 'react'
import './variants.css'
import vase2 from '../../assets/mainPage/vase2.jpeg'
import succulent2 from '../../assets/mainPage/succulent2.avif'
import bouquet4 from '../../assets/mainPage/bouquet4.jpeg'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'
import { get } from '../../service/apiClient'

const Variants = () => {
 
  return (
    <div className='allVariants' >


      <div className='opt1'>
        <Link to='/shop/bouquets'>
          <img className='variants' src={bouquet4} alt='bouquet34' ></img>
          <p className='variantsName'>Bouquet of Flowers</p>
          

        </Link>
      </div>




      <div className='opt2'>
        <Link to='/shop/vases' >
          <img className='variants' src={vase2} alt='vase1'></img>
          <p className='variantsName' >Vase of Flowers</p>
        </Link >
      </div>




      <div className='opt3'>
        <Link to='/shop/succulent&cactus' >
          <img className='variants' src={succulent2} alt='succulent2'></img>
          <p className='variantsName' >Succulents and Cactus</p>
        </Link >
      </div>


    </div>
  )
}

export default Variants;
