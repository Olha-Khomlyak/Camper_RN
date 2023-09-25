import React from 'react';
import RootNavigator from './src/navigation';
import { rootStore, StoreProvider } from "./src/store";


function App(): JSX.Element {
  return (
    <RootNavigator />
  );
}

export default App;
