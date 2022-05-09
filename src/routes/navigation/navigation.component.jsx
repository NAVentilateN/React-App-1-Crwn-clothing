import { Fragment } from "react";
import { Outlet, Link } from 'react-router-dom';

import "./navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      {/* use Fragment if there are some details e.g. Outlet that is not required to be render. Therefore we do not need to render the additional div */}
      <div className = "navbar">
        <Link className="logo-container" to="/">
          <div className="logo">
            <CrwnLogo className="logo" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop"> Shop</Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/contact">Contact</Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/sign-in"> Sign in</Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="/cart"> Cart</Link>
        </div>
      </div>
      <Outlet />
      {/* Outlet needs to be  within an element*/}
    </Fragment>
  )
}

export default Navigation
