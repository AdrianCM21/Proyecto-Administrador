import React from 'react'
import { useOutletContext } from 'react-router-dom';
import Reponer from './Reponer';


const Almacen = () => {
    const {productos} = useOutletContext();
  return (
    <>
    <div className="w-100 detalles">
        <div className="cardHeader">
            <h2>Productos</h2>
        </div>
        <table>
                <thead>
                    <tr>
                        <td>Nombre del producto</td>
                        <td>Unidades (D)</td>
                        <td>Stock critico</td>
                        <td>Precio de venta</td>
                        <td>Agregar Productos</td>
                        <td>Estado</td>

                    </tr>
                </thead>
                <tbody>
                    {
                        productos.map((productos,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{productos.titulo}</td>
                                    <td>{productos.unidades}</td>
                                    <td>{productos.stockCritico}</td>
                                    <td>{productos.precioV} gs</td>
                                    <td><Reponer id={productos.id} unidadesA={productos.unidades}/></td>
                                    <td>{productos.stockCritico < (productos.unidades)?<span className='status C1'>Correcto</span>: (productos.unidades===0?<span className='status C2'>Agotado</span>:<span className='status C3'>Critico</span>)}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
    </div>
    </>
  )
}

export default Almacen