import React, { useState, useEffect } from 'react';
import './itemListConteiner_old.css'
import ItemList from "../ItemList/Itemlist.jsx";
import SpinnerLoading from '../Spinner/Spinner.jsx';
import Footer from '../Footer/Footer.jsx';
import { useParams } from 'react-router-dom';
import { collection, getDocs,getFirestore,query,where } from 'firebase/firestore';



const ItemListContainer = () => {

    const [products,setProducts] = useState([])
    const {categoryId} = useParams()
    const [loading, setLoading] = useState();

    const mensaje = categoryId ? `Tipo: ${categoryId}` : "Bienvenidos a Öl Beer";

    useEffect(() => {
        setLoading(true);

        const db = getFirestore()

        const misProductos = categoryId
        ? query(collection(db,"productos"),where("categoria","==",categoryId))
        : collection(db,"productos")


        getDocs(misProductos)
        .then((res) => {
            const nuevosProductos = res.docs.map((doc)=>{
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(nuevosProductos)
        })
        .catch((error) => console.log(error))
        .finally(()=>{
            setLoading(false)
        })


    },[categoryId])




    return (
        <>
        <div className='listContainer'>
            <h1 className='mensajePrincipal'>{mensaje}</h1>

          {(products.length)
            ?
            <div className='itemListWrapper'>
            <ItemList list={products}/>
            </div>
            :
            <SpinnerLoading/>

            }
        </div>
        <Footer/>
        </>
    );
};

export default ItemListContainer;