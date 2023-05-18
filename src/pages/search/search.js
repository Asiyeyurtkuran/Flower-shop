
// import React, { useEffect, useState } from 'react';
// import { get } from '../../service/apiClient'
// import './search.css'
// import { useNavigate } from 'react-router-dom';


// const Search = () => {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [products, setProducts] = useState([]);
//     const [filtered, setFiltered] = useState([]);
//     const [cart, setCart] = useState([])

//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchProducts = async () => {
//             try {
//                 const response = await get( 'shop') ;
//                 console.log('response:', response)
//                 setProducts(response.data);

//             } catch (e) {
//                 console.log(e);
//             }
//         }

//         fetchProducts();
//     }, [])



//     const handleSearchChange = (event) => {
//         console.log("product", products)

//         setSearchTerm(event.target.value);
//         if (products) {
//             const searchFilter = products.filter((product) =>
//                 product.name.toLowerCase().includes(event.target.value.toLowerCase())
//             );
//             setFiltered(searchFilter);
//         }
//     };

//     const handleSearchSubmit = async (event) => {
//         event.preventDefault();
//         setSearchTerm(event.target.value);

//     };
  


//     const addToCart = (product) => {
//         setCart([...cart, product]);
//     };



//     return (
//         <>
//             <form onSubmit={handleSearchSubmit}>
//                 <input
//                     className='searchInput'
//                     type="text"
//                     placeholder="Search..."
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                 />
//                 <button className='submitBttn' onChange={handleSearchSubmit} type="submit">Search</button>
//             </form>


//             <ul>
//                 {filtered?.map((product, index) => (
//                     <li key={index}>
//                         <img src={require(`./../../assets/data/${product.image}`)} alt={product.name} />
//                         <p>{product.name}</p>
//                         <p>£ {product.price}</p>
//                         <button className="addToCartBttn" onClick={() => { addToCart(product); alert(`Added to Cart`); navigate('/cart') }}> Add To Cart </button>
//                         <button className="addToWishlistBttn" onClick={() => { alert(`Added to Wish List`); navigate('/wishlist') }} > Add To WishList </button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );

// }

// export default Search

import React, { useEffect, useState } from 'react';
import { get } from '../../service/apiClient';
import './search.css';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await get('shop');
                setProducts(response.data);
                console.log("response", response)
            } catch (e) {
                console.log(e);
            }
        };

        fetchProducts();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        if (products) {
            const searchFilter = products.filter((product) => {
                const productName = product.name.toLowerCase();
                const categoryName = product.category?.name?.toLowerCase() || '';
                const subcategoryName = product.subcategory?.name?.toLowerCase() || '';

                return (
                    productName.includes(event.target.value.toLowerCase()) ||
                    categoryName.includes(event.target.value.toLowerCase()) ||
                    subcategoryName.includes(event.target.value.toLowerCase())
                );
            });



            setFiltered(searchFilter);
        }
    };

    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        // İstediğiniz ek işlemleri burada gerçekleştirebilirsiniz
    };

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <>
            <form onSubmit={handleSearchSubmit}>
                <input
                    className='searchInput'
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className='submitBttn' type="submit">Search</button>
            </form>

            <ul>
                {filtered?.map((product, index) => (
                    <li key={index}>
                        <img src={require(`./../../assets/data/${product.image}`)} alt={product.name} />
                        <p>{product.name}</p>
                        <p>£ {product.price}</p>
                        <button
                            className="addToCartBttn"
                            onClick={() => { addToCart(product); alert(`Added to Cart`); navigate('/cart') }}
                        >
                            Add To Cart
                        </button>
                        <button
                            className="addToWishlistBttn"
                            onClick={() => { alert(`Added to Wish List`); navigate('/wishlist') }}
                        >
                            Add To WishList
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Search;