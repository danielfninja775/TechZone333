import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView ,
  Dimensions,
  TouchableOpacity
  } from 'react-native';
  import React from 'react'
  import { FontFamily, Colors} from '../../assets/CommonStyle';
  import { useNavigation } from '@react-navigation/native';

export default function Categories() {

  const navigation = useNavigation();

   return (

    <View style={styles.container}>
      <ScrollView style={{marginBottom:65,marginTop:-15}}> 
         <Text style={styles.tittle}>Categories</Text>

      <View style={styles.categoryBox}> 
        <TouchableOpacity onPress={ () => navigation.navigate('Desktop')} > 
          <Image source={require('../../assets/Images/flyer11.jpg')} style={styles.flyer1}/>
          <Text style={styles.Names}> Desktops </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.categoryBox}> 
        <TouchableOpacity onPress={ () => navigation.navigate('Laptops')} > 
         <Image source={require('../../assets/Images/flyer12.jpg')} style={styles.flyer1}/>
         <Text style={styles.Names}> Laptops </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryBox}> 
        <TouchableOpacity onPress={ () => navigation.navigate('Headsets')} > 
           <Image source={require('../../assets/Images/flyer13.jpg')} style={styles.flyer1}/>
           <Text style={styles.Names}> HeadPhones </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryBox}> 
        <TouchableOpacity onPress={ () => navigation.navigate('Smartwatch')} > 
          <Image source={require('../../assets/Images/flyer14.jpg')} style={styles.flyer1}/>
          <Text style={styles.Names}> SmartWatchs </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryBox}> 
        <TouchableOpacity onPress={ () => navigation.navigate('Smartphone')} > 
          <Image source={require('../../assets/Images/flyer15.jpg')} style={styles.flyer1}/>
          <Text style={styles.Names}> SmartPhones </Text>
       </TouchableOpacity>
      </View>
     
   
      </ScrollView>
    </View>

  )
}

const styles = StyleSheet.create({
container:{
 flex: 1,
 backgroundColor:'#f1f1f1',
},
tittle:{
 fontSize:45,
 color:'black',
 marginLeft:10,
 padding:20,
 marginTop:20,
 fontFamily: FontFamily.poppins
},
flyer1:{
 justifyContent:'center',
 alignSelf:'center',
 width:'95%',
 height:180,
 borderRadius:10,
 marginBottom:20
},
Names:{
 color:'white',
 marginTop:135,
 marginLeft:30,
 fontSize:30,
 position:'absolute',
 fontFamily:FontFamily.montserrat
},
categoryBox:{

}
})