import React from 'react';
import { Link } from 'react-router-dom';

const CardTransporte = (props) => {
    return (
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.id}</h5>
          <p className="card-text">{props.nome}</p>
          <Link className="btn btn-primary" to={`${props.url}`} >
           
            {props.title}
          </Link>
        </div>
      </div>
    );
}

export default CardTransporte;