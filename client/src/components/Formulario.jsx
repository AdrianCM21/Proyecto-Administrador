import React from 'react'
import {Formik,Form,Field} from 'formik'


import { Link} from 'react-router-dom';

const Formulario = ({valorInicial,envio,titulos}) => {


  return (
    <>
        <Formik
        enableReinitialize={true}
        initialValues={valorInicial}
        onSubmit={envio}
        >
        {({ isValid, dirty })=>(
             <Form className='container-form mt-5'>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{borderRadius: '15px'}}>
                            <div className="card-body p-5">
                            <h2 className="text-uppercase text-center mb-5">{titulos.titulo}</h2>
                                {titulos.nombre && <div className="form-outline mb-4">
                                <Field name="nombre" className="form-control form-control-lg" id="form3Example1cg" placeholder="Nombre" />
                                <label className="form-label" htmlFor="form3Example1cg">Ingrese Nombre</label>
                                </div>}

                                <div className="form-outline mb-4">
                                <Field name="email" type='email' className="form-control form-control-lg" id="form4Example1cg" placeholder="Ingrese correo" />
                                <label className="form-label" htmlFor="form4Example1cg">Ingrese Correo</label>
                                </div>

                                <div className="form-outline mb-4">
                                <Field name="password" id="form3Example3cg" className="form-control form-control-lg"  placeholder="Contraseña" type='password'/>
                                <label className="form-label" htmlFor="form3Example3cg">Contraseña</label>
                                </div>
                                
                                
                                { titulos.confirPassword && <div className="form-outline mb-4">
                                <Field name="confirmPassword" id="form3Example4cg" type='password' className="form-control form-control-lg"  placeholder="Repetir contraseña" />
                                <label className="form-label" htmlFor="form3Example4cg">Repetir contraseña</label>
                                </div>}

                                { titulos.confirPassword && <div className="form-check d-flex justify-content-center mb-5">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                <label className="form-check-label" htmlFor="form2Example3g">
                                    Estoy deacuerdo con tadas las <Link to={'/'} className="text-body"><u>politicas y condiciones</u></Link>
                                </label>
                                </div>}

                                <div className="d-flex justify-content-center">
                                <button className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body text-light" disabled={!(isValid&&dirty)}>{titulos.titulo}</button></div>

                                <p className="text-center text-muted mt-5 mb-0">{titulos.pregunta} <Link to={titulos.url} className="fw-bold text-body"><u> Aquí</u></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </Form>
        )}
        </Formik>  
    </>
  )
}

export default Formulario;
