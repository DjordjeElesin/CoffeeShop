import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import "../styles/pages/ErrorPage.scss";

export default function ErrorPage() {
  return (
    <div className="error-page-contr">
      <h1 className="fw-bold">We couldn't find your latte</h1>
      <p className="fw-semibold">Take a closer look from our home page</p>
      <div className="button-contr">
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
        <Link to="/menu">
          <Button variant="outline">Explore menu</Button>
        </Link>
      </div>
    </div>
  );
}
