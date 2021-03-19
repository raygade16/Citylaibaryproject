import React, { Component,useState,useEffect } from 'react';
import { TextInput, View,Text,Button } from 'react-native';

const TimerApp = () => {
  var interval = 0;
  const [value, onChangeText] = React.useState('Useless Placeholder');
  const [count, setCount] = useState(0);
  const [invervalVal, setIntervalVal] = useState(0);

  useEffect(()=>{
        interval = setInterval(() => { 
          setCount(count=>(count+1));
          
        }, 1000);
          setIntervalVal(interval);
          return(()=>{
            //side Effect
            clearInterval(invervalVal); 
          })
  },[])
  return (
    <View style={{flex:1, flexDirection:'column'}}>
        <View style={{flex:1, alignItems:'center'}}>
            <Text style={{fontSize:24}}>TIMER Example</Text>
        </View>
        <View style={{flex:1, alignItems:'center'}}>
            <Text style={{fontSize:16}}>{count}</Text>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
            <View style={{flex:1}}><Button 
                onPress={()=>{
                    console.log("interval is: "+invervalVal)
                 clearInterval(invervalVal);   
                }}
            title="STOP"></Button></View>
            <View style={{flex:1}}><Button onPress={()=>{
                 setCount(0);   
                }}
                title="RESET"></Button></View>
            <View style={{flex:1}}><Button title="START" onPress={()=>{
                console.log("interval is: "+invervalVal)
                 clearInterval(invervalVal);
                 interval = setInterval(() => { 
                    setCount(count=>(count+1));
                    
                  }, 1000);
                    setIntervalVal(interval); 
                }}></Button></View>
        </View>
        
    </View>
  );
}
export default TimerApp;