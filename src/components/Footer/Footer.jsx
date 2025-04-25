import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faYoutube,
  faFacebookF,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart, faCopyright } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <div>
      <div className="flex space-x-4 justify-center items-center p-4">
        <a href="https://instagram.com" aria-label="Instagram">
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-pink-600 text-xl"
          />
        </a>
        <a href="https://twitter.com" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-xl" />
        </a>
        <a href="https://youtube.com" aria-label="YouTube">
          <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-xl" />
        </a>
        <a href="https://facebook.com" aria-label="Facebook">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-blue-600 text-xl"
          />
        </a>
        <a href="https://pinterest.com" aria-label="Pinterest">
          <FontAwesomeIcon
            icon={faPinterestP}
            className="text-red-500 text-xl"
          />
        </a>
      </div>

      <div className="p-4 flex justify-center">
        <span>
          <FontAwesomeIcon icon={faCopyright} className="pl-4 pr-4 text-xl" />
          Copyright 2025 Empawar | Developed with
          <FontAwesomeIcon
            icon={faHeart}
            className="pl-4 pr-4 text-red-500 text-xl"
          />
          by Manohar V
        </span>
      </div>
    </div>
  );
};
