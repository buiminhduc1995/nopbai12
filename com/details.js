/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Dimensions,Image
} from 'react-native';
let {height, width} = Dimensions.get('window')
export default class App extends Component{
  render() {
    return (
    <View style={styles.container}>
    <View style={{flexDirection:'row',alignSelf:'center',width: width-20,}}>
    <Image style={{width:100,height:100,borderRadius:50,marginRight:20}}
    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRER58UEQtKuhjQHkb2LGUy-N-_5HLgvrO7CrhpANJ2VShKQhyd'}} />
    <View>
    <Text style={{fontSize:30}}>Dan Abramov</Text>
    <Text style={{fontSize:20}}>you owe 50$</Text>
    </View>
    </View>
    <View style={{borderBottomWidth:2}}></View>
    <View style={{alignSelf:'center',width: width-20,}}>
    <Text style={{fontSize:30}}>June 2018</Text>
    <View style={{flexDirection:'row',borderBottomWidth:1,paddingBottom:10,justifyContent:'space-between'}}>
    <View>
    <Text style={{fontSize:20}}>Drink in British Hub</Text>
    <Text style={{fontSize:15}}>Dan paid 20$</Text>
    </View>
    <Text style={{fontSize:30}}>20$</Text>
    </View>
    <View style={{flexDirection:'row',borderBottomWidth:1,paddingBottom:10,justifyContent:'space-between'}}>
    <View>
    <Text style={{fontSize:20}}>Water bottles</Text>
    <Text style={{fontSize:15}}>You paid 2$</Text>
    </View>
    <Text style={{fontSize:30}}>2$</Text>
    </View>
    <View style={{flexDirection:'row',borderBottomWidth:1,paddingBottom:10,justifyContent:'space-between'}}>
    <View>
    <Text style={{fontSize:20}}>Taxi trip</Text>
    <Text style={{fontSize:15}}>Dan paid 60$</Text>
    </View>
    <Text style={{fontSize:30}}>9$</Text>
    </View>
    </View>
    <View style={{alignSelf:'center',width: width-20,}}>
    <Text style={{fontSize:30}}>June 2018</Text>
    <View style={{flexDirection:'row',borderBottomWidth:1,paddingBottom:10,justifyContent:'space-between'}}>
    <View>
    <Text style={{fontSize:20}}>Drink in British Hub</Text>
    <Text style={{fontSize:15}}>Dan paid 20$</Text>
    </View>
    <Text style={{fontSize:30}}>20$</Text>
    </View>
    <View style={{flexDirection:'row',borderBottomWidth:1,paddingBottom:10,justifyContent:'space-between'}}>
    <View>
    <Text style={{fontSize:20}}>Water bottles</Text>
    <Text style={{fontSize:15}}>You paid 2$</Text>
    </View>
    <Text style={{fontSize:30}}>2$</Text>
    </View>
    <View style={{flexDirection:'row',borderBottomWidth:1,paddingBottom:10,justifyContent:'space-between'}}>
    <View>
    <Text style={{fontSize:20}}>Taxi trip</Text>
    <Text style={{fontSize:15}}>Dan paid 60$</Text>
    </View>
    <Text style={{fontSize:30}}>9$</Text>
    </View>
    </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

