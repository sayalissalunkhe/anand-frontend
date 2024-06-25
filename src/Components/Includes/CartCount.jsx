import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import cart from '../../assets/images/cart.png'; // Make sure to adjust the path to your cart image
import { toast } from 'react-hot-toast';

export default function CartCount() {
    const cartItemCount = useSelector((state) => state.TestCartList.cartTest);
    const navigate = useNavigate();

    const handleCartClick = (event) => {
        const user = localStorage.getItem('user');
        if (!user) {
            event.preventDefault(); // Prevent the default link behavior
            toast.error("Please log in to view your cart.");
            navigate('/login'); // Redirect to the login page
        }
    };

    return (
        <Link to='/my-cart' className='position-relative' onClick={handleCartClick}>
            <img src={cart} alt="" className="img-fluid" />
            {
                cartItemCount !== undefined
                    ?
                    cartItemCount.length !== 0 ?
                        <b className="badge badge-dark cart-count">{cartItemCount.length}</b>
                        : null
                    :
                    localStorage.getItem('CartTestList') !== null
                        ?
                        JSON.parse(localStorage.getItem('CartTestList')).length !== 0 ?
                            <b className="badge badge-dark cart-count">{JSON.parse(localStorage.getItem('CartTestList')).length}</b>
                            : null
                        : null
            }
            <span>Cart</span>
        </Link>
    );
}
