import React from 'react';
import RootNavigator from './src/navigation';
import { Provider } from 'mobx-react';
import MobxProvider from './src/mobx/providers/MobxProvider';


function App(): JSX.Element {
  return (
    <MobxProvider>
    <RootNavigator />
    </MobxProvider>
  );
}

export default App;
