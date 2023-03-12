import React from 'react'
import {Formik,Form,Field} from 'formik'

const FormularioInventario = ({valorInicial,envio}) => {
  return (
    <>
        <Formik
        enableReinitialize={true}
        initialValues={valorInicial}
        onSubmit={envio}
        >
        {({   isValid, dirty })=>(
             <Form className=' col-sm-10 mb-5 mb-sm-2 container-form'>
             <div className="container-principal w-100 form d-flex ">
                <div className="card w-100">
                    <h5 className="card-header">Agregar un producto</h5>
                    <div className="card-body ">
                        <div className='seccion1'>
                            <div>
                                <h5 className="card-title">Titulo del producto</h5>
                                <Field name="titulo" className="form-control "  placeholder="Titulo" />
                            </div>
                            <div>
                                <h5 className="card-title">Precio de compra</h5>
                                <Field name="precioC" type='number'  className="form-control "  placeholder="Gs" />
                            </div>
                            <div>
                                <h5 className="card-title">Precio de venta</h5>
                                <Field name="precioV" type='number' className="form-control "   placeholder="Gs" />
                            </div>
                        </div>
                        <div className='seccion1'>
                            <div>
                                <h5 className="card-title">Tipo</h5>
                                <Field as='select' name='tipo' className="form-control ">
                                    <option value="Ninguno">------------------------</option>
                                    <option value="Comestible">Comestibles</option>
                                    <option value="Departes">Deportes</option>
                                    <option value="Electronico">Electronicos</option>
                                    <option value="Limpieza">Producto de limpieza</option>
                                    <option value="Hogar">Producto para el hogar</option>
                                    <option value="Prendas">Ropas</option>
                                    <option value="Otros">Otros</option>
                                </Field>
                            </div>
                            <div>
                                <h5 className="card-title">Unidades Compradas</h5>
                                <Field name="unidades" type='number' className="form-control "  placeholder="Unidades" />
                            </div>
                            <div>
                                <h5 className="card-title">Stock Critico</h5>
                                <Field name="stockCritico" type='number' className="form-control "   placeholder="Stock Critico" />
                            </div>
                        </div>
                        <div className='seccion1 last'>
                            <div className='w-100'>
                                <h5 className="card-title ">Titulo del producto</h5>
                                <Field name="description"  as="textarea" className="form-control mt-2" placeholder="Detalle"/>
                            </div>
                        </div>
                        <button className="btn btn-primary mt-5" disabled={!(isValid&&dirty)}>Guardar</button>
                    </div>
                </div>                    
             </div>
         </Form>
        )}
        </Formik>  
    </>
  )
}

export default FormularioInventario