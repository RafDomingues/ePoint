import React from 'react';
import {ScrollView, View} from 'react-native';
import mainStyles from '../../../App.style';
import {Card, Icon, Input} from 'react-native-elements';
import ColorPalette from 'react-native-color-palette';
import style from './players-settings.style';
import {PlayersThemeColors} from './players-theme-colors';
import PlayerSetting from './player-setting';
import {GameModeEnum} from '../game-settings/game-mode.enum';
import { NavigationActions, StackActions } from 'react-navigation';


interface Props {
  navigation: any
}
/**
 * Main page
 */
export default class PlayersSettings extends React.Component<Props> {
  /**
   * State object from react
   */
  public state = {
    playersNb: this.props.navigation.getParam('playersNb', 1),
    gameMode: this.props.navigation.getParam('gameMode', GameModeEnum.CLASSIC),
    players: []
  };

  /**
   * List of color who can be used on color picker
   */
  private colors: Array<string> = PlayersThemeColors;

  /**
   * Contain all player setting object
   */
  private playersGameSettings: Array<PlayerSetting> = [];

  /**
   * Contain all colors already used
   */
  private colorsUsed: {} = {};

  /**
   * @param Props
   */
  public constructor(Props: Props) {
    super(Props);
    this.initPlayersGameSettings();
    // set state with players
    this.state.players = this.playersGameSettings;
  }


  public render(): React.ReactElement<React.JSXElementConstructor<any>> {
    return (
      <View style= { mainStyles.container }>
        <ScrollView>
        {
          // Loop each times we get a player
          this.playersGameSettings.map((player, i) => {
            return <View style= { mainStyles.container } key={i}>
              <Card
                containerStyle={{
                  borderWidth: 4,
                  borderColor: this.state.players[i].themeColor
                }}
              >
                <View style= {{ marginBottom: 5 }}>
                  <Input
                    labelStyle={{ color: this.state.players[i].themeColor }}
                    label={ `Player ${i + 1} name` }
                    placeholder='Enter your name'
                  />
                </View>
                <View>
                  <Input
                    keyboardType={ 'numeric' }
                    labelStyle={{ color: this.state.players[i].themeColor }}
                    label={ 'Starting score' }
                    placeholder='Enter your starting score'
                  />
                </View>
                <ColorPalette
                  value={ this.state.players[i].themeColor }
                  paletteStyles = { style.colorPicker }
                  onChange={color => this.setThemeColorOnState(player, color) }
                  title=''
                  colors={ this.colors }
                />
              </Card>
            </View>
          })
        }
        </ScrollView>
        <View>
          <Icon
            containerStyle={ mainStyles.floatingButton }
            reverse
            name='chevron-right'
            type='font-awesome'
            onPress={() => this.navigateToGame()} />
        </View>
      </View>
    );
  }

  /**
   * Reset navigation stack and go to game page
   */
  private navigateToGame() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Game' })],
    });

    this.props.navigation.dispatch(resetAction);
  }

  /**
   * Set current player theme color and set the state
   * @param player
   * @param color
   */
  private setThemeColorOnState(player: PlayerSetting, color: string): void {
    player.themeColor = color;
    this.setState({player: this.playersGameSettings});
  }

  /**
   * Init all player game setting, with a unique random color
   */
  private initPlayersGameSettings(): void {
    // loop for each players
    for (let index=0; index < this.state.playersNb; index++) {
      const playerSetting: PlayerSetting = new PlayerSetting(this.retrieveUniqueRandomColor());
      this.playersGameSettings.push(playerSetting);
    }
  }

  /**
   * Retrieve a random color checking if it's already used
   */
  private retrieveUniqueRandomColor(): string {
    const randomNumber: number = Math.floor(Math.random() * this.colors.length);
    const color: string = this.colors[randomNumber];
    if (this.colorsUsed[color] === undefined) {
      this.colorsUsed[color] = color;
      return color;
    } else {
      return this.retrieveUniqueRandomColor();
    }
  }
}
