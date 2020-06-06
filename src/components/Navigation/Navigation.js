import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserCircle,
  faTools,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <div className="navigation">
      <nav className="navigation_nav">
        <input
          type="radio"
          name="slideItem"
          id="slide-item-1"
          className="slide__toggle"
        />
        <label for="slide-item-1" className="slide__label">
          <FontAwesomeIcon icon={faHome} className="slide__icon" />
          <span className="slide__text">Home</span>
        </label>
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

        <div className="clear"></div>

        <div className="slider">
          <div className="slider__bar"></div>
        </div>
      </nav>
    </div>
  );
}
