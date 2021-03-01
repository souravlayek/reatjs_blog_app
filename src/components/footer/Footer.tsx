import React from "react";
import "./css/footer.css";
interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="logo">
        <img
          src="https://theminimaldaily.com/wp-content/uploads/2018/11/Logo-Minimal-Daily-9g.png"
          alt="image_logo"
        />
      </div>
      <div className="links">
        <div className="link-item">Affiliate disclaimer</div>
        <div className="link-item">Terms and conditions</div>
        <div className="link-item">privacy policy</div>
      </div>
      <div className="desc">
        This Site Is Owned And Operated By Minimal Daily. Minimal Daily Is A
        Participant In The Amazon Services LLC Associates Program, An Affiliate
        Advertising Program Designed To Provide A Means For Sites To Earn
        Advertising Fees By Advertising And Linking To Amazon.com. Minimal Daily
        Also Participates In Affiliate Programs With Other Sites.
      </div>
      <div className="copyright">
        &copy; 2020 Minimal Daily - All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
