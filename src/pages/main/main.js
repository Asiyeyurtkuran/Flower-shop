import './main.css'
import imageTwo from '../../assets/mainPage/mainTwo.jpg'
import Variants from '../../components/variants/variants'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const Main = () => {

    let navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        console.log('clicked');
        navigate('/shop')
    }
    return (
        <div>
            <div className='wrap'>
                <div className='main'>
                   
                    <h1 className='title'> Fresh Flowers </h1>
                    <h2 className='subtitle'> Blossom with Beauty, Bloom with Freshness!</h2>
                    <p className='description'>Our flowers are hand-picked at the peak of their freshness,
                        ensuring that each blossom is vibrant and alive with natural beauty.</p>
                    <button className='shopBttn' onClick={handleClick}>Shop Now</button>
                </div>
                <div className='picture'>
                    <img src={imageTwo} alt='main pic'></img>
                </div>
            </div>
            <Variants />
        </div>
    )
}

export default Main
