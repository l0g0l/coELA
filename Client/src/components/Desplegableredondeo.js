import React from "react";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import Botoncuadradoxs from "./botones/Botoncuadradoxs";
import Switch from '@material-ui/core/Switch';
import restaurantes from '../images/restaurantes.svg';
import ropa from '../images/ropa.svg';
import supermercado from '../images/supermercado.svg';
import libro from '../images/libro.svg';
import varios from '../images/varios.svg';



import "../styles/_desplegableredondeo.scss";

class Desplegableredondeo extends React.Component {
  state = {
    isOpen1: false,
    grey: true,
    l: 'greyButton',
    m: 'greyButton',
    x: 'greyButton',
    j: 'greyButton',
    v: 'greyButton',
    s: 'greyButton',
    d: 'greyButton'

  };
  changeColor(id) {
    this.setState({[id]: this.state[id] === 'greyButton'? 'whiteButton':'greyButton'})
    console.log(this.state[id]);

  }




  render() {
    const app__content_red = this.state.grey ? "greyButton" : "whiteButton";
    return (
      <div>
        <div className="app">
          <button
            className={cx("app__toggle", {
              "app__toggle--active": this.state.isOpen1
            })}
            onClick={() => this.toggle(1)}

          >{this.state.isOpen1 === true ? '' : ""}
            <span className="app__toggle-text">Ajustes avanzados</span>
            <div className="rotate90">
              <svg
                className={cx("icon", { "icon--expanded": this.state.isOpen1 })}
                viewBox="6 0 12 24">

                <polygon className="polygon-color" points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
              </svg>
            </div>
          </button>
          <Collapse
            isOpen={this.state.isOpen1}
            className={
              "app__collapse app__collapse--gradient " +
              (this.state.isOpen1 ? "app__collapse--active" : "")
            }>



            <div className="app__content">
              <p className="app__content-txt">Selecciona los días</p>
              <div >
                <button id="l" onClick={() => this.changeColor("l")} className={` ${this.state['l']} app__content-btn-red`}>L</button>
                <button id="m" onClick={() => this.changeColor("m")} className={` ${this.state['m']} app__content-btn-red`}>M</button>
                <button id="x" onClick={() => this.changeColor("x")} className={` ${this.state['x']} app__content-btn-red`}>X</button>
                <button id="j" onClick={() => this.changeColor("j")} className={` ${this.state['j']} app__content-btn-red`}>J</button>
                <button id="v" onClick={() => this.changeColor("v")} className={` ${this.state['v']} app__content-btn-red`}>V</button>
                <button id="s" onClick={() => this.changeColor("s")} className={` ${this.state['s']} app__content-btn-red`}>S</button>
                <button id="d" onClick={() => this.changeColor("d")} className={` ${this.state['d']} app__content-btn-red`}>D</button>

              </div>


            </div>

            <div className="app__content-2">
              <p className="app__content-txt">Selecciona categorías</p>
              <div className="app__content-2-btncuadr">
                <Botoncuadradoxs texto={'Restaurantes'} img={restaurantes} />
                <Botoncuadradoxs texto={'Ropa y calzado'} img={ropa} />
                <Botoncuadradoxs texto={'Supermercado'} img={supermercado} />

             </div>

              <div className="app__content-3">
                <div className="app__content-3-btncuadr">
                  <Botoncuadradoxs texto={'Libros y prensa'} img={libro} />
                  <Botoncuadradoxs texto={'Varios'} img={varios} />

                </div>



                <div className="app__content-4">
                  <p className="app__content-txt"> Máximo de veces al día </p>
                  <div className="app__content-4-sin">
                    <p className="app__content-txt">Sin límites</p>
                    <Switch
                      defaultChecked
                      color="default"
                      inputProps={{ 'aria-label': 'checkbox with default color' }} />
                    <input className="app__content-4-btn" type="text" />
                    <p className="app__content-txt">Máximo</p>

                  </div>
                </div>

              </div>

            </div>
          </Collapse>


        </div>
      </div>
    );
  }

  toggle = index => {
    let collapse = "isOpen" + index;

    this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
  };
}

export default Desplegableredondeo;
