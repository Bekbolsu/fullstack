import React from "react";
import "./Phone.css";
import image1 from "../images_add/para.svg";
import image2 from "../images_add/apple.svg";

import image3 from "../images_add/google.svg";
import image4 from "../images_add/footer.svg";
import image from "../images/Deepstash.svg";
import image5 from "../images_add/instagram.svg";
import image6 from "../images_add/facebook.svg";
import image7 from "../images_add/twitter.svg";
import image8 from "../images_add/you.svg";

const Phone = () => {
  return (
    <div className="mobile">
      <div className="mobile_inner">
        <h1 className="phone_h1">Get the free Deepstash app</h1>
        <div className="mobile_blocks">
          <div className="mobile_block1">
            <h2 className="mobile_block1_h2">WHAT IS DEEPSTASH</h2>
            <h4>
              Deepstash is an app for building your personal knowledge library
              and showing what you know.
            </h4>
          </div>
          <div className="mobile_block2">
            <h2 className="mobile_block2_h2">WORKS ON ANY DEVICE</h2>
            <h4>
              Have your ideas with you on any device, anywhere: in meetings,
              debates or while doing research.
            </h4>
          </div>
        </div>
        <img className="para" src={image1} alt="" />
        <div className="social">
          <a
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
            href="https://apps.apple.com/us/app/id1445023295"
          >
            <div className="apple_block">
              <img
                className="apple_img"
                src="https://thumbs.dreamstime.com/b/apple-logo-19106337.jpg"
                alt=""
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>Download on The</span>
                <span>App Store</span>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none", color: "white" }}
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.deepstash"
          >
            <div className="google_block">
              <img className="google_img" src={image3} alt="" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>Download on The</span>
                <span>Google Play</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Phone;
