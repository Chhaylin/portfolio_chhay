import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserCircle,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navigation__nav">
        <Link to="/" className="slide__link">
          <input
            type="radio"
            name="slideItem"
            id="slide-item-1"
            className="slide__toggle"
            checked
          />
          <label for="slide-item-1" className="slide__label">
            <FontAwesomeIcon icon={faHome} className="slide__icon" />
            <span className="slide__text">Home</span>
          </label>
        </Link>

        <Link to="/about" className="slide__link">
          <input
            type="radio"
            name="slideItem"
            id="slide-item-2"
            className="slide__toggle"
          />
          <label for="slide-item-2" className="slide__label">
            <FontAwesomeIcon icon={faUserCircle} className="slide__icon" />
            <span className="slide__text">About</span>
          </label>
        </Link>

        <input
          type="radio"
          name="slideItem"
          id="slide-item-3"
          className="slide__toggle"
        />
        <label for="slide-item-3" className="slide__label">
          <FontAwesomeIcon icon={faTools} className="slide__icon" />
          <span className="slide__text">Works</span>
        </label>

        <Link to="/contact" className="slide__link">
          <input
            type="radio"
            name="slideItem"
            id="slide-item-4"
            className="slide__toggle"
          />
          <label for="slide-item-4" className="slide__label">
            <FontAwesomeIcon icon={faEnvelope} className="slide__icon" />
            <span className="slide__text">Contact</span>
          </label>
        </Link>

        <div className="clear"></div>

        <div className="bar"></div>
      </nav>
    </div>
  );
}
