import React, { useContext } from "react";
import { CiBeerMugFull } from "react-icons/ci";
import { Link } from "react-router-dom";
import './CartWidget.css';
import CartContext from '../../Context/CartContext'


const CartWidget = () => {

    const {cantidadTotal} = useContext(CartContext)

    return (
        <div className='cart'>
            <Link to="/cartcanvas">
            <div className='cart-icon-container'>
                
                <CiBeerMugFull size={50}/>
                
            </div>
            </Link>
            <p className='cart-count' style={{color : 'white'}}>{cantidadTotal}</p>
        </div>
    );
};
export default CartWidget;