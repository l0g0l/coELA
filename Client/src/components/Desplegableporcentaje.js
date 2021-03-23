import React, { Component } from 'react'
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";




import "../styles/_desplegableporcentaje.scss";

class Desplegableporcentaje extends Component {
  constructor(props) {
    super(props);
    this.handleChangeNomina = this.handleChangeNomina.bind(this);
    this.state = {
      isOpen1: false,
      nomina: 0,
    };

  }

  handleChangeNomina(event) {
    console.log('CAMBIO EN LA NOMINA')
    console.log(event.target.value)
    this.setState({nomina: event.target.value})
    console.log(this.state.nomina)
  }

  render() {
    let anual = this.state.nomina * parseFloat(this.props.multiplicador_value) / 100
    let desgrabacion = 0
    if (anual <= 150) {
      desgrabacion = anual * 80 / 100
    } else {
      desgrabacion = (150 * 80 / 100) + ((anual - 150) * 35 / 100)
    }
    // console.log(anual)
    // console.log(desgrabacion)
    return (
      <div className="app">
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen1
          })}
          onClick={() => this.toggle(1)}

        >{this.state.isOpen1 === true ? '' : ""}
          <span className="app__toggle-text2">Calcula tu desgravación</span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen1 })}
              viewBox="6 0 12 24"
            >
              <polygon className="polygon-color" points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>
        </button>
        <Collapse
          isOpen={this.state.isOpen1}
          className={
            "app__collapse app__collapse--gradient " +
            (this.state.isOpen1 ? "app__collapse--active" : "")
          }
        >
          <div className="app__content">
          
            <div className="app__content-div1">
              <p className="app__content-div1-txt">Tu nómina anual</p>
              <input type="text" className="app__content-div1-inp" placeholder="12000" onChange={this.handleChangeNomina} defaultValue={this.state.nomina || null}/><p className="euroinput">€</p>
              <input type="text" className="app__content-div1-inp" value={this.props.multiplicador_value || null}/><p className="euroinput">%</p>
            </div>
          
            <div className="app__content-div2">
              <p className="app__content-div2-txt">Donarás al año</p>
              <input type="text" className="app__content-div2-inp" value={anual || 0}/><p className="euroinput">€</p>
            </div>

            <div className="app__content-div3">
              <p className="app__content-div3-txt">Te desgravarás</p>
              <input type="text" className="app__content-div3-inp" value={desgrabacion || 0}/><p className="euroinput euro2">€</p>
            </div>

            <div className="app__content-div4">
              <p className="app__content-div4-txt">Te desgravarás el 80% de los primeros 150€, y el 35% de los siguientes</p>
            </div>


          </div>

        
        </Collapse>


      </div>
    );
  }

  toggle = index => {
    let collapse = "isOpen" + index;

    this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
  };
}

export default Desplegableporcentaje;
