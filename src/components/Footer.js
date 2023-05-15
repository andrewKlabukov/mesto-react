import React from "react";

function Footer({ loggedIn }) { 

  return (
    <footer className={loggedIn ? "footer" : "footer_invisible"}>
      <p className="footer__copyright">
        &copy; 2023 Mesto Russia
      </p>
      <p className="footer__text">
        Andrew Klabukov                
      </p>
    </footer>
  );
}

export default Footer;
