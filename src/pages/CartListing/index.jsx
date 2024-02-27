import { useContext, useEffect, useState } from 'react';
import './CartListing.css'
import { CartDetailsContext, DataContext } from '../../helpers/context';
import CartList from '../../components/CartList';

function Cart() {
  const data = useContext(DataContext);
  const { cartDetails } = useContext(CartDetailsContext);
  const [cartItemDetails, setCartItemDetails] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if(cartItemDetails.length > 0) {
      setTotalAmount(cartItemDetails.reduce((acc, curr) => (
        acc += curr.price * curr.cartQuantity
      ), 0))
    }
  }, [cartItemDetails]);

  useEffect(() => {
    const itemDetailsArray = [];
    const buildCartObject = (itemId) => {
      const { id, imageURL, name, price, quantity } = data.find(d => d.id === itemId);
      itemDetailsArray.push({
        id,
        imageURL,
        name,
        price,
        maxQuantityAllowed: quantity,
        cartQuantity: cartDetails.get(id)
      });
    }
    const addedtoCartItems = Array.from(cartDetails.keys()).sort((a,b) => a-b);
    addedtoCartItems.map(id => buildCartObject(id));
    setCartItemDetails(itemDetailsArray);
  }, [ cartDetails, data ])

  return <div id='cart-container'>
    <span id='cart-heading'>Shopping Cart</span>
    <CartList cartItemDetails={cartItemDetails} />
    <div id='cart-total'>
      <b>Total Amount</b>
      <span>Rs.{' '}{totalAmount}</span>
    </div>
  </div>;
}

export default Cart;
