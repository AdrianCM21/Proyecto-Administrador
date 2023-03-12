import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import EliminarMascota from '../../components/EliminarMascota';
const DetalleMascota = () => {
  const {id} = useParams();
  const [detalle, setDetalle] = useState([]);

  useEffect(() => {
    const Obtener = async()=>{
        const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/api/mascota/${id}`);
        setDetalle(respuesta.data);
    }
    Obtener();
  }, [id])



  return (
   <>
      <div className="container">
        <div className="btn-principal">
          <div>
            <h1 className='title-principal'>Pet shelter</h1>
            <p className='fs-4'>Details about: {detalle.nombre}</p>
          </div>
          <div className='btns '>
            <Link className='btn btn-primary h-25 mt-2' to={'/'}>volver</Link>
            <EliminarMascota id={detalle._id} nombre={detalle.nombre}/>

          </div>
        </div>
        <div className="container-conte ">
            <div>
              <p className='m-4 fw-bold'>Pet tipe : </p>
              <p className='m-4 fw-bold'>Pet description:</p>
              <p className='m-4 fw-bold'>Pet skils:</p>
            </div>
            <div>
              <p className='m-4'>{detalle.tipo}</p>
              <p className='m-4'> {detalle.description}</p>
              {
                detalle.skil1===undefined ? <p className='m-4'>Sin skis</p>
                : detalle.skil2===undefined? <p className='m-4'> {detalle.skil1}</p>
                :detalle.skil3===undefined?<><p className='m-4'>{detalle.skil1}</p><p className='m-4'>{detalle.skil2}</p></>
                :<><p className='m-4'>{detalle.skil1}</p><p className='m-4'>{detalle.skil2}</p><p className='m-4'>{detalle.skil3}</p></>
              }
            </div>
           
            
            
        </div>
      </div>
   </>
  )
}

export default DetalleMascota