import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './cart.css'

const Cart = () => {

  const {cart,total,clearCart,removeItem} = useContext(CartContext);
  
  return (
    <div className="cart-container">

      <div className="cart-items">

        {
          cart.map((p)=>(
            <div className="cart-item" key={p.producto.id}>
              <img src={p.producto.img} alt={p.nombre} />
              <h1>{p.producto.nombre}</h1>
              <p>Precio unidad: {p.producto.precio}$</p>
              <p>Cantidad reservada: {p.cantidad}</p>
              <p>Subtotal:{p.cantidad*p.producto.precio}$</p>
              <button onClick={()=>{removeItem(p.producto.id)}}>ELIMINAR PRODUCTO</button>
            </div>
          ))
        }

      </div>

      <h2 className="total">VALOR TOTAL DEL CARRITO: ${total}</h2>
      <button  className="clear-button" onClick={()=>{clearCart()}}>Quitar Productos</button>
      <Link to="/checkout">
      <button  className="clear-button" >Realizar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;