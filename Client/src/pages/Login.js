import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import '../styles/_login.scss';

const baseurl = 'http://localhost:5000/usuarios';
const cookies = new Cookies ();



class Login extends Component {
    state = {

        form:{
            username:"",
            password:""
        }
    }
handleChange = async e => {
    await this.setState({
        form:{
            ...this.state.form,
        [e.target.name]:e.target.value
        }

    })

}

iniciarSesion = async () => {
    await axios.get (baseurl, {params:{username: this.state.form.username, password: md5(this.state.form.password)}}) 
    .then(response => {
        console.log(response.data);
        
        return response.data
    })
    .then(response => {
        
        if(response.length>0){
            let respuesta= response[0]
            cookies.set('id', respuesta.id, {path: "/"})
            cookies.set('nombre', respuesta.nombre, {path: "/"})
            cookies.set('apellidos', respuesta.apellidos, {path: "/"})
            cookies.set('username', respuesta.username, {path: "/"})
            // alert("Bienvenido a LuzonApp")
            window.location.href="."
           

        }else{alert ("Usuario o Contraseña incorrecto") }
    })
    .catch (error => {
        console.log(error)
    })
}
// componentDidMount () {
//     if(cookies.get('username')){
//         window.location.href="./dashboard"
//     }
// }

    render() {
        return (
            <div>
               <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
            </div>
        )
    }
}
export default  Login