import React from 'react';
import {Text} from 'react-native-elements';
import {Button} from 'react-native';
import {NavigationActions, StackActions} from "react-navigation";

interface Props {
  navigation: any
}
/**
 * Main page
 */
export default class Game extends React.Component<Props> {
  /**
   * Configure route to add a button to go home after reseting current stack
   * @param navigation
   */
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Next',
      headerRight: <Button
        title="Next"
        onPress={ () => Game.navigateToHome(navigation)} />
    };
  };

  /**
   * TODO create a utils for that, can be used on other files
   * Reset navigation stack and go to game page
   */
  private static navigateToHome(navigation) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    navigation.dispatch(resetAction);
  }

  public render(): React.ReactElement<React.JSXElementConstructor<any>> {
    return (
      <Text>Test</Text>
    )
  };
}
