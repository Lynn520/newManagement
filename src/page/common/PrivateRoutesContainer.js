import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { checkAuth } from '../../redux/modules/auth';

class PrivateRoutes extends Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    checkAuth: PropTypes.func.isRequired,
  };

  componentWillMount() {
    if (!this.props.isAuthenticated) {
      this.props.checkAuth();
    }
  }

  render() {
    const { path, component, ...rest } = this.props;
    console.log("PrivateRoutes props:", this.props);
    return this.props.isAuthenticated && <Route path={path} component={component} {...rest} />;
  }
}

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
});

const PrivateRoutesContainer = connect(mapStateToProps, { checkAuth })(PrivateRoutes);

export default PrivateRoutesContainer;
