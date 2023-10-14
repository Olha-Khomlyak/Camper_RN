import React from 'react';
import RootNavigator from './src/navigation';
import { Provider } from 'mobx-react';
import CampStore from './src/mobx/CampStore';


function App(): JSX.Element {
  return (
    <Provider campStore={CampStore}>
    <RootNavigator />
    </Provider>
  );
}

export default App;
