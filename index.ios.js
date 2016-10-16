

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

var facts = require("./facts")

export default class FactTime extends Component {

   getRandomInt(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min)) + min;
   }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#2898D6',alignItems:'center',justifyContent:'center'}}>
            <View style={{flex:3,margin:50,alignItems:'center',justifyContent:'center'}}>
               <Text style={{fontSize:30,fontFamily:'AvenirNext-Bold',color:'#FFFFFF',textAlign:'center'}}> {facts[this.getRandomInt(0,8)]}</Text>
            </View>
            <View style={{flex:1,marginBottom:50}}>
               <TouchableHighlight underlayColor= '#EEEEEE' onPress = {()=>{this.setState({random:Math.random()})}}  style={{height:100,width:200,backgroundColor:'#FFFFFF',opacity:0.8,alignItems:'center',justifyContent:'center'}}>
                     <Text style={{fontSize:20,fontFamily:'AvenirNext-Bold',textAlign:'center'}}>Refresh</Text>
               </TouchableHighlight>
            </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('FactTime', () => FactTime);
