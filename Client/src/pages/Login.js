import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import '../styles/_login.scss';

const baseurl = 'mongodb://localhost:27017/users';
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
                    cookies.set('id', respuesta.id, { path: "/" })
                    cookies.set('nombre', respuesta.nombre, { path: "/" })
                    cookies.set('apellidos', respuesta.apellidos, { path: "/" })
                    cookies.set('username', respuesta.username, { path: "/" })
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
            <div>
              
                        <div className="input">
                            <br/><br/>
                            {/* <input
                                type="text"
                                className="form-control"
                                name="username"
                                onChange={this.handleChange}
                            /> */}
                            <TextField
                                name="username"
                                onChange={this.handleChange}
                                id="outlined-error-helper-text"
                                size="small"
                                label="Username"
                                variant="outlined"
                                className="input-user" />

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
                            <button className="btn btn-primary" onClick={() => this.iniciarSesion()}>Iniciar Sesión</button>
                        </div>
                    </div>
            
        )
    }
}
export default Login