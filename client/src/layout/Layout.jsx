import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { Outlet} from 'react-router-dom'
import Menu from './Menu'

const Layout = () => {
  const [productos, setProductos] = useState([]);
  const [activador, setActivador] = useState([]);
  const [data, setData] = useState("");
  const [lista, setLista] = useState([])
  const [unidadesVenta,setUnidadesVenta]=useState([]);

  useEffect(() => {
    const GetData=async()=>{
      try {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/api/producto`);
            setProductos(respuesta.data[0].productos);
            setData("");
            setLista([]);
            setUnidadesVenta([]);
        } catch (error){
          console.log(error)
      }
    }
    GetData();
  }, [activador])
  return (
    <>
      <div className="container mw-100">
          <Menu productos={productos} setProductos={setProductos}/>
          <div className='container'>
              <Outlet context={{unidadesVenta,setUnidadesVenta,lista, setLista,data, setData,productos,setProductos,activador, setActivador}} />
          </div>

      </div>
    </>
  )
}

export default Layout