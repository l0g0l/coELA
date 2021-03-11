import React, { Component } from 'react';
import Cookies from 'universal-cookie'


const cookies = new Cookies();

class Logout extends Component {

    cerrarSesion = () => {
        cookies.remove('id', { path: "/login" });
        cookies.remove('nombre', { path: "/login" });
        cookies.remove('apellidos', { path: "/login" });
        cookies.remove('username', { path: "/login" });
        window.location.href = "./login"
    }

    componentDidMount() {
        if (!cookies.get('username')) {
            window.location.href = "/login"
        }
    }

    render() {

        console.log('id: ' +cookies.get('id'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('apellido: '+cookies.get('apellido'));
        console.log('username: '+cookies.get('username'));
        return (
            <div className="container">
                <div className="content">
                     <div>
                    

                        <button onClick={() => this.cerrarSesion()}> Cerrar sesión</button>
                    </div> 
                </div>
            </div>
        )
    }
}
export default Logout