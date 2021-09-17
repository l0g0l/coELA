import React, { Component } from 'react'



export class Botoncuadradopeq extends Component {
    constructor(props) {
        super(props);

        this.state = {
            grey: true
        }
    }

    changeColor(btn_id) {
        this.setState({ grey: !this.state.grey }) // cambio el state a false
        var boton_states = this.props.state; // state de percent lo guardo en variable
        //sie el id del btn está en el boton-state, entonces cambia el clickado por lo contrario
        if (btn_id in boton_states) {
            boton_states[btn_id].clicked = !boton_states[btn_id].clicked
        } else {
            boton_states[btn_id] = {clicked: this.state.grey}
        }// sino, es la primera vez que se carga, por tanto tiene que ser grey

        // hago un for in para recorrer cada botón y si btn es distintio del id. A todos los botones, menos el que he pulsado, le pones el state a false, el state principal es true, por tanto con este for lo que hago es poner en el state contrario al botón que no esta clickado
        for (const btn in boton_states) {
            // console.log(`LOL ${btn}`)
            // eslint-disable-next-line
            if (btn != btn_id) {
                boton_states[btn].clicked = false
            }
        }
        console.log(boton_states)
        
        //boton_states.push({id: btn_id, clicked: true})
        this.props.set_state(boton_states);
        console.log(this.props.state);
        console.log(this.state);

    }
// si en el state está creado el botón, es decir, ya ha sido clickado Y el botón clickado(se puede desclickar) es distinto de lo contrario al state de grey , es decir el clickado que es true, es distinto, a lo contrario a grey que es true
    componentDidMount() {
        // eslint-disable-next-line
        console.log(`${this.state.grey}, ${this.props.state[this.props.btn_id] ? this.props.state[this.props.btn_id].clicked : 'culo' }`);
        
        if (this.props.state[this.props.btn_id] && this.props.state[this.props.btn_id].clicked != !this.state.grey){
            this.setState({ grey: !this.props.state[this.props.btn_id].clicked})
        }
    }
// salen 4 botones en los console porque en update es el que re-renderiza el boton con su nuevo state
    componentDidUpdate(prevProps) {
        // console.log(`COMPONENTDIDUPDATE ${this.props.btn_id}`)
        // eslint-disable-next-line
        console.log(`${this.state.grey}, ${this.props.btn_id},  ${this.props.state[this.props.btn_id] ? this.props.state[this.props.btn_id].clicked : 'NO SE HA CLICKADO NUNCA' }`);
        if (this.props.state[this.props.btn_id] && this.props.state[this.props.btn_id].clicked != !this.state.grey){
            this.setState({ grey: !this.props.state[this.props.btn_id].clicked})
        }    
    }
    render() {
        const cuadradopeq_btn_class = this.state.grey ? "greyButton" : "whiteButton";
        return (
            <div>
                <button id={this.props.btn_id || null} onClick={this.changeColor.bind(this,this.props.btn_id || null)} className={`cuadradopeq ${cuadradopeq_btn_class}`}>
                    <div >
                        <p className="cuadradopeq-txt" >{this.props.valor}</p>
                    </div>
                </button>
            </div>
        )
        }
    }
/* function Botoncuadradopeq ({ pulsar, imagen, valor }) {
    const [color, setColor] = useState('greyButton')

    const changecolor = () => {
        setColor(color === 'greyButton' ? 'whiteButton' : 'greyButton')
        console.log(color);

    }

    return <div>
       <button onClick={changecolor} className={`cuadradopeq ${color}`}>
            <div >
                <p className="cuadradopeq-txt" >{valor}</p>
            </div>
        </button>
    </div>
} */

export default Botoncuadradopeq