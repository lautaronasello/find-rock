import React from "react";
import "./loading.css";

function Error(props) {
  return (
    <React.Fragment>
      <div className="upp">
        <div className="col-md-12 centrar">
          <p className="mid">Error {props.errorMensaje} </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Error;
