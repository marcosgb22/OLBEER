import React,{useState,useEffect,useContext} from 'react';
import {collection,addDoc,updateDoc, getFirestore,doc, getDoc} from 'firebase/firestore'
import CartContext from '../../Context/CartContext';
import './checkout.css';


const Checkout = () => {

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [confirmarEmail, setConfirmarEmail] = useState("")
    const [error, setError] = useState("")
    const [orderId, setOrderId] = useState("")

    const {cart,total,cantidadTotal,clearCart} = useContext(CartContext)

    const manejadorFormulario = (event) => {

        //EVITAMOS QUE SE EJECUTE POR DEFECTO
        event.preventDefault()

        if(!nombre || !apellido || !telefono || !email){
            setError("Completar los campos requeridos")
        }
        if(email !== confirmarEmail){
            setError("Error al confirmar email")
        }

        //Creamos instancia de bases de datos

        const db = getFirestore()

        //generamos objeto de de la orden

        const order = {
            items: cart.map((producto)=> ({

                id: producto.producto.id,
                nombre: producto.producto.nombre,
                cantidad: producto.cantidad,
                

            })),
            total: total,
            fecha: new Date,
            nombre,
            apellido,
            telefono,
            email
        }

        if(error){

        }else{

        //generamos orden y reduccion de stock
        Promise.all(
            order.items.map(async(productoOrder)=>{
                const productoRef = doc(db,"productos",productoOrder.id)
                const productoDoc = await getDoc(productoRef)
                const stockActual = productoDoc.data().stock

                console.log(stockActual)
                console.log(productoOrder.cantidad)

                //reducimos stock
                await updateDoc(productoRef,{
                    stock: stockActual - productoOrder.cantidad
                   
                })
            })
        )
        .then(()=> {
            addDoc(collection(db,"ordenes"),order)
            .then((docRef)=>{
                setOrderId(docRef.id);
                clearCart()
            })
            .catch((error)=>{
                setError("se Produjo un error al crear la orden")
            })
        })
        .catch((error)=>{
            setError("No se puede actualizar el stock -- intentelo mas tarde")
        })
    }

    }


    return (
        <div className="container_form">
            <h2>Ingresa tus datos</h2>

            {
                cart.map((producto) => {
                    <div key={producto.producto.id}>
                        <p>
                            {producto.producto.nombre} x {producto.cantidad}
                        </p>
                        <p>{producto.producto.precio}</p>
                    </div>

                })
            }
            <form onSubmit={manejadorFormulario} className="form_form">
            
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e)=> setNombre(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=> setApellido(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Telefono</label>
                <input type="number" onChange={(e)=> setTelefono(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="">Confirmar Email</label>
                <input type="email" onChange={(e)=> setConfirmarEmail(e.target.value)}/>
            </div>

            {error && <p style={{color: "red"}}>{error}</p>}
            <button type="submit">Comprar</button>
            {
                orderId && (
                    <p>
                        GRACIAS POR TU COMPRA -- EL ID ES : {orderId}
                    </p>
                )
            }
            </form>
        </div>
    );
};

export default Checkout;