import React ,{useEffect,useState}from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Formulario from '../../components/Formulario'

import Swal from 'sweetalert2';


const ActualizarMascota = () => {
    const navigate = useNavigate();
    const valorInicial={
        titulo:'',
        precio:0,
        description:''
    }
    const { id } = useParams()
    const [mascota, setMascota] = useState(valorInicial)

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/api/mascota/${id}`);
            setMascota(respuesta.data);
        }

        getData();

    }, [id])

    const envio= async (values,actions)=>{
        try {
            const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/api/mascota/${id}`,values)
            if (respuesta.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'GENIAL!!!',
                    text: `Se ha actualizado ${respuesta.data.titulo} perfectamente!`,
                });

                navigate('/');
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
    <Formulario valorInicial={mascota} envio={envio}/>
  )
}

export default ActualizarMascota