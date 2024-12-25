//style
import "../../styles/components/ui/AboutCard.scss";
//components
import { Link } from "react-router-dom";
import Button from "./Button";

export default function AboutCard() {
  return (
    <div className="about-card-contr">
      <div className="about-image-contr">
        <img
          src="https://images.unsplash.com/photo-1527512666523-bb0e4389d842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="coffee-shop-image"
        />
      </div>
      <div className="about-content-contr">
        <img className="logo" src="/coffee_icon.png" />
        <h2 className="fs-h2 fw-bold">We love coffee</h2>
        <p>
          Our coffee shop is a cozy and welcoming spot in the heart of the city,
          offering a delightful selection of specialty coffees, fresh pastries,
          and wholesome meals.
          <br />
          <br />
          Join us for a moment of relaxation and indulgence
        </p>
        <div className="location-info">
          <h4 className="fs-large fw-bold mb-5">Location:</h4>
          <span>Our Coffee Shop</span>
          <span>123 Latte Lane</span>
          <span>Food City, FC 12345</span>
        </div>
        <Link to="/menu">
          <Button variant="secondary">Explore menu</Button>
        </Link>
      </div>
    </div>
  );
}
