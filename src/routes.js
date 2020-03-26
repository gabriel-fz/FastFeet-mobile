import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';

import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import DeliveryDetails from './pages/DeliveryFunctions/DeliveryDetails';
import DeliveryConfirm from './pages/DeliveryFunctions/DeliveryConfirm';
import InformProblem from './pages/DeliveryFunctions/InformProblem';
import ViewProblems from './pages/DeliveryFunctions/ViewProblems';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Deliveries: {
              screen: createStackNavigator(
                {
                  Dashboard,
                  DeliveryDetails,
                  DeliveryConfirm,
                  InformProblem,
                  ViewProblems,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#FFF',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                      fontSize: 16,
                    },
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Entregas',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="reorder" size={20} color={tintColor} />
                ),
              },
            },
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#7D40E7',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#fff',
                height: 70,
                paddingTop: 15,
                paddingBottom: 15,
                borderTopWidth: 0,
                elevation: 5,
              },
            },
          }
        ),
      },
      {
        initialRouteName: signed ? 'App' : 'Sign',
      }
    )
  );
