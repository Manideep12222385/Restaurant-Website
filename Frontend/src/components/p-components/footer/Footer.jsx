import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

import { FaInstagram ,FaFacebook,FaTwitter} from "react-icons/fa";
import logo from './7697984.png';
import find from './find.png';
const Footer = () => {
  const navigate = useNavigate();
  const rowone = {
    display: "inline-flex",
    justifyContent: " space-evenly",
    width: "100%",
    fontFamily: "National 2 Regular",
    fontSize: "14px",
    marginTop: "5%",
    marginBottom: "4%",
  };
  return (
    <div className={styles.main}>
      <div style={rowone}>
      <img
          style={{ marginTop: "-60px", width:'300px' }}
          src={logo}
          alt="dd"
          
      />

        <div className={styles.catsec}>
          <div>
            <ul className={styles.ultag}>
              <li className={styles.lis}>Food</li>
              <li className={styles.lis}>Menu</li>
              <li className={styles.lis}>Order Lookup</li>
              <li className={styles.lis}>Gift Card</li>
            </ul>
          </div>
          <div>
            <ul className={styles.ultag}>
              <li className={styles.lis}>Support</li>
              <li  className={styles.lis}>Get Help</li>
              <li onClick={()=>navigate("/contactUs")} className={styles.lis}>Contact Us</li>
              <li className={styles.lis}>Feedback</li>
            </ul>
          </div>
          <div>
            <ul className={styles.ultag}>
              <li className={styles.lis}>Legal</li>
              <li className={styles.lis}>Terms and Conditions</li>
              <li className={styles.lis}>Privacy Policy</li>
              <li className={styles.lis}>Disclaimer</li>
              <li className={styles.lis}>Caution Notice</li>
            </ul>
          </div>
          <div>
            <ul className={styles.ultag}>
              <li onClick={()=>navigate("/about")} className={styles.lis}>About Us</li>
              <li className={styles.lis}>Care</li>
              <li className={styles.lis}>Careers</li>
              <li className={styles.lis}>Our Golden Past</li>
            </ul>
          </div>
        </div>
        <div className={styles.findstore}>
          <img
            src={find}
            alt=""
          />
          <a
            className={styles.link}
            target="#"
            href="https://maps.app.goo.gl/UHpkonGBruKNmz8i6"
          >
            Find a Us
          </a>
        </div>
        <div className={styles.socialbtns}>
          <a href="https://www.instagram.com/kanishka_restaurant?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="#fff" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="#fff" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} color="#fff" />
          </a>
        </div>
      </div>
      {/* <div className={styles.footer1}>
        <div>
          <img className={styles.p192img} src="./logo192.png" alt="" />
        </div>
        <div className={styles.uls}>
          <ul className={styles.ultag}>
            <li className={styles.lis}>KFC Food</li>
            <li className={styles.lis}>Menu</li>
            <li className={styles.lis}>Order Lookup</li>
            <li className={styles.lis}>Gift Card</li>
          </ul>
          <ul className={styles.ultag}>
            <li className={styles.lis}>Support</li>
            <li className={styles.lis}>Get Help</li>
            <li className={styles.lis}>Contact Us</li>
            <li className={styles.lis}>KFC Feedback</li>
          </ul>
          <ul className={styles.ultag}>
            <li className={styles.lis}>Legal</li>
            <li className={styles.lis}>Terms and Conditions</li>
            <li className={styles.lis}>Privacy Policy</li>
            <li className={styles.lis}>Disclaimer</li>
            <li className={styles.lis}>Caution Notice</li>
          </ul>
          <ul className={styles.ultag}>
            <li className={styles.lis}>KFC India</li>
            <li className={styles.lis}>About KFC</li>
            <li className={styles.lis}>KFC Care</li>
            <li className={styles.lis}>Careers</li>
            <li className={styles.lis}>Our Golden Past</li>
          </ul>
        </div>
        <div className={styles.fanda}>
          <div className={styles.findtag}>Find a KFC</div>
          <div>
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
              alt=""
            />
          </div>
        </div>
      </div>
 */}
      <div className={styles.footer2}>
        <div className={styles.f2ch}></div>
        <div className={styles.f22ch}>
          Copyright © Kanishka Corporation 2024 All Rights Reserved
        </div>
        <div className={styles.f2ch}></div>
      </div>
    </div>
  );
};

export default Footer;
