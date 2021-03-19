import React from 'react';
import {View,Text, ScrollView,StatusBar,SafeAreaView} from 'react-native';
import Menu from '../SimpleMenu'
export default function HomeScreen({navigation}) {
    return (
      <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{backgroundColor:'white'}}>
        <ScrollView>
        <Menu navigation={navigation}/>
      <View style={{margin:'3%'}}> 
        <Text>Books Screen</Text>
        {/* <Text>System have 3 users records.</Text> */}
      </View>
      </ScrollView>
      </SafeAreaView>
      </>
    );
  }