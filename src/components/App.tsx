import { ComponentType } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { SignIn } from './SignIn';

export const App: ComponentType = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};
