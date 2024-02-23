import React from 'react';
import Container from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store/Store';
import {SafeAreaView} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
        <Container />
      </SafeAreaView> 
    </Provider>
  );
};

export default App;
