import React from 'react'
import { useOutletContext } from 'react-router-dom';


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
                        <td>Unidades disponibles</td>
                        <td>Stock critico</td>
                        <td>Precio de venta</td>
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
                                    <td><span className='status'>Correcto</span></td>
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