import React from "react";

export default function Media() {
  return (
    <div className="media-banner">
      <div className="media">
        <div className="media-right">
          <img src={"./img/media.png"} alt="" className="media-img" />
          <div className="media-text">
            <h3 className="align">Media</h3>
            <p>
              <a
                href="https://drive.google.com/drive/folders/1a6s5iZdMBySIpOKtSciioqbewA711hnA"
                target="_blank"
              >
                Download
              </a>
              &nbsp; our logos and brand photography for media use.
            </p>
          </div>
        </div>
        <div className="contact-banner">
          <img src={"./img/contact.png"} alt="" className="media-img" />
          <div className="contact-text">
            <h3 className="align">Contact</h3>
            <p>For additional information contact us on</p>
            <p className="mail">
              <a href="mailto:info@enterpriseleague.com?subject=Press Enquiry">
                info@enterpriseleague.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
