import { ComponentType } from 'react';
import { authorized } from '../common/authorized';

export const Dashboard: ComponentType = authorized(() => {
  return <h1>Dashboard</h1>;
});
