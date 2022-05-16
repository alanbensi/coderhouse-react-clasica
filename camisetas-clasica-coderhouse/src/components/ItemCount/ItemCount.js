import { useState } from "react";


const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setcantidad] = useState(initial); 

    function aumentaProducto () {
        if (cantidad < stock) {
            setcantidad(cantidad + 1);
        } 
    }
    function decreceProducto () {
        if (cantidad > 1) {
            setcantidad(cantidad - 1);
        }
    }
    function agregarAlCarrito() {
        onAdd(cantidad);
    }



    return (
        <div>
            <button onClick={decreceProducto}>-</button>
            <span> {cantidad}</span>
            <button onClick={aumentaProducto}>+</button>
            <button onClick={agregarAlCarrito}> AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount