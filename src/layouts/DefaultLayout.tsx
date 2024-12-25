import { Outlet } from "react-router-dom";
import Navbar from "../components/structure/Navbar";
import "../styles/main.scss"
import Footer from "../components/structure/Footer";

export default function DefaultLayout() {
  return (
    <div className="container">
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}
