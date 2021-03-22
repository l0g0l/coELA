import React, { Component,  useEffect } from 'react'


export class Botoncuadradogr extends Component {
    constructor(props) {
        super(props);

        this.state = {
            grey: true
        }
    }

    changeColor(btn_id) {
        this.setState({ grey: !this.state.grey })
        var boton_states = this.props.state;
        if (btn_id in boton_states) {
            boton_states[btn_id].clicked = !boton_states[btn_id].clicked
        } else {
            boton_states[btn_id] = {clicked: this.state.grey}
        }

        for (const btn in boton_states) {
            // console.log(`LOL ${btn}`)
            if (btn != btn_id) {
                boton_states[btn].clicked = false
            }
        }
        // console.log(boton_states)
        
        //boton_states.push({id: btn_id, clicked: true})
        this.props.set_state(boton_states);
        // console.log(this.props.state);
        // console.log(this.state);

    }

    componentDidMount() {
        // console.log(`COMPONENTDIDMOUNT ${this.props.btn_id}`)
        if (this.props.state[this.props.btn_id] && this.props.state[this.props.btn_id].clicked != !this.state.grey){
            this.setState({ grey: !this.props.state[this.props.btn_id].clicked})
        }
    }

    componentDidUpdate(prevProps) {
        // console.log(`COMPONENTDIDUPDATE ${this.props.btn_id}`)
        if (this.props.state[this.props.btn_id] && this.props.state[this.props.btn_id].clicked != !this.state.grey){
            this.setState({ grey: !this.props.state[this.props.btn_id].clicked})
        }   
    }


    render() {

        const cuadradogr_btn_class = this.state.grey ? "greyButton" : "whiteButton";
        return (
            <button id={this.props.btn_id || null} onClick={this.changeColor.bind(this,this.props.btn_id || null)} className={`cuadradogr ${cuadradogr_btn_class}`}>
                <div className={`cuadradogr ${cuadradogr_btn_class}`} >
                    <img className="cuadradogr-img" src={this.props.imagen} alt="icono flor" />
                    {this.props.valor}

                </div>
            </button>
        )
    }
}

export default Botoncuadradogr
