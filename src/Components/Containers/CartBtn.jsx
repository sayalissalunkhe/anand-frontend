import axios from 'axios';
import { useDispatch } from 'react-redux';
import { CheckCartBucket } from '../../Helpers';
import { addToCart, removeFromCart, setTestCartList } from '../../Redux/Actions/TestAction';
import { API_URL } from '../../Redux/Constant/ApiRoute';

export default function CartBtn(props) {
    const dispatch = useDispatch();
    const user = localStorage.getItem('user');

    const addToCartItem = () => {
        if (user !== null) {
            axios.post(API_URL.ADD_TO_CART, {
                user_id: JSON.parse(user).id,
                test_id: props.testData.id,
                test_type: props.testData.IsPackage === 'No' ? 'TEST' : 'PACKAGE',
            }).then((response) => {
                console.log(response.data);
                // Update local storage and state after adding to cart
                const updatedCartList = JSON.parse(localStorage.getItem("CartTestList")) || [];
                updatedCartList.push(props.testData);
                localStorage.setItem("CartTestList", JSON.stringify(updatedCartList));
                dispatch(setTestCartList(updatedCartList));
                dispatch(addToCart(props.testData));
            }).catch(error => {
                console.error("Error adding to cart:", error);
            });
        } else {
            // Redirect to login page or show login prompt
            window.location.href = "/login"; // Redirect to login page
        }
    }

    const removeToCart = () => {
        if (user !== null) {
            axios.post(API_URL.REMOVE_TO_CART, {
                user_id: JSON.parse(user).id,
                test_id: props.testData.id,
                test_type: props.testData.IsPackage === 'No' ? 'TEST' : 'PACKAGE',
            }).then((response) => {
                console.log(response.data);
                // Update local storage and state after removing from cart
                const updatedCartList = JSON.parse(localStorage.getItem("CartTestList")) || [];
                const updatedCartListFiltered = updatedCartList.filter(item => item.id !== props.testData.id);
                localStorage.setItem("CartTestList", JSON.stringify(updatedCartListFiltered));
                dispatch(setTestCartList(updatedCartListFiltered));
                dispatch(removeFromCart(props.testData));
            }).catch(error => {
                console.error("Error removing from cart:", error);
            });
        } else {
            // Show an error message if the user is not logged in
            window.location.href = "/login"; // Redirect to login page
        }
    }

    if (CheckCartBucket(props.testData.TestId)) {
        return (
            <button className="cart-btn remove-btn" onClick={() => removeToCart()}>
                <small><i className="fa fa-times mr-2"></i>Remove</small>
            </button>
        );
    } else {
        return (
            <button className="cart-btn text-white choose-your-package" onClick={() => addToCartItem()} >
                <i className="fa fa-cart-plus mr-1"></i>ADD
            </button>
        );
    }
}
