
import React from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Text,
  View,
  Platform,
} from 'react-native';
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 80:56;

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      x1:0,
      y1:0,
      x2:0,
      y2:0,
      flag:false,
      distance:0
    }
  }
textInputValidate = (num) =>{
    if(/^-?\d*\.?\d{0,2}$/.test(num))
     this.setState({ flag:false});
     else
     this.setState({flag:true})
}
calculateDistance=()=>{
var a = this.state.x1 - this.state.x2;
var b = this.state.y1 - this.state.y2;
var distance = Math.sqrt( a*a + b*b );
this.setState({distance})
}
clearText=()=>{
  this.myTextInput.setNativeProps({text:''})
}
render(){
  return (
    <View style={styles.viewRoot}>
      <View style={styles.statusBar}>
          <StatusBar translucent={true} backgroundColor='blue' hidden={false}/>
      </View>
      <View style={styles.appBar}/>
      <View style={styles.appHeader}>
        <Text style={styles.textHeader}>
          2D Points Distance Calculator
        </Text>
      </View>
        <View style={styles.viewRows}>
        <Text style={styles.textStyle}>X1</Text>
        <TextInput style={styles.textInputStyle}
        ref={input=>{this.myTextInput=input}}
        placeholder='Enter number value for X1'
        placeholderStyle={styles.placeholderStyle}
        onChangeText={(num)=>{this.setState({x1:num}),this.textInputValidate(num)}}/>
      </View>

    <View style={styles.viewRows}>
      <Text style={styles.textStyle}>Y1</Text>
      <TextInput style={styles.textInputStyle}
      ref={input=>{this.myTextInput=input}}
      placeholder='Enter number value for Y1'
      onChangeText={(num)=>{this.setState({y1:num}),this.textInputValidate(num)}}/>
    </View>

    <View style={styles.viewRows}>
      <Text style={styles.textStyle}>X2</Text>
      <TextInput style={styles.textInputStyle}
      ref={input=>{this.myTextInput=input}}
      placeholder='Enter number value for X2'
      onChangeText={(num)=>{this.setState({x2:num}),this.textInputValidate(num)}}/>
    </View>

    <View style={styles.viewRows}>
      <Text style={styles.textStyle}>Y2</Text>
      <TextInput style={styles.textInputStyle}
      ref={input=>{this.myTextInput=input}}
      placeholder='Enter number value for Y2'
      onChangeText={(num)=>{this.setState({y2:num}), this.textInputValidate(num)}}
      />
    </View>

    <View style={styles.viewRows}>
     <TouchableOpacity style={styles.buttonStyle} >
       <Text style={styles.buttonTextStyle}
       onPress={()=>this.calculateDistance()}
       >Calculate</Text>
     </TouchableOpacity>
     </View>
    {
      this.state.flag ?
      <View style={styles.viewDistance}>
      <Text style={{color:'red',fontWeight:"bold"}}>Only Numbers are allowed</Text>
        {this.clearText()}
      </View>
      :
      <View style={styles.viewDistance}>
      <Text style={[styles.textStyle],{fontSize:20}}>Distance</Text>
      {this.state.distance>0 ? <Text style={{borderBottomColor:'black',fontSize:20}}>{this.state.distance}</Text> : <Text></Text>}
      </View>
    }
    </View>
  );
  }
};

const styles = StyleSheet.create({
  viewRoot :{
    flex:1,
    backgroundColor:'aliceblue',
    flexDirection:'column'
  },
  viewDistance:{
    display:'flex',
    height:50,
    marginTop:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  statusbar:{
    height: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    backgroundColor:'green'
  },
  appBar:{
    backgroundColor:'steelblue',
    height: APPBAR_HEIGHT,
  },
  textHeader:{
    fontSize:30
  },
  placeholderStyle:{
    marginLeft:10
  },
  appHeader:{
    height:80,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#BBE3F9'
  },
  viewRows:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  textInputStyle:{
    height:40,
    width:280,
    margin:10,
    borderColor:'black',
    borderWidth:1,
  },
  textStyle:{
    marginLeft:20,
    textAlign:'center',
    fontWeight:"bold"
  },
  buttonTextStyle:{
    textAlign:'center',
    fontSize:30,
  },
  buttonStyle:{
    marginTop:30,
    height:50,
    width:150,
    backgroundColor:'#BBE3F9',
    borderRadius:5,
    margin:'auto',
    alignItems:'center',
    justifyContent:'center'
  },
});
export default App;
