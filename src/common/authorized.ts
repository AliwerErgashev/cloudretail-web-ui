import React, { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { signingInMessage, signInMessage, signInUrl } from './constants';
import { State } from './store';

export const authorized = <P>(Component: ComponentType<P>, confirm = false) => {
  const AuthorizedComponent: ComponentType<P> = (props) => {
    const auth = useSelector((state: State) => state.auth);
    if (auth.isSignedIn) {
      return React.createElement(Component, props);
    }
    if (auth.isSigningIn) {
      return React.createElement('h1', {}, signingInMessage);
    }
    if (confirm) {
      React.createElement(Link, { to: signInUrl }, signInMessage);
    }
    return React.createElement(Redirect, { to: signInUrl });
  };

  return AuthorizedComponent;
};
