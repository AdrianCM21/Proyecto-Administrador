import React from 'react'
import FormularioInventario from './FormularioInvetario';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

const Agregar = () => {
  const {setActivador} = useOutletContext();
  const valorInicial={
    titulo:'',
    precioC:'',
    precioV:'',
    unidades:'',
    description:'',
    tipo:'',
    stockCritico:'',
}
const envio= async (values,actions)=>{
  try {
      console.log(values)
      const user = await axios.post(` http://localhost:8000/api/producto`,values)
      console.log(user.status)
      if (user.status === 200){
        Swal.fire({
            icon: 'success',
            title: 'GENIAL!!!',
            text: `Cuenta creada prefectamente`,
        });
        setActivador(user._id)
        actions.resetForm(valorInicial);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Ops que mal!!!',
          text: `Error: ${user.errors?.response?.data?.message || user.errors.message}`,
      })
      }
        
    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: 'error',
            title: 'Ops que mal!!!',
            text: `Error: ${error?.response?.data?.message || error.message}`,
        })
    }
  }
  return (
    <FormularioInventario valorInicial={valorInicial} envio={envio} />
  )
}

export default Agregar