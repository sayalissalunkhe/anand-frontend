import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { CheckCartBucket } from '../../Helpers';
import { addToCart, removeFromCart, setTestCartList } from '../../Redux/Actions/TestAction';
import { API_URL } from '../../Redux/Constant/ApiRoute';
import { gtagReportConversion } from '../../gtag';

export default function CartBtn(props) {
    const dispatch = useDispatch();
    const user = localStorage.getItem('user')


    const gtmScript1 = document.createElement("script");
    gtmScript1.async = true;
    gtmScript1.src = "https://www.googletagmanager.com/gtag/js?id=AW-10841898141";

    const gtmScript2 = document.createElement("script");
    gtmScript2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-10841898141');
    `;

    const gtmScript4 = document.createElement("script");
    gtmScript4.innerHTML = `
    function gtag_report_conversion(url) {
        var callback = function () {
            if (typeof(url) != 'undefined') {
              window.location = url;
            }
          };
          gtag('event', 'conversion', {
              'send_to': 'AW-10841898141/k2ylCOPjl7MZEJ356LEo',
              'transaction_id': '',
              'event_callback': callback
          });
          return false;
        }`;

    // Append the script tags to the head of the document
    document.head.appendChild(gtmScript1);
    document.head.appendChild(gtmScript2);
    document.head.appendChild(gtmScript4);

    const addToCartItem = () => {
        if (user !== null) {
            axios.post(API_URL.ADD_TO_CART, {
                user_id: JSON.parse(user).id,
                test_id: props.testData.id,
                test_type: props.testData.IsPackage == 'No' ? 'TEST' : 'PACKAGE',
            }).then((response) => {
                console.log(response.data)
                gtagReportConversion(undefined, 'AW-10841898141/k2ylCOPjl7MZEJ356LEo');
            })
        }
        dispatch(addToCart(props.testData));
        dispatch(
            setTestCartList(
                JSON.parse(localStorage.getItem("CartTestList"))
            )
        );
    }

    const removeToCart = () => {
        if (user !== null) {
            axios.post(API_URL.REMOVE_TO_CART, {
                user_id: JSON.parse(user).id,
                test_id: props.testData.id,
                test_type: props.testData.IsPackage == 'No' ? 'TEST' : 'PACKAGE',
            }).then((response) => {
                console.log(response.data)
            })
        }
        dispatch(removeFromCart(props.testData));
        dispatch(setTestCartList(JSON.parse(localStorage.getItem("CartTestList"))));
    }
    if (CheckCartBucket(props.testData.TestId)) {
        return (
            <button className="cart-btn remove-btn" onClick={() => removeToCart()}>
                <small><i className="fa fa-times mr-2"></i>Remove</small>
            </button>
        )
    } else {
        return (
            <button className="cart-btn text-white choose-your-package" onClick={() => addToCartItem()} >
                <i className="fa fa-cart-plus mr-1"></i>ADD
            </button>
        )
    }
}