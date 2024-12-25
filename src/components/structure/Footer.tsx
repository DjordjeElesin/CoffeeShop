//styles
import {
  Copyright,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import "../../styles/components/structure/Footer.scss";
import Map from "./Map";

export default function Footer() {
  return (
    <footer>
      <div className="info-contr">
        <img className="logo" src="/coffee_icon.png" />
        <h2 className="fs-h2 fw-bold">Brewed to perfection</h2>
        <div className="flex flex-col gap-3">
          <h4 className="fs-large fw-bold">Opening hours:</h4>
          <span className="fs-small fw-semibold">
            Mon - Thu: 11:00 AM - 9:00 PM
          </span>
          <span className="fs-small fw-semibold">
            Fri - Sat: 11:00 AM - 10:00 PM
          </span>
          <span className="fs-small fw-semibold">Sun: 12:00 PM - 8:00 PM</span>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="fs-large fw-bold">Phone:</h4>
          <span className="fw-semibold fs-small">(021) 987-6543</span>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="fs-large fw-bold">Location:</h4>
          <div className="flex flex-col">
            <span>Our Coffee Shop</span>
            <span>123 Latte Lane</span>
            <span>Food City, FC 12345</span>
          </div>
        </div>
      </div>
      <div className="socials-contr">
        <InstagramLogo weight="fill" size={30} />
        <FacebookLogo weight="fill" size={30} />
        <TwitterLogo weight="fill" size={30} />
      </div>
      <div className="map-contr">
        <Map
          position={[44.81322041078305, 20.460006000572182]}
          popupText="Our Coffee Shop"
          zoom={15}
        />
      </div>
      <div className="copyright-contr">
        <Copyright /> <span className="fs-small">2024 - Our Coffee Shop</span>
      </div>
    </footer>
  );
}
