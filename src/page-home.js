import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import Modal from "./components/modal.js";

class PageHome extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
    modal: false,
  };

  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="Form"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.onChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search similar artist
                </button>
                <button className="btng">
                  <a
                    href="https://www.linkedin.com/in/lautaronasello/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lautaro Nasello
                  </a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
