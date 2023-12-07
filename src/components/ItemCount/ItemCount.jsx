import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './itemCount.css'

const ItemCount = ({initial,stock,onAdd}) => {

    const [count,setCount] = useState(initial)
    const increment = () => {
        if(count<stock){
            setCount(count+1)
        }
    }
    const decrement = () => {
        if(count>initial){
            setCount(count-1)
        }
    }

    const addToCart = () => {
        onAdd(count)
    }
    
    return (
        <div>
            <button onClick={increment}><FontAwesomeIcon icon={faArrowUp} /></button>
            <span className='count-product' >{count}</span>
            <button onClick={decrement}><FontAwesomeIcon icon={faArrowDown} /></button>
            <button onClick={addToCart}><FontAwesomeIcon icon={faCartPlus} /></button>
        </div>
    );
};

export default ItemCount;
