import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }] = useStateValue();
    console.log(basket);

    return (
        <div className='checkout'>
            <div className="checkout_left">
            <img className='checkout_ad'
            src="https://madmartech.com/wp-content/uploads/2019/05/970x250-1.png"
            alt=""
            />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>You have no items in your basket.
                        To buy one or more items click add to basket.
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout_title'>Your Shopping Basket</h2>
                    {basket.map((item) => (
                        <CheckoutProduct 
                            id ={item.id}
                            title ={item.title}
                            image ={item.image}
                            price ={item.price}
                            rating ={item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            
            {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )}

           
            
            
        </div>
    );
}

export default Checkout

