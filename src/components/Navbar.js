import React from "react";
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {

  const count = useSelector((state)=>state.counter.count);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Dummy Bank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <button className="btn btn-primary disabled" >Your Balance: {count}</button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
