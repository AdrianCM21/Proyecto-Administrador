import React, { useState } from 'react'
import Agregar from '../../components/inventario/Agregar'
import Almacen from '../../components/inventario/Almacen'
import Reponer from '../../components/inventario/Reponer'
import './styles/inventario.css'

const Inventario = () => {
  const [option, setOption] = useState(1)
  const control =(id)=>{
    setOption(id)
  }
  return (
   <div>
      <section className='cardContainers'>
        <div onClick={()=>control(1)} className="cardInventario ">
            <button className='titulo '>Almacen</button>
        </div>
        <div onClick={()=>control(2)} className="cardInventario">
            <button className='titulo '>Reponer</button>
        </div>
        <div onClick={()=>control(3)} className="cardInventario ">
            <button className='titulo '>Cargar</button>
        </div>
      </section>
      {
        option===1 ? <Almacen/>: (option===2?<Reponer/>:<Agregar/>)
      }
      
   </div>
  )
}

export default Inventario