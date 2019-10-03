import React from 'react';
import {Picker, View} from 'react-native';
import {Card, Icon} from 'react-native-elements';
import mainStyles from '../../../App.style';
import {GameModeEnum} from './game-mode.enum';

interface Props {
  navigation: any
}

/**
 * Main page
 */
export default class GameSettings extends React.Component<Props> {
  /**
   * State object from react
   */
  public state = {
    playersNb: 1,
    gameMode: GameModeEnum.CLASSIC
  };

  render (): React.ReactElement<React.JSXElementConstructor<any>> {
    return (
      <View style= { mainStyles.container }>
        <View style = { mainStyles.container }>
          <Card title="Players Number">
            <Picker selectedValue={this.state.playersNb}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({playersNb: itemValue})
                    }>
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
              <Picker.Item label="7" value="7" />
              <Picker.Item label="8" value="8" />
            </Picker>
          </Card>
          <Card title="Game Mode">
            <Picker selectedValue={this.state.gameMode}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({gameMode: itemValue})
                    }>
              <Picker.Item label="Classic" value={ GameModeEnum.CLASSIC } />
              <Picker.Item label="Turn By Turn" value={ GameModeEnum.TURN_BY_TURN } />
            </Picker>
          </Card>
        </View>
        <View>
          <Icon
            containerStyle={ mainStyles.floatingButton }
            reverse
            name='chevron-right'
            type='font-awesome'
            onPress={() => this.props.navigation.navigate('PlayersSettings', this.state)} />
        </View>
      </View>
    );
  }
}
