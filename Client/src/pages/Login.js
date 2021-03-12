import React, { Component } from 'react';
import Botonovalado from '../components/botones/Botonovalado';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import TextField from '@material-ui/core/TextField';
import logo from '../images/logo.svg';
import '../styles/_login.scss';


const baseurl = 'http://localhost:5000/usuarios';
const cookies = new Cookies();



class Login extends Component {
    state = {

        form: {
            username: "",
            password: ""
        }
    }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }

        })

    }

    iniciarSesion = async () => {
        await axios.get(baseurl, { params: { username: this.state.form.username, password: md5(this.state.form.password) } })
            .then(response => {
                console.log(response.data);

                return response.data
            })
            .then(response => {

                if (response.length > 0) {
                    let respuesta = response[0]
                    cookies.set('id', respuesta.id, { path: "/login" })
                    cookies.set('nombre', respuesta.nombre, { path: "/login" })
                    cookies.set('apellidos', respuesta.apellidos, { path: "/login" })
                    cookies.set('username', respuesta.username, { path: "/login" })
                    // alert("Bienvenido a LuzonApp")
                    window.location.href = "./home"


                } else { alert("Usuario o Contraseña incorrecto") }
            })
            .catch(error => {
                console.log(error)
            })
    }
    componentDidMount() {
        if (cookies.get('username')) {
            window.location.href = "/home"
        }
    }

    render() {
        return (

            <div className="input">

                <h3 className="input-txt1">Bienvenido</h3>
                <img className="input-img" src={logo} alt="logo Luzón" />

                <div className="input-div">
                    <TextField
                        label="Usuario"
                        id="outlined-size-small"
                        autoComplete="off"
                        variant="outlined"
                        size="small"
                        name="username"
                        onChange={this.handleChange}
                        className="input-div-btnuser" />

                    <TextField
                        label="Contraseña"
                        id="outlined-size-small"
                        variant="outlined"
                        size="small"
                        name="username"
                        onChange={this.handleChange}
                        className="input-div-btnuser"
                        type="password" />

                    <div className="input-div-txt">
                        <p className="input-div-txt-2">¿Has olvidado la contraseña?</p>
                        <p className="input-div-txt-3">¿No tienes cuenta? <a className="input-div-txt-4" href="./">Registrate</a></p>
                    </div>

                    <Botonovalado valor="Iniciar Sesión" color="btn-ovalado-green" pulsar={this.iniciarSesion} />


                </div>
            </div>


        )
    }
}
export default Login