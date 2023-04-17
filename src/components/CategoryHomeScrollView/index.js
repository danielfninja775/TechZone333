import { View, Text,ScrollView,Image,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontFamily, Colors} from '../../assets/CommonStyle';

export default function CategoryHomeScroll() {

  const navigation = useNavigation();

  return (
    <View>
      <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
      
      <TouchableOpacity onPress={ () => navigation.navigate('Smartphone')}> 
        <View style={styles.ProductBox}>
          <Image source={require('../../assets/Images/smartphone.png')}
            style={styles.ProductImage}/> 
          <Text style={styles.ProductText}>Smartphones</Text>
       </View>
    </TouchableOpacity>

       <TouchableOpacity onPress={ () => navigation.navigate('Smartwatch')} > 
         <View style={styles.ProductBox}>
           <Image source={require('../../assets/Images/galaxy5.png')}
             style={styles.ProductImage}/> 
           <Text style={styles.ProductText}>Smartwatches</Text>
         </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('Laptops')} > 
       <View style={styles.ProductBox}>
          <Image source={require('../../assets/Images/macbook.jpg')}
            style={styles.ProductImage}/>
          <Text style={styles.ProductText}>Laptops</Text>
       </View> 
     </TouchableOpacity>

     <TouchableOpacity onPress={ () => navigation.navigate('Headsets')} > 
       <View style={styles.ProductBox}>
          <Image source={require('../../assets/Images/sony.jpg')}
            style={styles.ProductImage}/> 
          <Text style={styles.ProductText}>Headphones</Text>
       </View>
     </TouchableOpacity>

     <TouchableOpacity onPress={ () => navigation.navigate('Desktop')} > 
       <View style={styles.ProductBox}>
          <Image source={require('../../assets/Images/intel.jpg')}
             style={styles.ProductImage}/> 
          <Text style={styles.ProductText}>Desktops</Text>
       </View>
     </TouchableOpacity>

    </ScrollView>
  </View>
  )
}
const styles = StyleSheet.create({ 
  ProductBox:{
    width:165,
    height:70,
    borderRadius:40,
    backgroundColor:'#f1f1f1',
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10
  },
  ProductImage:{
    width:60, 
    height:60,
    borderRadius:40,
    marginLeft:5,
  },
  ProductText:{
    marginLeft:7,
    fontFamily:
    FontFamily.montserrat,
    color:'black',
    fontSize:12
  }

  })