import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'mobx-react';
import CampStore from './src/mobx/CampStore';
import RootNavigator from './src/navigation/Index';


function App(): JSX.Element {
  return (
    <Provider campStore={CampStore}>
    <RootNavigator />
    </Provider>
  );
}

export default App;
