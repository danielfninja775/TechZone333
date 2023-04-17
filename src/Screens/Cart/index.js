import { 
  View, 
  Text ,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import React, { useState } from 'react'
import { FontFamily, Colors} from '../../assets/CommonStyle';
import NumericInput from 'react-native-numeric-input'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function Cart() {

  const navigation = useNavigation();
  const [value, setValue] = useState('1')

  return (
    <View style={styles.container}>
      <Text style={styles.Tittle}>Cart</Text>
      <ScrollView style={{marginBottom:60}}>

      <View style={styles.ProductBox}>
         <Image source={require('../../assets/Images/iphone13.png')}
                style={styles.ProductImage}/>
         
          
        <View style={styles.ProductBoxInside}>

          <Text style={styles.ProductName}>Iphone14</Text>
          <Ionicons name="md-trash-outline" size={22} color={'red'} 
           style={styles.TrashIcon}
           />
          <Text style={styles.DescriptionText}> 128GB, Midnight, 6.10", 
          {"\n"}SIM + eSIM, 12Mpx, 5G</Text>
          <Text style={styles.Price}>$ 1,490.00</Text>

         <View style={{marginLeft:15,marginTop:20}}> 
            <NumericInput 
            value={value} 
            onChange={value => setValue({value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={100} 
            totalHeight={30} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='black' 
            leftButtonBackgroundColor='black'
           />
         </View>
       </View>
     </View>

     <View style={styles.ProductBox}>
         <Image source={require('../../assets/Images/sony.jpg')}
                style={styles.ProductImage}/>
    
          
        <View style={styles.ProductBoxInside}>
        <Text style={styles.ProductName}>Sony WH</Text>
          <Ionicons name="md-trash-outline" size={22} color={'red'} 
           style={styles.TrashIcon}
           />
          <Text style={styles.DescriptionText}>WH-1000XM5 {"\n"} 
           (ANC, 30 h, Wired, Wireless)</Text>
          <Text style={styles.Price}>$ 390.00</Text>

         <View style={{marginLeft:15,marginTop:20}}> 
            <NumericInput 
            value={value} 
            onChange={value => this.setState({value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={100} 
            totalHeight={30} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='black' 
            leftButtonBackgroundColor='black'
           />
         </View>
       </View>
     </View>

     <View style={styles.ProductBox}>
         <Image source={require('../../assets/Images/appleultra.jpg')}
                style={styles.ProductImage}/>
         
          
        <View style={styles.ProductBoxInside}>
        <Text style={styles.ProductName}>Apple Ultra</Text>
          <Ionicons name="md-trash-outline" size={22} color={'red'} 
           style={styles.TrashIcon}
           />
          <Text style={styles.DescriptionText}>
             Watch Ultra Alpine {"\n"}
             Loop L  49mm, Titanium, 4G</Text>
          <Text style={styles.Price}>$ 990.00</Text>

         <View style={{marginLeft:15,marginTop:20}}> 
            <NumericInput 
            value={value} 
            onChange={value => this.setState({value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={100} 
            totalHeight={30} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='black' 
            leftButtonBackgroundColor='black'
           />
         </View>
       </View>
     </View>
    

        <View style={styles.CheckOutBox}>
        <TouchableOpacity onPress={ () => navigation.navigate('Payment')}> 
          <Text style={styles.CheckOutText}>
          Check out
          </Text>
          </TouchableOpacity>
        
        </View>

   </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:'#f1f1f1'
  },
  Tittle:{
   textAlign:'center',
   fontSize:30,
   color:'red',
   fontFamily:FontFamily.montserrat,
   marginTop:20,
   marginBottom:10
  },
  ProductBox:{
   width:'95%',
   height:170,
   backgroundColor:'white',
   alignSelf:'center',
   borderRadius:20,
   marginBottom:20,
   marginTop:10,
   flexDirection:'row',
   shadowOffset: {width: -4, height: 4},  
   shadowColor: '#171717',  
   shadowOpacity: 0.4,  
   shadowRadius: 9,  
   shadowColor: 'black',  
   elevation:5,
 },
ProductBoxInside:{

},
ProductImage:{
  width:140,
  height:140,
  borderRadius:10,
  marginTop:15
},
ProductName:{
 fontFamily:FontFamily.poppinsBold,
 fontSize:20,
 color: 'black',
},
TrashIcon:{
 marginLeft:190,
 marginTop:-20
},
DescriptionText:{
 fontSize:12,
 textAlign:'center',
 color:"black",
 fontFamily:FontFamily.poppins,
 marginLeft:-70,
 marginTop:5
},
Price:{
 width:90,
 height:20,
 shadowOffset: {width: -4, height: 4},  
 shadowColor: '#171717',  
 shadowOpacity: 0.4,  
 shadowRadius: 9,  
 shadowColor: 'black',  
 elevation:3,
 borderRadius:5,
 backgroundColor:'white',
 textAlign:'center',
 marginTop:10,
 marginLeft:20,
 color:"black",
 fontFamily:FontFamily.montserrat
},
CheckOutBox:{
 width:100,
 height:35,
 padding:5,
 borderRadius:10,
 backgroundColor:'black',
 marginLeft:250,
 marginBottom:20,
 justifyContent:'center'
},
CheckOutText:{
 color:'white',
 textAlign:'center',
 fontFamily:FontFamily.poppins
}
})