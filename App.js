import React , {useState} from "react";
import {View,StyleSheet, Image, TouchableOpacity, Button, SafeAreaView} from 'react-native';
import imgAWS from './Img/AWS.png';
import imgDS from './Img/DS.png';
import imgIN from './Img/IN.png';
import imgTCC from './Img/TCC.png';
import imgLGM from './Img/lgm.png';
import imgCiclo from './Img/ciclo.png';

var estado = 0;
var aux = 0;
var image = [imgDS,imgIN,imgAWS, imgTCC];
const App = () => {
  const [toggle, setToggle] = useState(false);
  const handleChangeToggle = () =>{setToggle((oldToggle) => { 
    if(estado==4){
      estado=0;
    };
    aux = 0;
  return !oldToggle;})};
  return (
    <SafeAreaView style={ style.container}>
      <View >
          <Image style={style.title} source={imgCiclo} />
          <View style={style.styleButton}>
            <Button 
                title="Return"
                color="red"
                onPress={() => { aux==0? (estado > 1 ? estado-=2: estado=3): null; aux = 1;}}/>
          </View>    
        <TouchableOpacity onPress={handleChangeToggle}>

          <Image style={style.styleCiclo} source={image[estado<4 ? estado++ : estado=0]} />  
        </TouchableOpacity>
      <Image style={style.styleLgm} source={imgLGM} />
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#20232a',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title:{
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 350,
    height: 100,
    marginTop: 10,
  },
  styleCiclo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 400,
    height: 300,
    marginHorizontal: 20,
    marginTop: -80,
  },
  styleLgm: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 110,
    height: 100,
    marginTop: 60,
    marginBottom: 50,
  },
  styleButton:{
    borderColor:'blue',
    borderRadius: 100,
    paddingHorizontal: 180,
    marginTop: 60,
  }
});
