import { useEffect, useState } from "react";
import camisetas from "../../camisetas.json";
import Item from "../Item/Item";


const getCamisetas = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve (camisetas)
    }, 2000)
})

const ItemList = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getCamisetas
        .then(respuesta=> setProductos(respuesta))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))     
    }, [])

    

    return (
        <>
            {loading ?
            (<h2> Cargando... </h2>)
            :
            (
                productos.map (item => 
                <Item id= {item.id} modelo= {item.modelo} imagen = {item.imagen} />
                )
            )
        }
        </>
    )
}

export default ItemList