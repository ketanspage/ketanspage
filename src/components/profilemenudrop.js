import "./profilemenudrop.css";
import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const ProfileMenuDrop = () => {
  const [isProfileActive, setProfileActive] = useState("false");
  // Toggle the dropdown
  const handleToggle = () => {
    setProfileActive(!isProfileActive);
  };

   // Hide the dropdown when user clicks outside the element
  function useOutsideHandler(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target.parentElement)) {
          setProfileActive(!!isProfileActive);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperProfileRef = useRef(null);
  useOutsideHandler(wrapperProfileRef);

  return (
    <div
      className="profile dropdown"
      onClick={handleToggle}
      ref={wrapperProfileRef}
    >
      <img
        className="profile-pic dropbtn"
        src="https://media.licdn.com/dms/image/D5603AQFuxayeIMrsQQ/profile-displayphoto-shrink_800_800/0/1687245514026?e=1702512000&v=beta&t=ex0nFNzXWtjjPjC1X_ps2vVaIzM0uz6y66peoHTxoUo"
        alt="profile"
      />
      <div className="profile-hightlight-dropdown">
        <p> KetansPage </p>
        <p> Ketan Gandhi </p>
        <p> gandhi.ketan55555@gmail.com </p>
      </div>
      <div
        className={
          isProfileActive
            ? "profile-details-dropdown dropdown-hide"
            : "profile-details-dropdown dropdown-show"
        }
      >
        <div className="first-detail">
          <img
            className=""
            src="https://media.licdn.com/dms/image/D5603AQFuxayeIMrsQQ/profile-displayphoto-shrink_800_800/0/1687245514026?e=1702512000&v=beta&t=ex0nFNzXWtjjPjC1X_ps2vVaIzM0uz6y66peoHTxoUo"
            alt="profile"
          />
          <p className="detail-text"> Ketan Gandhi </p>
          <p className="detail-text"> gandhi.ketan55555@gmail.com </p>
          <Link  className="drop-link" to="/chat"> Chatbot </Link>
        </div>
        <Link className="second-detail" to="/about">
          <FontAwesomeIcon className="fa-user-plus" icon={faUserPlus} />
          <p> More about me </p>
        </Link>
        <div className="third-detail" style={{display:'flex',flexDirection:"column"}}>
          <a href="https://github.com/ketanspage"> GitHub</a>
          <a href="https://www.linkedin.com/in/ketan-gandhi-68840821b/"> LinkedIn</a>
        </div>
      
      </div>
    </div>
  );
};

export default ProfileMenuDrop;
