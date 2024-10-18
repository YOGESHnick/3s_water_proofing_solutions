import { Link } from "react-router-dom";
import Logo from "../assets/3sLogo.webp";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg mnc py-lg-4">
        <div className="container-fluid ">
          <a className="navbar-brand" href="/">
            <img src={Logo} className="logo top-logo" alt="logo"></img>
            3S Water Proofing Solutions
          </a>
          <button
            className="navbar-toggler tgl ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse f" id="navbarNav">
            <ul className="navbar-nav ms-auto px-5 ">
              <li className="nav-item px-4 gimme-margin-top">
                <Link className="Link" to="/">Home</Link>
              </li>
              <li className="nav-item px-4 gimme-margin-top">
                <Link className="Link" to="/services">Services</Link>
              </li>
              <li className="nav-item px-4 gimme-margin-top">
                <Link className="Link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item px-4 gimme-margin-top">
                <Link className="Link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};