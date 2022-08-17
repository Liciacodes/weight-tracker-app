import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Card = ({lastdays, weight}) => {
  return (
    <div className="weight-container">
      <h5 className="last-days">
        
        {lastdays}
      </h5>
      <p className="card-lb">
        <span className="card-figure">
          <FontAwesomeIcon className='arrow-icon' icon={faArrowDown} />
          {weight}
        </span>
        lb
      </p>
    </div>
  );
}

export default Card
