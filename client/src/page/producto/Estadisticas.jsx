import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
// import ProductoMasVendido from '../../components/estadisticas/ProductoMasVendido';
import Grafica from '../../components/estadisticas/Grafica';
import './styles/estadisticas.css';

const Estadisticas = () => {

  const {datoFecha,vendido,dias} = useOutletContext()
  const [option, setOption] = useState(1)
  const control =(id)=>{
    setOption(id)
    
  }
  return (
    <div className='containerEstadistica '>
      <section className='navBar bg-light'>
        <div className="option">
          <ul className='nav flex-column '>
            <li className='nav-item'><button onClick={()=>control(1)} className='btn nav-link'>Ventas por mes</button></li>
            <li className='nav-item'><button onClick={()=>control(2)} className='btn nav-link'>Mas vendidos</button></li>
            <li className='nav-item'><button onClick={()=>control(3)} className='btn nav-link'>Dias de mas actividad</button></li>
          </ul>
        </div>
      </section>
      <section className='w-100 h-100'>
        {
          (option===1?<Grafica titulo={'Ventas por mes'} datos={datoFecha}/>:(option===2?<Grafica titulo={'Productos mas vendidos'} datos={vendido}/>:<Grafica titulo={'Dias de mas actividad'} datos={dias}/>))
        }
        
      </section>
    </div>
  )
}

export default Estadisticas