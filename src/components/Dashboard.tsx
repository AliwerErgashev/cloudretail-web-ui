import { ComponentType } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { authorized } from '../common/authorized';
import { State } from '../common/store';
import { deleteToken } from '../thunks/authThunk';

export const Dashboard: ComponentType = authorized(() => {
  const auth = useSelector((state: State) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <h1>You're {auth.user?.username}</h1>
      <button onClick={() => dispatch(deleteToken({ navigate }))}>Sign out</button>
    </>
  );
});
