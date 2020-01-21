import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

export default function RouterWraper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dasboard" />;
  }

  return <Route {...rest} component={Component} />;
}

RouterWraper.propTypes = {
  isPrivate: PropTypes.bool
};

RouterWraper.defaultProps = {
  isPrivate: false
};
