import React, { useState } from 'react';
import Detail from './Productdetail';
import { Container } from 'react-bootstrap';
import './Product.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'; // Importing useSelector
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { ADD_TO_CART } from './actionType';

const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems); // Accessing cartItems from Redux store

  const handleAddToCart = (item) => {
    // Check if the item already exists in the cart
    const isItemInCart = cartItems.some(cartItem => cartItem.id === item.id);
    if (isItemInCart) {
      alert("Item is already in the cart");
    } else {
      dispatch(addToCart(item));
      alert("Item added to cart ");
    }
  };

  // Function to add item to cart
  const addToCart = (item) => {
    return {
      type: ADD_TO_CART,
      payload: item
    }
  };

  // State to manage liked items
  const [likedItems, setLikedItems] = useState([]);

  // Function to handle toggling liked items
  const handleToggleLike = (id) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter(itemId => itemId !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }
  };

  return (
    <Container>
    <h1 className='text-center py-3'>Products</h1>
    <div className="row">
      {Detail.map((item) => (
        <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
          <Card style={{ width: '100%' }} className='Product-Card'>
            <Card.Img variant="top" src={item.Img} className='' />
            <Card.Body>
              <Card.Title>{item.Title}</Card.Title>
              <Card.Text>
                {item.Cate}
                <h6>${item.Price}/-</h6>
              </Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart(item)}>Add to Cart</Button>
              <button className='btn btn-link p-0 ' onClick={() => handleToggleLike(item.id)}>
                {likedItems.includes(item.id) ? <FcLike /> : <FaRegHeart />}
              </button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  </Container>
  );
};

export default Products;
