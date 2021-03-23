import React, { Component } from 'react'


export class Botoncuadradomed extends Component {
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
            // eslint-disable-next-line
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
        // eslint-disable-next-line
        if (this.props.state[this.props.btn_id] && this.props.state[this.props.btn_id].clicked != !this.state.grey){
            this.setState({ grey: !this.props.state[this.props.btn_id].clicked})
        }
    }

    componentDidUpdate(prevProps) {
        // console.log(`COMPONENTDIDUPDATE ${this.props.btn_id}`)
        // eslint-disable-next-line
        if (this.props.state[this.props.btn_id] && this.props.state[this.props.btn_id].clicked != !this.state.grey){
            this.setState({ grey: !this.props.state[this.props.btn_id].clicked})
        }    
    }
    render() {

        const cuadradomed_btn_class = this.state.grey ? "greyButton" : "whiteButton";
        return (
            <div>
                <button id={this.props.btn_id || null} onClick={this.changeColor.bind(this,this.props.btn_id || null)} className={`cuadradomed ${cuadradomed_btn_class}`}>
                    <div >
                        <img className="cuadradomed-img" src={this.props.imagen} alt="" />
                        <p className="cuadradomed-txt" >{this.props.texto}</p>
                    </div>
                </button>
            </div>
        )
    }
}


/* function Botoncuadradomed({ pulsar, imagen, texto }) {
    const [color, setColor] = useState('greyButton')

    const changecolor = () => {
        setColor(color === 'greyButton' ? 'whiteButton' : 'greyButton')
        console.log(color);

    }

    return <div>


        <button onClick={changecolor} className={`cuadradomed ${color}`}>
            <div >
                <img className="cuadradomed-img" src={imagen} alt="" />
                <p className="cuadradomed-txt" >{texto}</p>
            </div>
        </button>
    </div>

} */

export default Botoncuadradomed
