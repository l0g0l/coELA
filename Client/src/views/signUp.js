import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import md5 from 'md5';


import '../styles/_signup.scss';


export default function SignUp() {

  // let history = useHistory();
  // const send = () => {
  //   history.push("/login");
  // }

  const { register, handleSubmit, errors } = useForm();
  const baseurl = 'http://localhost:4000/api/'

  const onSubmit = async (data, e) => {
    e.target.reset();

    // conseguir que lance un POST en vez de GET
    data.password= md5(data.password)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    const response = await fetch([baseurl], requestOptions);
    const jsonData = await response.json();

    if(jsonData.msg == "Usuario Creado Correctamente") {
      window.location.href = "./"
    }else {alert(jsonData.msg)}
    
  }

  return (
    <div className="form">
      <h3 className="form-txt" >Regístrate</h3>

      <form className="form-div" onSubmit={handleSubmit(onSubmit)}>

          <input
            type="text"
            name="name"
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
          {errors.name && <p className="errorMsg">{errors.name.message}</p>}
         
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
                value1: /^(\d{8})([A-Z])$/,
                value2:/^[XYZ]\d{7,8}[A-Z]$/,
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
            name="user"
            className="form-input"
            placeholder="Usuario"
            ref={register({
              required: {
                value: true,
                message: <p>Por favor introduzca Usuario</p>
              },

            })}
          />
          {errors.user && <p className="errorMsg">{errors.user.message}</p>}

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

       
        
        <p className="form-div-txt-1">¿Ya tienes cuenta?<a href='./' id="Inicia sesión" className="form-div-txt-2" >Inicia sesión</a></p>
       
          <button className="form-div-btn" type="submit">Registrarme</button>
          
      
      </form>
    </div>
  );
}
