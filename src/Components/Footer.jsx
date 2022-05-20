import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <div className="left">
          <div className="logo"></div>
          <p>
            Discover a <span className="world">world</span>of opportunities
          </p>
          <div className="icons">
            <a
              href="https://www.facebook.com/enterpriseleague/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
            </a>
            <a
              href="https://www.instagram.com/enterpriseleague/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} className="fa-2x"/>
            </a>
            <a href="https://twitter.com/enterpriseleag1/" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="fa-2x"/>
            </a>
            <a
              href="https://www.linkedin.com/company/enterpriseleague/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa-2x"/>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="right-box">
            <span>Company</span>
            <ul>
              <li>
                {" "}
                <a href="">About</a>
              </li>
              <li>
                <a href="">Team</a>
              </li>
              <li>
                <a href="">Write for us</a>
              </li>
              <li>
                <a href="">Advertise</a>
              </li>
              <li>
                <a href="">Newsroom</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="block">
            <div className="right-block">
              <span>Product</span>
              <ul>
                <li>
                  {" "}
                  <a href="">Platform</a>
                </li>
                <li>
                  <a href="">Dealzone</a>
                </li>
                <li>
                  <a href="">Directory</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">All categories</a>
                </li>
                <li>
                  <a href="">Solutions</a>
                </li>
                <li>
                  <a href="">Get listed</a>
                </li>
              </ul>
            </div>
            <div className="right-block">
              <span>Resources</span>
              <ul>
                <li>
                  {" "}
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
          <p>© Copyright <span>2022</span> Enterprise League. All right reserved.</p>
      </div>
    </div>
  );
}
