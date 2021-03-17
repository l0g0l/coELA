import React, { Component } from 'react';
import Cookies from 'universal-cookie'


const cookies = new Cookies();

class Logout extends Component {

    cerrarSesion = () => {
        cookies.remove('user');
        window.location.href = "./login"
    }

    componentDidMount() {
        if (!cookies.get('user')) {
            window.location.href = "/login"
        }
    }

    render() {

      
        console.log('user: '+cookies.get('user'));
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