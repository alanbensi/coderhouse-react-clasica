import { useEffect, useState } from "react";
import camisetas from "../../camisetas.json";
import ItemCount from "../ItemCount/ItemCount";



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
                <div 
                    key={item.id}
                    className='col-md-10 w-25 '
                >                        
                    <div className="card w-100 mt-5" >
                        <div className="card-header">
                            {item.modelo}
                        </div>
                        <div className="card-body">
                            <img src={item.imagen} alt= {item.modelo} className='w-50' />                                                          
                        </div>
                        <div className="card-footer">  
                            <ItemCount initial={1} stock={5} onAdd={(cantidad)=>console.log(`${cantidad} unidad/es agregada/s al pedido`)}/>
                        </div>
                    </div>
                </div>
                )
            )
        }
        </>
    )
}

export default ItemList