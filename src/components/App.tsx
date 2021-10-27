import { ComponentType } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { SignIn } from './SignIn';

export const App: ComponentType = () => {
  return (
    <Switch>
      <Route path="/signin" component={SignIn} />
      <Route path="/" component={Dashboard} />
    </Switch>
  );
};
