import { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <Fragment>
      <div>
        Shop
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Shop;
