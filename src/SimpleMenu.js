import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class SimpleMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
      <Button
        onPress={() => this.props.navigation.navigate('Home')}
        title="Books"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Users')}
        title="Avalabel"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Movies')}
        title="Read"
      />
      <Button
         onPress={() => this.props.navigation.navigate('About')}
        title="Unread"
      />
      <Button
        onPress={() => this.props.navigation.navigate('Login')}
        title="Add"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});