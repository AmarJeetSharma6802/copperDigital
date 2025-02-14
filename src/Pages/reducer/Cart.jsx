import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart,clearCart } from "./cartSlice";
import { useNavigate } from "react-router-dom";
function Cart() {
    const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const backBtn = () => {
    navigate("/")
  }
  return (
    <div>
       <div className="back">
              <p className="back-p" onClick={backBtn}> <span><i class="fa-solid fa-arrow-left"></i></span>Back </p>
            </div>
      <div className="cart-pages">
        <div className="h1">

      <h1>Cart</h1>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="flex-cart" key={item.id}>
               <div className="img-details">
               <div className="cart-details">
                <img src={item.img} alt={item.title} id="cart-img" />
                <div className="h2-remove">
                <h2>{item.title}</h2>
                <p onClick={() => handleRemoveCart(item.id)} className="delete">
                <i class="fa-solid fa-trash"></i>
                </p>
                </div>
               </div>
               <div className="price-qun">
               <p>Price: ₹{item.price}</p>
               <p>Quentity :{item.quantity}</p>

               <button className="checkOut">check out</button>
               </div>
               </div>
                   
                </div>
                
            ))}
            <div className="clearbtn-pricebtn">

            <button className="btncart">
              Total Price :₹{totalPrice ? totalPrice.toFixed(2) : "0.00"}
            </button>
            <button className="clearCart btncart" onClick={() => dispatch(clearCart())} >Clear Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
