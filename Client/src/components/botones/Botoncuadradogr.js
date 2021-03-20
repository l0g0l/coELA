
// import React from 'react';


// function Botoncuadradogr({pulsar,imagen, valor}) {


//     return (
//         <div className="cuadradogr">
//             <img  className="cuadradogr-img"src={imagen} alt="icono flor"/>
//             <button  className="cuadradogr-btn">{valor}</button>

//         </div>

//     )
// }

// export default Botoncuadradogr 


import React, { Component } from 'react'
// import flor1 from '../images/flor1.svg';
// import flor2 from '../images/flor2.svg';
// import flor3 from '../images/flor3.svg';

export class Botoncuadradogr extends Component {
    constructor() {
        super();

        this.state = {
            grey: true
        }
    }
    changeColor() {
        this.setState({ grey: !this.state.grey })
        console.log(this.state);

    }

    render() {
        const cuadradogr_btn_class = this.state.grey ? "greyButton" : "whiteButton";
        return (
            <button onClick={this.changeColor.bind(this)} className={`cuadradogr ${cuadradogr_btn_class}`}>
                <div className={`cuadradogr ${cuadradogr_btn_class}`} >
                    <img className="cuadradogr-img" src={this.props.imagen} alt="icono flor" />
                    {this.props.valor}

                </div>
            </button>
        )
    }
}

export default Botoncuadradogr
