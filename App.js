// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import RootComponent from './src/Navigation'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/Redux/store'


const App = (props) => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={store} >
        <RootComponent />
        </Provider>
        {/* GLOBAL COMPONENTS ALSO CAN BE ADDED HERE TO BE USED WITH REDUX  */}
      </SafeAreaView>
  );
}

export default App;