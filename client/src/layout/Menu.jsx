import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  const cerrar=async()=>{
    try {
      const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/api/user`);
      console.log(respuesta)
    } catch (error) {
      console.log(error);
    }
  }
    return (
        <>
        <nav className="navbar navbar-expand-lg w-100 bg-light flex-column">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <h1 className="navbar-brand" >Administrador</h1>
              <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo03">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <NavLink to={'cobros'} className="nav-link" aria-current="page" >Cobros</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'inventario'} className="nav-link " >Inventario</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to={'/estadisticas'} className="nav-link" >Estadisticas</NavLink>
                    </li>
                </ul>
              </div>
              <div className="d-flex" >
                  <button className="btn btn-outline-primary" onClick={()=>cerrar}><i className="bi bi-box-arrow-in-left"></i> cerrar secion</button>
                </div>
            </div>
          </nav>
        </>
    )
}

export default Menu