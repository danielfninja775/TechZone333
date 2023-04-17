import { View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView 
} from 'react-native'
import React,{useState} from 'react'

import { useNavigation } from '@react-navigation/native';
import { FontFamily, Colors} from '../../assets/CommonStyle';

export default function Payment() {

    const navigation = useNavigation();
    const [username, setUsername] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipCode] = useState('')

  return (

    <View style={styles.container}>
    
     <ScrollView> 

        <View style={styles.HeaderBox}>
           <Text style={styles.HeaderText}>Confirm Your Order</Text>
        </View>
       
        <View>    
             <Image source={require('../../assets/Images/creditcard.png')}
             style={{width:200,height:200,alignSelf:'center'}}/> 
        </View>

        <View style={{flexDirection:'row',alignSelf:'center'}}>
             <Image source={require('../../assets/Images/mastercard.png')}
                style={{width:70,height:70,alignSelf:'center'}}/> 
            <Image source={require('../../assets/Images/vida.png')}
               style={{width:60,height:60,alignSelf:'center',marginLeft:-5}}/> 
            <Image source={require('../../assets/Images/american.png')}
               style={{width:60,height:60,alignSelf:'center'}}/> 
             <Image source={require('../../assets/Images/discover.png')}
                style={{width:60,height:60,alignSelf:'center'}}/> 
        </View>
          
<View style={styles.InputBox}>
      <View style={{flexDirection:'row',alignSelf:'center'}}>

           <TextInput
             style={styles.inputUserName}
             placeholder="Card Holder Name"
             placeholderTextColor="#011c43"
             value={username}
             onChangeText={setUsername}
           />
        
        </View>

  <View style={{flexDirection:'row',alignSelf:'center'}}>
     <TextInput
      style={styles.inputPassword}
      placeholder="Card Number"
      returnKeyType="next"
      placeholderTextColor="#011c43"
      value={street}
      onChangeText={setStreet}  
      keyboardType = 'numeric'
          />

   </View>

  <View style={styles.CityZipView}>

        <TextInput
      style={styles.inputCity}
      placeholder="Expiration Date"
      returnKeyType="next"
      placeholderTextColor="#011c43"
      value={city}
      onChangeText={setCity}  
      keyboardType = 'numeric'
          />
           <TextInput
      style={styles.inputZip}
      placeholder="CCV"
      returnKeyType="next"
      placeholderTextColor="#011c43"
      value={zipcode}
      onChangeText={setZipCode}  
      keyboardType = 'numeric'
          />
  </View>
 
       <TouchableOpacity onPress={ () => navigation.navigate('HomeTab')}> 
          <Text style={styles.ConfirmText}> Confirm Purchase</Text>
       </TouchableOpacity>
</View>

     <Text style={styles.Thanks}> Thank You For Shopping With Us !</Text>

        <TouchableOpacity 
           activeOpacity={0.9}
           onPress={()=> navigation.navigate('HomeTab')} >
           <Text style={styles.BackHome}>Back to Home Page</Text>
        </TouchableOpacity>
                 
                 
    <View style={styles.logo}>
       <Image
        source={require('../../assets/Images/1.png')}
        style={{width:200, height:200, alignSelf:'center',marginBottom:30}}
       /> 
    </View>
    
           </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({ 
container:{
 flex:1,
 backgroundColor: '#f8f9fa',
},
HeaderBox:{
 marginTop:70
  },
InputBox:{
 width:'88%',
 height:300,
 paddingTop:40,
 shadowOffset: {width: -4, height: 4},  
 shadowColor: '#171717',  
 shadowOpacity: 0.9,  
 shadowRadius: 9,  
 backgroundColor: 'white',
 borderRadius: 20,  
 shadowColor: '#52006A',  
 elevation: 10,   
 alignSelf:'center',
},
HeaderText:{
 fontSize:26,
 textAlign:'center',
 paddingTop:20,
 fontWeight:'bold',
 color:'#011c43'
    },
DrawerIcon:{
 alignSelf:'flex-end', 
 paddingRight:20,
 padding:20,
 marginTop:1,
  },
inputUserName:{
 marginTop:20,
 borderWidth:1,
 borderColor:'#011c43',
 borderRadius:10,
 width:300,
 alignSelf:'center',
 textAlign:'center',
 color:'white'
 },
inputPassword:{
 marginTop:10,
 borderWidth:1,
 borderColor:'#011c43',
 borderRadius:10,
 width:300,
 alignSelf:'center',
 textAlign:'center',
 color:'white'
},
inputCity:{
 marginTop:10,
 borderWidth:1,
 borderColor:'#011c43',
 borderRadius:10,
 width:200,
 alignSelf:'center',
 textAlign:'center',
 color:'white',
},
inputZip:{
 marginTop:10,
 borderWidth:1,
 borderColor:'#011c43',
 borderRadius:10,
 width:100,
 alignSelf:'center',
 textAlign:'center',
 color:'white',
 marginLeft:5
 },
image:{
 height:'100%',
 width:'100%'
},
CityZipView:{
 flexDirection:'row',
 alignSelf:'center'
},
ConfirmText:{
 fontSize:20,
 textAlign:'center',
 fontWeight:'bold',
 marginTop:50,
 borderColor:'white',
 borderRadius:10,
 width:180,
 alignSelf:'center',
 backgroundColor:'black',
 color:'white',
 padding:5
},
logo:{
 backgroundColor:'white',
 borderRadius:30,
 alignSelf:'center',
 justifyContent:'center',
 shadowOffset: {width: -4, height: 4},  
 shadowColor: '#171717',  
 shadowOpacity: 0.4,  
 shadowRadius: 9,  
 shadowColor: 'black',  
 elevation:5,
 marginTop:30,
 marginBottom:30,
 width:230,
 height:200,
 paddingTop:20
},
Thanks:{
 fontSize:18,
 textAlign:'center',
 paddingTop:40,
 color:'#011c43',
 fontFamily:FontFamily.Poppins
},
BackHome:{
 alignSelf:'center',
 color:'black',
 fontSize:15,
 marginTop:20,
 backgroundColor:'white',
 padding:5,
 borderRadius:14,
 width:170,
 textAlign:'center',
 shadowOffset: {width: -4, height: 4},  
 shadowColor: '#171717',  
 shadowOpacity: 0.4,  
 shadowRadius: 9,  
 shadowColor: 'black',  
 elevation:2,
}

})