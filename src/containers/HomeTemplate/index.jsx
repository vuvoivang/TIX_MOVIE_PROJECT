import React from "react";
import { Route } from "react-router";
import NavbarHome from "../../components/NavbarHome";
import ScrollTopArrow from "../../components/ScrollTopArrow";

function LayoutHome(props) {
  return (
    <>
      <NavbarHome />
      {props.children}
      <ScrollTopArrow />
    </>
  );
}

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <LayoutHome>
          <Component {...propsComponent} />
        </LayoutHome>
      )}
    />
  );
}
