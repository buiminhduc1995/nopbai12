import React, { Component } from 'react'
import { Text, View,Image,Dimensions} from 'react-native'
let {height, width} = Dimensions.get('window')
export default class componentName extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <View style={{flexDirection:'row',justifyContent: 'space-between',width: width-20,alignSelf:'center'}}>
        <Text>Add bill</Text>
        <Text>SAVE</Text>
        </View>
        <Text style={{borderBottomWidth:1,fontSize:30,width: width-20,alignContent:'center',alignSelf:'center',fontWeight:'bold'}}>Gas for road trip</Text>
        <View style={{flexDirection:'row',width: width-20,alignSelf:'center',marginTop:30,height: 60,borderBottomWidth:0.5}}>
        <Image style={{width: 50,height: 50,borderRadius:25,marginTop:5}}
        source={{uri: 'https://image.flaticon.com/icons/png/512/21/21004.png'}} />
            <Text style={{fontSize:35,marginLeft:20,fontWeight:'bold'}}>43</Text>
        </View>
        <View style={{flexDirection:'row',width: width-20,alignSelf:'center',marginTop:30,height: 60}}>
          <Text style={{fontSize:29,fontWeight:'bold'}}>Paidby</Text>
          <Text style={{fontSize:29,marginLeft:20,fontWeight:'bold',borderBottomWidth:1}}>Chris jackson</Text>
        </View>
        <View style={{flexDirection:'row',width: width-20,alignSelf:'center',marginTop:30,height: 60}}>
          <Text style={{fontSize:29,fontWeight:'bold'}}>for</Text>
          <Text style={{fontSize:29,marginLeft:10,fontWeight:'bold',borderBottomWidth:1}}>you, Jason, Freida</Text>
        </View>
        <View style={{flexDirection:'row',width: width-20,alignSelf:'center',marginTop:30,height: 60,justifyContent: 'space-between'}}>
         <View style={{height: 50,width:200,borderWidth:2,borderRadius:13,flexDirection:'row',justifyContent:'space-between'}}>
         <Text style={{alignSelf:'center',fontSize:25}}>Split equally</Text>
         <Image style={{width: 20,height: 20,marginTop:15}}
        source={{uri: 'https://www.shareicon.net/data/512x512/2015/10/18/657870_arrows_512x512.png'}} />
         </View>
         <Image style={{width: 50,height: 50,borderRadius:25,marginTop:5,}}
        source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_211436.png'}} />
        </View>
      </View>
    )
  }
}