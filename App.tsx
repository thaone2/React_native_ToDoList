import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {colors} from './src/constants/colors';
import Router from './src/routers/Router';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          // translucent
          barStyle={'light-content'}
          backgroundColor={colors.bgColor}
        />
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
