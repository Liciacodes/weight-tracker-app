import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="flex">
      <FontAwesomeIcon style={{fontSize: '120px'}} className="color" icon={faUser} />
      <form>
        <input type="text" placeholder="Please enter your name..."></input>
        <input type="text" placeholder="Please enter your desired goal..."></input>
      </form>
      <button className="weight-button new">Save</button>
    </div>
  );
}

export default Profile
