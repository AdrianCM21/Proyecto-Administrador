import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import  axios  from 'axios';

const PantallaPrincipal = () => {
    const [mascota, setMascota] = useState([]);

    useEffect(() => {
       
        const Obtener= async ()=>{
            try {
                console.log(process.env.REACT_APP_API_URL)
                const respuesta = await axios.get(`http://localhost:8000/api/mascota`);
                setMascota(respuesta.data.prod);
            } catch (error) {
                console.log(error)
            }

        }
        
        Obtener();
      }, [])



      
  return (
    <div className="container-principal">
        <div className="btn-principal">
            <div>
                <h1 className='title-principal'>pet shelter</h1>
                <p>These pets are loking for a good fond home</p>
            </div>
            <Link className='btn btn-primary h-25' to={'/agregar'}>Create your own Poll</Link>
        </div>
        <div className="contenido">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mascota.map((mascota,idx)=>{
                            return(<tr key={idx}>
                                <td>{mascota.nombre}</td>
                                <td>{mascota.tipo}</td>
                                <td><Link to={`/detalles/${mascota._id}`}>DETALLES</Link> | <Link to={`/actulizar/${mascota._id}`}>EDIT</Link></td>
                            </tr>)
                        })
                    }    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PantallaPrincipal