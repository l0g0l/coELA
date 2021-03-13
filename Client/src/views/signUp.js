
import React from 'react';
import { useForm } from 'react-hook-form';

import '../styles/_signup.scss';


export default function SignUp() {
  const { register, handleSubmit, errors } = useForm();
  const baseurl = 'http://localhost:5000/usuarios'

  const onSubmit = async (data, e) => {
    e.target.reset();

    // conseguir que lance un POST en vez de GET
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    const response = await fetch([baseurl], requestOptions);
    const jsonData = await response.json();

    console.log(jsonData);
  }

  return (
    <div className="form">
      <h3 className="form-txt" >Regístrate</h3>

      <form className="form-div" onSubmit={handleSubmit(onSubmit)}>

          <input
            type="text"
            name="nombre"
            className="form-input"
            autoFocus
            placeholder="Nombre completo"
            ref={register({
              required: {
                value: true,
                message: <p>Por favor introduzca su Nombre completo</p>
              },

            })}
          />
          {errors.nombre && <p className="errorMsg">{errors.nombre.message}</p>}
         
          <input
            type="text"
            name="dni"
            className="form-input"
            placeholder="DNI"
            ref={register({
              required: {
                value: true,
                message: <p>Por favor introduzca su DNI</p>
              },
              pattern: {
                value: /^(\d{8})([A-Z])$/,
                message: <p>Por favor introduzca un DNI válido</p>
              },
            })}
          />
          {errors.dni && <p className="errorMsg">{errors.dni.message}</p>}

          <input
            type="text"
            name="email"
            className="form-input"
            placeholder="Email"
            ref={register({
              required: {
                value: true,
                message: <p>Por favor introduzca un Email</p>
              },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message: <p>Por favor introduzca un Email válido</p>
              },
            })}
          />
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}

          <input
            type="text"
            name="usuario"
            className="form-input"
            autoFocus
            placeholder="Usuario"
            ref={register({
              required: {
                value: true,
                message: <p>Por favor introduzca Usuario</p>
              },

            })}
          />
          {errors.usuario && <p className="errorMsg">{errors.usuario.message}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={register({
              required: {
                value: true,
                message: <p>Por favor introduzca una Password</p>
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                message: <p>Por favor introduzca una Password válida</p>
              },
            })}
          />
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}

       
        
        <p className="form-div-txt-1">¿Ya tienes cuenta?<a href='./login' id="Inicia sesión" className="form-div-txt-2" >Inicia sesión</a></p>

          <button className="form-div-btn" type="submit">Registrarme</button>
      
      </form>
    </div>
  );
}
