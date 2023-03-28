import React from 'react';
// import axios from 'axios';
import UseAxios from '../hooks/useAxiosCompra'
import Swal from 'sweetalert2';
// import {  useNavigate } from 'react-router-dom';

const BtnCompra = ({id,cantVenta,setActivador,activador}) => {
  const envio=(id,cantVenta,setActivador)=>{
    if(UseAxios(id,cantVenta)){
      setActivador(activador?0:1)
    }else{
        console.log('Fraso')
    }
  }
  const confirmarVenta = (id,cantVenta,setActivador) => {
    Swal.fire({
        title: 'TIKED',
        text: `Finalizando prosceso desea imprimir tiked `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Finalizar Compra'
    }).then((result) => {
        if (result.isConfirmed) {
            envio(id,cantVenta,setActivador)
        }
    })
  }

  // const navigate = useNavigate();
    // const eliminar=async()=>{
    //     try {
    //         // const mascota = await axios.delete(`${process.env.REACT_APP_API_URL}/api/mascota/${idMascota}`);
    //         // console.log(mascota)
           
    //           navigate('/');
    //     } catch (error) {
    //         console.log(error);
    //         Swal.fire({
    //             icon: 'error',
    //             title: 'Ops que mal!!!',
    //             text: `Error: ${error?.response?.data?.message || error.message}`
    //         })
    //     }
    // }


  return (
    <button className='btn btn-primary btn-compra mt-2' onClick={()=>confirmarVenta(id,cantVenta,setActivador)}>Finalizar compra</button>
  )
}

export default BtnCompra