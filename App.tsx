import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import HomeScreen from './src/homes/HomeScreen';
import {colors} from './src/constants/colors';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/routers/Router';

const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          translucent
          barStyle={'light-content'}
          backgroundColor={colors.bgColor}
        />
        {/* <HomeScreen /> */}
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
