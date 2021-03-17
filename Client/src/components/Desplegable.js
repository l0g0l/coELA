import React from "react";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import "../styles/_desplegable.scss";

class Desplegable extends React.Component {
  state = {
    isOpen1: false,

  };

  render() {
    return (
      <div className="app">
        <button
          className={cx("app__toggle", {
            "app__toggle--active": this.state.isOpen1
          })}
          onClick={() => this.toggle(1)}
          
        >{this.state.isOpen1==true? 'Ajustes avanzados':""}
          <span className="app__toggle-text"></span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen1 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
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
            <p className="app__content-txt">Selecciona los días</p>
            <button className="app__content-btn-red">L</button>
            <button className="app__content-btn-red">M</button>
            <button className="app__content-btn-red">X</button>
            <button className="app__content-btn-red">J</button>
            <button className="app__content-btn-red">V</button>
            <button className="app__content-btn-red">S</button>
            <button className="app__content-btn-red">D</button>
            <p className="app__content-txt-2">Selecciona categorías</p>

            <img
              className="image"
              alt="random"
              src="https://source.unsplash.com/user/erondu/500x200" />

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

export default Desplegable;
