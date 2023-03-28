import axios from 'axios';
import React from 'react'
import { useOutletContext } from 'react-router-dom';
import Swal from 'sweetalert2';


const Reponer = ({id,unidadesA}) => {
  const {setActivador,activador} = useOutletContext();
  const envio = async ()=>{
    try {
      const { value: unidades } = await Swal.fire({
        title: 'Cuantas unidades repuso',
        input: 'number',
        inputLabel: 'unidades',
        inputPlaceholder: 'Ingrese numero de unidades',
        inputAttributes: {
          maxlength: 10,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      })
      
      if (Number(unidades)) {
        const actulizacion =  await axios.put(`${process.env.REACT_APP_API_URL}/api/reponer/${id}`,{'unidades':(Number(unidades)+unidadesA)})
        console.log(actulizacion)
        setActivador(activador?0:1)
  
        Swal.fire(`Correcto: ${unidades}`)
      }
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <button onClick={envio} className='btn btn-primary'>Reponer</button>
  )
}

export default Reponer