import React from 'react'
import Formulario from '../../components/Formulario'
import axios from 'axios';
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom';

axios.defaults.withCredentials=true;
const Login = () => {
  const navigate = useNavigate();
  const valorInicial={
    nombre:'',
    email:'',
    password:''
}
const envio= async (values,actions)=>{
  try {
      const user = await axios.post(` http://localhost:8000/api/login`,values)
      console.log(user)
      if (user.status === 200){
        Swal.fire({
            icon: 'success',
            title: 'GENIAL!!!',
            text: `Cuenta creada prefectamente`,
        });

        navigate('/');
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
const titulos = {
  titulo:'Iniciar secion',
  url:'/register',
  nombre:false,
  confirPassword:false,
  pregunta:'Crear una cuenta'
}

  return (
    <Formulario valorInicial={valorInicial} envio={envio} titulos={titulos}/>
  )
}

export default Login