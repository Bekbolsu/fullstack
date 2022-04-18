import React from "react";
import image2 from "../images/logo.svg";
import image6 from "../images/man.svg";
import image5 from "../images_add/instagram.svg";
import image4 from "../images_add/facebook.svg";
import image3 from "../images_add/footer.svg";

import image7 from "../images/prem.svg";
import image8 from "../images_add/fav.svg";
import image11 from "../images_add/you.svg";
import image9 from "../images_add/comment.svg";
import image10 from "../images_add/like.svg";
import image12 from "../images_add/twitter.svg";

import { postContext } from "../../context/postContext";
import { Link } from "react-router-dom";
import { favContext } from "../../context/favContext";
const Footer = () => {
  return (
    <div>
      <div className="container" style={{ marginTop: "100px" }}>
        <img className="img_footer " src={image3} alt="" />
        <div className="main_footer">
          <div>
            <a target="_blank" href="https://www.instagram.com/deepstash/">
              <img className="footer_nav" src={image5} alt="" />
            </a>
            <a target="_blank" href="https://www.facebook.com/deepstash/">
              <img className="footer_nav" src={image4} alt="" />
            </a>
            <a target="_blank" href="https://twitter.com/deepstash/">
              <img className="footer_nav" src={image11} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCXh3Zca5WIW0C_tQJrDoa1w"
            >
              <img className="footer_nav" src={image12} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
