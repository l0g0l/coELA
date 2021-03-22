import React from "react";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";




import "../styles/_desplegableperiodico.scss";

class Desplegableperiodico extends React.Component {
  state = {
    isOpen1: false,

  };

  render() {
    console.log(this.props.periodicidad.value)
    let anual = this.props.periodicidad.value * this.props.cantidad
    let desgrabacion = 0
    if (anual <= 150) {
      desgrabacion = anual * 80 / 100
    } else {
      desgrabacion = (150 * 80 / 100) + ((anual - 150) * 35 / 100)
    }
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
             
              <input type="text" className="app__content-div1-inpP" value={this.props.cantidad} />
              {/* <img className="euroblanco"src={europeq} alt="euro"/> */}
              <input type="text" className="app__content-div1-inp" value={this.props.periodicidad.literal}/>
              <p className="app__content-div1-txtP">durante 1 año</p>
            </div>
          
            <div className="app__content-div2">
              <p className="app__content-div2-txtP">Donarás al año</p>
              <input type="text" className="app__content-div2-inp" value={anual || 0}/>
            </div>

            <div className="app__content-div3">
              <p className="app__content-div3-txtP">Te desgravarás</p>
              <input type="text" className="app__content-div3-inp" value={desgrabacion || 0}/>
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

export default Desplegableperiodico;
