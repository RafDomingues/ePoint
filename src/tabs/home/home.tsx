import React from 'react';
import {ScrollView, View} from 'react-native';
import {Card, Text, Icon, ListItem, Divider} from 'react-native-elements';
import styles from './home.style';
import mainStyles from '../../../App.style';

interface Props {
  navigation: any
}

/**
 * Main page
 */
export default class Home extends React.Component<Props> {

  render () {
    return (
      <View style= { mainStyles.container }>
        <ScrollView>
          <Card title="Last Game">
            <View>
              <Text style = { styles.gameName}>Chapitre 2</Text>
              <ListItem
                containerStyle = { styles.gameItemInfo }
                title='4'
                leftIcon={{ name: 'people' }}/>
              <ListItem
                containerStyle = { styles.gameItemInfo }
                title='Classic mode'
                leftIcon={{ name: 'gamepad', type: 'font-awesome' }}/>
              <ListItem
                containerStyle = { styles.gameItemInfo }
                title='25 Juillet'
                leftIcon={{ name: 'calendar', type: 'font-awesome' }}/>
            </View>
          </Card>

          <Card title="Game List">
            <View>
              <Text style = { styles.gameName}>Game Name</Text>
              <ListItem
                containerStyle = { styles.gameItemInfo }
                title='test'
                leftIcon={{ name: 'people' }}/>
              <ListItem
                containerStyle = { styles.gameItemInfo }
                title='test'
                leftIcon={{ name: 'gamepad', type: 'font-awesome' }}/>
              <ListItem
                containerStyle = { styles.gameItemInfo }
                title='test'
                leftIcon={{ name: 'calendar', type: 'font-awesome' }}/>
            </View>

            <Divider style={{ margin: 15 }}/>

            <View>
              <Text style = { styles.gameName}>Game Name</Text>
              <ListItem
                containerStyle = { styles.gameItemInfo }
                title='test'
                leftIcon={{ name: 'people' }}/>
              <ListItem
                containerStyle = { styles.gameItemInfo }
                title='test'
                leftIcon={{ name: 'gamepad', type: 'font-awesome' }}/>
              <ListItem
                containerStyle = { styles.gameItemInfo }
                title='test'
                leftIcon={{ name: 'calendar', type: 'font-awesome' }}/>
            </View>
          </Card>
          {/*<Button*/}
          {/*  title="Go to Jane's profile"*/}
          {/*  onPress={() => this.props.navigation.navigate('Profile', {name: 'Jane'})}*/}
          {/*/>*/}
        </ScrollView>
        <View>
          <Icon
            containerStyle={ mainStyles.floatingButton }
            reverse
            name='plus'
            type='font-awesome'
            onPress={() => this.props.navigation.navigate('GameSettings')} />
        </View>
      </View>
    );
  }
}
