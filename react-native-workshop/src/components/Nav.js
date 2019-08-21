import React from 'react';
import { Text} from 'react-native';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { About, Detail, Home, List, Profile } from '../screens';
import Articles from './Articles';

const TabNavigator = createBottomTabNavigator({
    News: Articles, Login: About, Profile
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        labelStyle: { fontSize: 15 },
      },
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        if (routeName === 'News') {
          return <Text>🎡</Text>;
        } else if (routeName === 'Login') {
          return <Text>🎠</Text>;
        } else if (routeName === 'Profile') {
          return <Text>🗿</Text>;
        }
        return null;
      }
    })
  });

export default createAppContainer(TabNavigator);
