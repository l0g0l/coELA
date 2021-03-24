import React from 'react';
import { useForm } from 'react-hook-form';
import md5 from 'md5';
import wifi from '../images/wifi.svg';
import ojo from '../images/ojo.svg';



import '../styles/_signup.scss';


export default function SignUp() {



  const { register, handleSubmit, errors } = useForm();
  const baseurl = '/api/user/signup'

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

    if(jsonData.msg === "Usuario Creado Correctamente") {
      window.location.href = "./"
    }else {alert(jsonData.msg)}
    
  }

  return (
    <div className="form">
      <img className="encabezadoregis-wifi" src={wifi} alt=""/>
      <h3 className="form-txt" >Regístrate</h3>

      <form className="form-div" onSubmit={handleSubmit(onSubmit)}>

          <input
            type="text"
            name="name"
            className="form-div-btnuser"
            autoFocus
            placeholder="Nombre"
            ref={register({
              required: {
                value: true,
                message: <p className="errorMsg">Por favor introduzca su Nombre</p>
              },

            })}
          />
          {errors.name && <p >{errors.name.message}</p>}
         
          <input
            type="text"
            name="dni"
            className="form-div-btnuser"
            placeholder="DNI"
            ref={register({
              required: {
                value: true,
                message: <p className="errorMsg">Por favor introduzca su DNI</p>
              },
              pattern: {
                value1: /^(\d{8})([A-Z])$/,
                value2:/^[XYZ]\d{7,8}[A-Z]$/,
                message: <p className="errorMsg">Por favor introduzca un DNI válido</p>
              },
            })}
          />
          {errors.dni && <p >{errors.dni.message}</p>}

          <input
            type="text"
            name="email"
            className="form-div-btnuser"
            placeholder="Email"
            ref={register({
              required: {
                value: true,
                message: <p className="errorMsg">Por favor introduzca un Email</p>
              },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                message: <p className="errorMsg">Por favor introduzca un Email válido</p>
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}

          <input
            type="text"
            name="user"
            className="form-div-btnuser"
            placeholder="Usuario"
            ref={register({
              required: {
                value: true,
                message: <p className="errorMsg">Por favor introduzca Usuario</p>
              },

            })}
          />
          {errors.user && <p >{errors.user.message}</p>}
          <div className="ojodentro">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="inputojo"
            ref={register({
              required: {
                value: true,
                message: <p className="errorMsg">Por favor introduzca una Password</p>
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                message: <p className="errorMsg">Por favor introduzca una Password válida</p>
              },
            })}
            
          />
          <img className ="ojo"src={ojo} alt="mostrar contraseña"/>

          {errors.password && 
          (<p >{errors.password.message}</p>)}

</div>
        
        <p className="form-div-txt-1">¿Ya tienes cuenta?<a href='./' id="Inicia sesión" className="form-div-txt-2" >Inicia sesión</a></p>
       
          <button className="form-div-btn" type="submit">Registrarme</button>
          
      
      </form>
    </div>
  );
}
