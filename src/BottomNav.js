import React from "react";
import { Link } from 'react-router-dom';
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const BottomNav = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon className="color" icon={faHouse} />
      </Link>

      <Link to="/stats">
        <FontAwesomeIcon className="color" icon={faSignal} />
      </Link>

      <Link to="/add">
        <FontAwesomeIcon className="color red" icon={faPlus} />
      </Link>

      <Link to='/clipboard'>
        <FontAwesomeIcon className="color" icon={faClipboard} />
      </Link>

      <Link to='/profile'>
        <FontAwesomeIcon className="color" icon={faUser} />
      </Link>
    </nav>
  );
};
export default BottomNav;
