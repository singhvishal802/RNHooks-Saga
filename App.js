// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import RootComponent from './src/Navigation'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



const App = (props) => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <RootComponent />
        {/* GLOBAL COMPONENTS ALSO CAN BE ADDED HERE TO BE USED WITH REDUX  */}
      </SafeAreaView>
  );
}

export default App;