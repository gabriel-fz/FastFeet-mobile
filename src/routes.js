import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default (signed = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
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
