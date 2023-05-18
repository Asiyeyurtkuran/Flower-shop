import React, { useEffect } from 'react'
import { useState } from 'react'
import { get } from '../../service/apiClient';

const SortPrice = () => {
    const [ sortPrice, setSortPrice ] = useState('default')

    const handleSortChange = (event) => {
        event.preventDefault();
        setSortPrice(event.target.value)
    }

    useEffect(() => {
        const fetchSortPrice = async () => {
            try {
                const res = await get('shop/sortPrice');
                setSortPrice(res.data);

            } catch (error) {
                console.error('Error fetching flowers', error)
            }
        }
        fetchSortPrice()
    }, [])

    return (
        <div>
            <h4>Sort Price</h4>
            <select onChange={handleSortChange}>
                <option value="default"> Default</option>
                <option value="highToLow"> Price high to low</option>
                <option value="lowToHigh"> Price low to high</option>
            </select>

        </div>
    )
}

export default SortPrice
