import React from 'react';
import { View,Text } from 'react-native';

const FlexDirectionBasics = () => {
    return (
    <View style={{flex: 1, flexDirection: 'column' }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{ flex: 1, height: 50, backgroundColor: 'powderblue'}} >
            <Text>Name</Text>
        </View>
        <View style={{flex: 2, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{ flex: 2, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{ flex: 3, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      </View>
    );
};

export default FlexDirectionBasics;