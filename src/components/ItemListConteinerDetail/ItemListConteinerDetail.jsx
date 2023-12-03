import React, { useState, useEffect } from 'react';

import SpinnerLoading from '../Spinner/Spinner.jsx';
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import { getFirestore,doc,getDoc } from 'firebase/firestore';

const ItemContainerDetail = () => {

    const [product,setProduct] = useState(null)
    const {idProduct} = useParams()


    useEffect(() => {

        const db = getFirestore()

        const nuevoDoc = doc(db,"productos",idProduct)

        getDoc(nuevoDoc)
        .then(res => {
            const data = res.data()
            const nuevoProducto = {id: res.id, ...data}
            setProduct(nuevoProducto)


        })
        .catch(error => console.log(error))

        console.log(product)


    },[idProduct])

    return (
        <>
        <div>
            {
            product
            ?
            <ItemDetail producto={product}/>
            :
            <SpinnerLoading/>
            }
        </div>
        </>
    );
};

export default ItemContainerDetail;