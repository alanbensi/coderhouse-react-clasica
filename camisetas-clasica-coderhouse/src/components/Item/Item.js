import ItemCount from "../ItemCount/ItemCount";

const Item = ({id, modelo, imagen}) => {
    return (
        <>
            <div 
                key={id}
                className='col-md-10 w-25 '
            >                        
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {modelo}
                    </div>
                    <div className="card-body bgRed">
                        <img src={imagen} alt= {modelo} className='w-50' />                                                          
                    </div>
                    <div className="card-footer">  
                        <ItemCount initial={1} stock={5} onAdd={(cantidad)=>console.log(`${cantidad} unidad/es agregada/s al pedido`)}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item