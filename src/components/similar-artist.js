import React from "react";
import ArtistCard from "./artist-card.js";
import "./similar-artist.css";

class SimilarArtist extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row centrar ">
          <div className="col-md-12">
            <h4 className="margin50">Similar Artist</h4>
            <hr />
          </div>
        </div>

        <div className="row">
          {this.props.data.slice(0, 4).map((item, i) => {
            return (
              <ArtistCard
                img={item.image[3]["#text"]}
                titulo={item.name}
                key={1}
              />
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default SimilarArtist;
