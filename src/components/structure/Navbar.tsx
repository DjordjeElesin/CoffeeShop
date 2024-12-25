import { Link, NavLink, useLocation } from "react-router-dom";
import "../../styles/components/structure/Navbar.scss";
import { useEffect, useState } from "react";
import {
  InstagramLogo,
  FacebookLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/menu",
    label: "Menu",
  },
  {
    path: "/news",
    label: "News",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const handleOptionClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className={`navbarContr ${isMenuOpen ? "menuOpened" : ""}`}>
      <div className="navbarHeader">
        <div className="logoContr">
          <Link to="/">
            <img src="/coffee_icon.png" alt="logo" />
          </Link>
        </div>
        <div className="xmark" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="navItemsContr">
        <ul>
          {links.map((item) => (
            <li
              key={item.path}
              className={isActive(item.path) ? "isActiveLink" : ""}
              onClick={handleOptionClick}
            >
              <NavLink to={item.path} data-testid={item.label}>
                <div className="labelContr">
                  <span>{item.label}</span>
                  <span>{item.label}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="infoContr">
          <p>
            Coffee & Restaurant <br />
            123 Latte Street <br />
            Latte City, FC 12345
          </p>
          <div className="socialsContr">
            <Link to="">
              <InstagramLogo size={32} weight="fill" />
            </Link>
            <Link to="">
              <FacebookLogo size={32} weight="fill" />
            </Link>
            <Link to="">
              <TwitterLogo size={32} weight="fill" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
