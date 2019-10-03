import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/tabs/home/home';
import Settings from './src/tabs/settings/settings';
import React from 'react';
import GameSettings from './src/tabs/game-settings/game-settings';
import PlayersSettings from './src/tabs/players-settings/players-settings';
import Game from './src/tabs/game/game';
import {Button} from 'react-native';


export default class App extends React.Component {
 render(){
   return <AppContainer />;
 }
}

/**
 * Main point entry, using navigator to create tabs
 */
const MainNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: () => ({
        title: 'Home',
      })
    },
    PlayersSettings: {
      screen: PlayersSettings,
      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: () => ({
        title: 'Configure Players',
      })
    },
    Game: {
      screen: Game
    },
    GameSettings: {
      screen: GameSettings,
      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: () => ({
        title: 'Configure game',
      })
    },
    Settings: {
      screen: Settings,
      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: () => ({
        title: 'Settings',
      }),
    }
  },
  {
    initialRouteName: 'Home'
});

const AppContainer  = createAppContainer(MainNavigator);

