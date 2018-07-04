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
  View,
  Image,
  Dimensions,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
let {height, width} = Dimensions.get('window')
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>Money split</Text>
        <View style={{flexDirection:'row',marginTop:10}}> 
        <View style={{height: 150,width: 150,borderRadius:75,backgroundColor:'#f93e3e',justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20,color:'#FFFF',}}>YOU OWE</Text><Text style={{fontSize:30,color:'#FFFF',}}>80$</Text></View>
        <View  style={{height: 150,width: 30}}></View>
        <View style={{height: 150,width: 150,borderRadius:75,backgroundColor:'brown',justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20,color:'#FFFF'}}>OWE YOU</Text><Text style={{fontSize:30,color:'#FFFF',}}>230$</Text></View>
        </View>
        <View style={{borderBottomWidth:2,width: width-50,paddingBottom:10,marginTop:40}}>
        <Text style={{fontSize:20}}>People you owe</Text>
        </View>
        <View style={{flexDirection:'row',width: width-50,marginTop:20,justifyContent:'space-between'}}>
        <Image style={{width: 50,height: 50,borderRadius:25}}
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRER58UEQtKuhjQHkb2LGUy-N-_5HLgvrO7CrhpANJ2VShKQhyd'}} />
        <Text style={{marginTop:10,fontSize:20}}>Mark Zuckerberg</Text>
        <Text style={{fontSize:25,marginTop:5}}>42$</Text>
        </View>
        <View style={{flexDirection:'row',width: width-50,marginTop:20,justifyContent:'space-between'}}>
        <Image style={{width: 50,height: 50,borderRadius:25}}
        source={{uri: 'https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg'}} />
        <Text style={{marginTop:10,fontSize:20}}>Elon Musk</Text>
        <Text style={{fontSize:25,marginTop:5}}>38$</Text>
        </View>
        <View style={{borderBottomWidth:2,width: width-50,paddingBottom:10,marginTop:20}}>
        <Text style={{fontSize:20}}>People who owe you</Text>
        </View>
        <View style={{flexDirection:'row',width: width-50,marginTop:20,justifyContent:'space-between'}}>
        <Image style={{width: 50,height: 50,borderRadius:25}}
        source={{uri: 'https://amp.businessinsider.com/images/5af54e8a6c41a62b008b481f-750-562.jpg'}} />
        <Text style={{marginTop:10,fontSize:20}}>Evan Spiegel</Text>
        <Text style={{fontSize:25,marginTop:5}}>230$</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
