import React from 'react'
import { useForm } from 'react-hook-form'
import { Fragment } from 'react'
// import axios from 'axios'
import TextField from '@material-ui/core/TextField';
import Botonovalado from '../components/botones/Botonovalado';




const SignUp = () => {
    console.log('hola')



    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, event) => {
        console.log(data)
        event.target.reset();

    }

    return (
        <Fragment>
           <div className="">
                <h3 className="form-txt" >Regístrate</h3>
                <form className="form-div" onSubmit={handleSubmit(onSubmit)} >

                    <input
                        label="Nombre completo"
                        id="outlined-size-small"
                        autoComplete="off"
                        variant="outlined"
                        size="small"
                        name="Nombre"
                        className="form-input" 
                        />
                         {/* ref={register({
                        //     required: {
                        //         value: true,
                        //         message: <p>Por favor introduzca Nombre completo</p>
                        //     }
                        // })}  */}
                    <p className="form-div-error">{errors?.Nombre?.message}</p>

                    <TextField
                        label="DNI"
                        id="outlined-size-small"
                        autoComplete="off"
                        variant="outlined"
                        size="small"
                        name="dni"
                        className="form-input"
                        ref={register({
                            required: {
                                value: true,
                                message: <p>Por favor introduzca DNI</p>
                            },

                            pattern: {
                                value: /[^[0-9]{8,9}[A-Za-z]$/,
                                message: <p>Por favor introduzca un DNI válido</p>
                            },
                        })} />

                    <p className="form-div-error">{errors?.dni?.message}</p>

                    <TextField
                        label="Email"
                        id="outlined-size-small"
                        autoComplete="off"
                        variant="outlined"
                        size="small"
                        name="email"
                        className="form-input"
                        ref={register({
                            required: {
                                value: true,
                                message: <p>Por favor introduzca un Email</p>
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                                message: <p>Por favor introduzca un Email válido</p>
                            },
                        })} />


                    <p className="form-div-error">{errors?.email?.message}</p>

                    <TextField
                        label="Usuario"
                        id="outlined-size-small"
                        autoComplete="off"
                        variant="outlined"
                        size="small"
                        name="usuario"
                        className="form-input"
                        ref={register({
                            required: {
                                value: true,
                                message: <p>Por favor introduzca un Usuario</p>
                            },
                        })} />


                    <p className="form-div-error">{errors?.usuario?.message}</p>

                    <TextField
                        label="Password"
                        id="outlined-size-small"
                        autoComplete="off"
                        variant="outlined"
                        size="small"
                        name="password"
                        className="form-input"
                        ref={register({
                            required: {
                                value: true,
                                message: <p>Por favor introduzca una Password</p>
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                                message: <p>Por favor introduzca una Password válida</p>
                            },
                        })} />


                    <p className="form-div-error">{errors?.password?.message}</p> 



                    <p className="form-div-txt-1">¿Ya tienes cuenta?<a href='./login' id="Inicia sesión" className="form-div-txt-2" >Inicia sesión</a></p>



                    {/* <Botonovalado color="btn-ovalado-green" valor="Regístrate" /> */}
                    <button>Enviar</button>
                </form >

            </div >
        </Fragment>
    );
}

export default SignUp;