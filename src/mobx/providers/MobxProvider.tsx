import React, { ReactNode } from 'react';
import { Provider } from 'mobx-react';
import CampStore from '../CampStore';

interface MobxProviderProps {
    children: ReactNode;
  }

const MobxProvider: React.FC<MobxProviderProps> = ({ children }) => {
  return <Provider appStore={CampStore}>{children}</Provider>;
};

export default MobxProvider;
