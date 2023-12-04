import './App.css'
import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import Look from './components/Look/Look';
import Contactos from './components/Contactos/Contactos';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ItemContainerDetail from './components/ItemListConteinerDetail/ItemListConteinerDetail';
import CartCanvas from './components/CartCanvas/CartCanvas'
import ItemListContainerCategory from './components/ItemListConteinerCategory/ItemListConteinerCategory';
//import {getFirestore,doc,getDoc, getDocsFromServer} from "firebase/firestore"
import {getFirestore,collection,getDocs,query,where} from "firebase/firestore"
import { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart' 
import { CartProvider } from './Context/CartContext';
import  {UserProvider} from './Context/UserContext'





function App() {

  //  const [product,setProduct] = useState(null)
  //  useEffect(()=> {
   //   const db = getFirestore()
   //   const productRef = doc(db,"productos","56B8lyXiALKDDvLZBgr1")
  //    getDoc(productRef).then((snapshot) => {
  //      if(snapshot.exists()){
   //       setProduct({id: snapshot.id,...snapshot.data()})
  //      }
  //    })
  //  },[])
  //  console.log(product)
    const greet = "Bienvenidos a Öl Beer";


    return (
    <>


      <BrowserRouter>
        <CartProvider>
        <UserProvider>

        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer mensaje={greet}/>}/>

          <Route path='/:categoryId' element={<ItemListContainer/>}/>
            
          <Route path='/look' element={<Look/>}/>

          <Route path='/contactos' element={<Contactos/>}/>

          <Route path='/cart' element={<Cart/>}/>

          <Route path='/cartcanvas' element={<CartCanvas/>}/>

          <Route path='/item/:idProduct' element={<ItemContainerDetail/>}/>


        </Routes>
        </UserProvider>
        </CartProvider>
        
      </BrowserRouter>

    </>
  )
}

export default App


