import { ComponentType, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { fetchToken } from '../thunks/authThunk';
import { Dashboard } from './Dashboard';
import { SignIn } from './SignIn';
import { Users } from './Users';

export const App: ComponentType = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchToken({ navigate }));
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};
