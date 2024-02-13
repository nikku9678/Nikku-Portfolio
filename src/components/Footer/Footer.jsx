import React from "react";
import "./Footer.css";
import Heart from "react-heart";
function Footer() {
  return (
    <div>
      <div className="footer">
        copyright@Nikku{" "}
        <Heart style={{ width: "20px", marginLeft: "8px" }} isActive={true} />
      </div>
    </div>
  );
}

export default Footer;
