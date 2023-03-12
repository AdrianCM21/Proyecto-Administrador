import React from 'react'
import { useOutletContext } from 'react-router-dom';
import BtnCompra from '../../components/BtnCompra';
import './styles/productos.css';



const Cobros = () => {
    const {unidadesVenta,setUnidadesVenta,lista, setLista,data, setData,productos,setActivador} = useOutletContext();


    const control=()=>{//Esta funcion se encarga de inicializar los contadores de venta de cada elemento de la lista
        setUnidadesVenta(old=>[...old,1]);
    }


    const ControlVenta=(position,value, unidades)=>{//Esta funcion se encarga de controlar y aumentar los contadores de venta
        let verificador = unidadesVenta.map((item, index) =>
        index === position ? (value>unidades?item=unidades:item=value) : item
      );
      setUnidadesVenta(verificador);
    }


    const Buscar =()=>{
        const aux = productos.filter(e=>e.id===data)//Creo una copia solo con la informacion de producto asocialdo a la informacion que proporciona el usuario
        if (aux.length) {
            if (lista.filter(e=>e.id===data).length) {
               unidadesVenta[lista.indexOf(aux[0])]++  
            }else{
                setLista((e=>[...e,aux[0]]));
                control();
            }
        }else{
            console.log('nada')
        }
       
        setData('')
    }

  return (
    <div>
        <section className=' d-flex justify-content-around w-100 m-4'>
            <div className="input-group w-50"  >
                <input type="search" className="form-control rounded " value={data} onChange={e=> setData(e.target.value)} placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button onClick={Buscar} className="btn btn-outline-primary" >Procesar</button>
            </div>
        </section>
        <section className="description d-flex w-100 justify-content-center detalles card-new">
        <table>
                <thead >
                    <tr>
                        <td>Nombre del producto</td>
                        <td>Unidades disponibles</td>
                        <td>Cantidad</td>
                        <td>Precio producto</td>
                        <td>Total producto</td>

                    </tr>
                </thead>
                <tbody >
                    {
                        lista.map((lista,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td>{lista.titulo}</td>
                                    <td>{lista.unidades}</td>
                                    <td><input type="number" min={1} max={lista.unidades} value={unidadesVenta[idx]} onChange={e=>ControlVenta(idx,e.target.value,lista.unidades)}/></td>
                                    <td>{lista.precioV} gs</td>
                                    <td>{lista.precioV*unidadesVenta[idx]} Gs</td>
                                </tr>)
                        })
                    } 
                    
                </tbody>
                <tfoot>
                <tr >
                    <td className="list-group-item-primary d-flex justify-content-between">
                        <h5 className="card-title ">Totales:</h5>
                        <h6 className="card-subtitle mb-2  ">{lista.reduce(( acumulador, actual ,idx) => acumulador + (actual.precioV*unidadesVenta[idx]), 0)} Gs</h6>
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><BtnCompra setActivador={setActivador} id={lista.map(e=>e.id)} cantVenta={unidadesVenta.map((e,idx)=>({'unidades':(lista[idx].unidades)-e}))}/></td>
                </tr></tfoot>
            </table>
            
            {/* <div className="card card-new w-75 " >
                {<ul className="list-group list-group-flush">
                    <li className="list-group-item list-group-item-primary d-flex justify-content-between">
                        <h5 className="card-title text-dark">Totales:</h5>
                        <h6 className="card-subtitle mb-2  text-dark">{lista.reduce(( acumulador, actual ,idx) => acumulador + (actual.precioV*unidadesVenta[idx]), 0)} Gs</h6>
                    </li>
                </ul>
                }
            </div> */}
        </section>
        {/*<section className='d-flex justify-content-end '>
            <BtnCompra setActivador={setActivador} id={lista.map(e=>e.id)} cantVenta={unidadesVenta.map((e,idx)=>({'unidades':(lista[idx].unidades)-e}))}/>
        </section> */}
    </div>
  )
}

export default Cobros