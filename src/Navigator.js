import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import {  createAppContainer, createStackNavigator } from 'react-navigation';
import Camera from './containers/Camera';
import Record from './containers/Record';
import Home from './containers/Home';


  export const createRootNavigator = () =>
  createAppContainer(
    createStackNavigator(
      {
        Camera: {
          screen: Camera
        },
        Record: {
          screen: Record
        },
        Home: {
          screen: Home
        }
      },
      {
        initialRouteName:  'Home' ,
        headerMode: 'screen',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#3D4852'
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
       
      }
      }
    )
  );
