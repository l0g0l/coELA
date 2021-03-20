import React, { Component } from 'react'


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
