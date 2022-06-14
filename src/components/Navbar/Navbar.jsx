import "./Navbar.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar sticky-top">
        <div class="container-nav">
          <a class="navbar-brand" href="#main">
            David Ubeda
          </a>
          <a class="navbar-brand" href="#biografia">
            Biografia
          </a>
          <a class="navbar-brand" href="#portfolio">
            Portfolio
          </a>
          <a class="navbar-brand" href="#contact">
            Contact
          </a>
          {/* <Link to="/contact">Contact</Link> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
