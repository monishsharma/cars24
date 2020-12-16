import React from "react";
import "./Navbar.scss";

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark justify-content-between customPadding">
      <a className="navbar-brand">Cars24</a>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange = {(e) => props.search(e.target.value)}
        />
      </form>
    </nav>
  );
}

export default Navbar;
