import React,{useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./itemDetail.css"
import CartContext from '../../Context/CartContext'

const ItemDetail = ({producto}) => {

    const [quantity,setQuantity] = useState(0)
    const {addToCart} = useContext(CartContext)
    const onAdd = (cantidad) => {
        setQuantity(cantidad)
        addToCart(producto,cantidad)
    }

    return (
        <article className='detail'>
                <div>
                <img src={producto.img} alt=""/>
                </div>
                <div>
                <h1>{producto.nombre}</h1>
                <p>{producto.descripcion}</p>
                <p>Precio : {producto.precio} $</p>
                <p>Stock : {producto.stock} </p>
                {quantity 
                == 0 ? 
                <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                :
                <Link to={"/CartCAnvas"}>Ir al carrito</Link>
                }
                </div>
        </article>
    );
};
export default ItemDetail;
