import React, { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signingInMessage, signInUrl } from './constants';
import { State } from './store';

export const authorized = <P>(Component: ComponentType<P>) => {
  const AuthorizedComponent: ComponentType<P> = (props) => {
    const auth = useSelector((state: State) => state.auth);
    if (auth.isSignedIn) {
      return React.createElement(Component, props);
    }
    if (auth.isInitializing || auth.isSigningIn) {
      return React.createElement('h1', {}, signingInMessage);
    }
    return React.createElement(Navigate, { to: signInUrl });
  };

  return AuthorizedComponent;
};
