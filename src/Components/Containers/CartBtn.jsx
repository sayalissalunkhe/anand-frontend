import axios from 'axios';
import { useDispatch } from 'react-redux';
import { CheckCartBucket } from '../../Helpers';
import { addToCart, removeFromCart, setTestCartList } from '../../Redux/Actions/TestAction';
import { API_URL } from '../../Redux/Constant/ApiRoute';
import { useNavigate } from 'react-router-dom';

export default function CartBtn(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    const addToCartItem = () => {
        if (user !== null) {
            // Check if the product already exists in the cart
            const cartItems = JSON.parse(localStorage.getItem("CartTestList")) || [];
            console.log('cartItems', cartItems);

            const isProductInCart = cartItems.some(item => item.id === props.testData.id);
            console.log('isProductInCart', isProductInCart);

            if (isProductInCart) {
                console.log("Product already exists in the cart.");
                // Optionally, you can inform the user or handle this case as per your application's logic
                return;
            }

            // Assuming props.testData is not already in cartItems, proceed to add it
            const updatedCartList = [...cartItems, props.testData];

            axios.post(API_URL.ADD_TO_CART, {
                user_id: JSON.parse(user).id,
                test_id: props.testData.id,
                test_type: props.testData.IsPackage === 'No' ? 'TEST' : 'PACKAGE',
            }).then((response) => {
                // Update local storage cart list
                localStorage.setItem("CartTestList", JSON.stringify(updatedCartList));
                // console.log('updatedCartList', updatedCartList);
                console.log('cartBtn-response.data', response.data);


                // Dispatch actions to update Redux state
                dispatch(setTestCartList(updatedCartList));
                dispatch(addToCart(props.testData));

            }).catch(error => {
                console.error("Error adding to cart:", error);
            });
        } else {
            localStorage.setItem('redirectAfterLogin', window.location.pathname);
            navigate('/register');
            console.log('props.testData.id', props.testData.id)
        }
    };

    // Function to remove duplicates from cart items
    const removeDuplicates = (cartItems) => {
        const uniqueItems = [];
        const seenIds = new Set();

        for (const item of cartItems) {
            if (!seenIds.has(item.id)) {
                uniqueItems.push(item);
                seenIds.add(item.id);
            }
        }

        return uniqueItems;
    };

    // Example usage:
    const cartItems = JSON.parse(localStorage.getItem("CartTestList")) || [];
    const uniqueCartItems = removeDuplicates(cartItems);
    localStorage.setItem("CartTestList", JSON.stringify(uniqueCartItems));
    console.log('uniqueCartItems', uniqueCartItems);


    const removeToCart = () => {
        if (user !== null) {
            axios.post(API_URL.REMOVE_TO_CART, {
                user_id: JSON.parse(user).id,
                test_id: props.testData.id,
                test_type: props.testData.IsPackage === 'No' ? 'TEST' : 'PACKAGE',
            }).then((response) => {
                // Handle successful response
                const updatedCartList = JSON.parse(localStorage.getItem("CartTestList")) || [];
                console.log("Initial cart list from local storage:", updatedCartList);

                // Filter out the item to be removed
                const updatedCartListFiltered = updatedCartList.filter(item => item.id !== props.testData.id);

                // Save the updated cart list to local storage
                localStorage.setItem("CartTestList", JSON.stringify(updatedCartListFiltered));

                // Dispatch the updated cart list
                dispatch(setTestCartList(updatedCartListFiltered));
                dispatch(removeFromCart(props.testData));

                console.log("Updated cart list after removing the item:", updatedCartListFiltered);

            }).catch(error => {
                // Handle error
                console.error("Error removing from cart:", error);
                // Optionally, dispatch an action to handle error state in Redux or display a message to the user
            });
        } else {
            // Store the current path and redirect to login page
            localStorage.setItem('redirectAfterLogin', window.location.pathname);
            navigate('/login');
        }
    };



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
