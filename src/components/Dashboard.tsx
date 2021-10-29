import { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { authorized } from '../common/authorized';
import { State } from '../common/store';

export const Dashboard: ComponentType = authorized(() => {
  const auth = useSelector((state: State) => state.auth);
  return <h1>You're {auth.user?.username}</h1>;
});
