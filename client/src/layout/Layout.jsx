import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { Outlet} from 'react-router-dom'
import {UseFechas,UseVendidos,UseDias} from '../hooks/UseFechas'
import Menu from './Menu'

const Layout = () => {
  const [productos, setProductos] = useState([]);
  const [activador, setActivador] = useState(0);
  const [data, setData] = useState("");
  const [lista, setLista] = useState([])
  const [unidadesVenta,setUnidadesVenta]=useState([]);
  const [datoFecha, setDatoFecha] = useState([]);
  const [vendido, setVendido] = useState([])
  const [dias, setDias] = useState([])

  useEffect(() => {
    const GetData=async()=>{
      try {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/api/producto`);
            setProductos(respuesta.data[0].productos);
            setData("");
            setLista([]);
            setUnidadesVenta([]);
            setDatoFecha( UseFechas(((respuesta.data[0].productos)).map(e=>e.ventas)));
            setDias( UseDias(((respuesta.data[0].productos)).map(e=>e.ventas)));
            setVendido( UseVendidos(((respuesta.data[0].productos))))
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
              <Outlet context={{dias,vendido,datoFecha,unidadesVenta,setUnidadesVenta,lista, setLista,data, setData,productos,setProductos,activador, setActivador}} />
          </div>

      </div>
    </>
  )
}

export default Layout