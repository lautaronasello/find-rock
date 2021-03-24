import React from "react";
// import { Container } from "react-bootstrap";
import "./artist-card.css";
import { Link } from "react-router-dom";
class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-md-3">
        <Link to={"/artista?" + this.props.titulo}>
          <div className="item">
            <img src={this.props.img} alt="" className="pic img-fluid" />
            <p className="titulo">{this.props.titulo}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default ArtistCard;
