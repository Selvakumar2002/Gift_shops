import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { decrementquantity, incrementquantity, removefromcart } from './actiontypes';

const Cart = () => {
  const cartitems = useSelector(state => state.cart.cartitems);
  const dispatch = useDispatch();

  const handleIncrement = (index) => {
    dispatch(incrementquantity(cartitems[index].id));
  }
      
  const handleDecrement = (index) => {
    dispatch(decrementquantity(cartitems[index].id));
  }

  const handleCancel = (index) => {
    dispatch(removefromcart(cartitems[index].id));
  }

  const checkout = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/checkout', {
        cartitems,
        totalPrice
      });
      if (response.status === 200) {
        // Handle successful checkout
        alert('Checkout successful!');
        // Optionally clear the cart
        // dispatch(clearCart());
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Checkout failed. Please try again.');
    }
  }

  const totalPrice = cartitems.reduce((total, item) => total + (item.Price * item.quantity), 0);

  return (
    <>
      <h1 className='text-center my-4'>Cart</h1>
      {cartitems.length === 0 ? (
        <div className='text-center'>
          <h1>Your cart is empty</h1>
          <h3>Back to <Button href='/products'>Shopping</Button></h3>
        </div>
      ) : (
        <div className='container'>
          <div className='row'>
            {cartitems.map((item, index) => (
              <div key={index} className='col-md-6 col-lg-4 mb-4'>
                <Card>
                  <Card.Img src={item.Img} />
                  <Card.Body>
                    <Card.Title>{item.Title}</Card.Title>
                    <h6>${item.Price}/-</h6>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                      <Button variant="danger" onClick={() => handleCancel(index)}>Remove</Button>
                      <div>
                        <Button onClick={() => handleIncrement(index)}>+</Button>
                        <span className='mx-2'>{item.quantity}</span>
                        <Button onClick={() => handleDecrement(index)}>-</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
      {cartitems.length > 0 && (
        <div className='text-center my-4'>
          <Button onClick={checkout} className='m-3'>Checkout</Button>
          <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
        </div>
      )}
    </>
  );
}

export default Cart;
