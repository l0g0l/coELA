import React, { Component } from 'react';
import Cookies from 'universal-cookie'


const cookies = new Cookies();

class Dashboard extends Component {

    cerrarSesion = () => {
        cookies.remove('id', { path: "/" });
        cookies.remove('nombre', { path: "/" });
        cookies.remove('apellidos', { path: "/" });
        cookies.remove('username', { path: "/" });
        window.location.href = "./"
    }

    // componentDidMount() {
    //     if (!cookies.get('username')) {
    //         window.location.href = "./"
    //     }
    // }

    render() {

        console.log('id: ' +cookies.get('id'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('apellido: '+cookies.get('apellido'));
        console.log('username: '+cookies.get('username'));
        return (
            <div className="container">
                <div className="content">
                    <div>
                        Menu principal

                        <button onClick={() => this.cerrarSesion()}> Cerrar sesión</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Dashboard