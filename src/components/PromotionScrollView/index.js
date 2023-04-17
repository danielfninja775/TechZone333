import { View, Text,ScrollView,Image,TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function PromotionScrollView() {

  return (

    <View>
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
         <Image source={require('../../assets/Images/flyer2.jpg')}
           style={styles.ProductImage}/> 
    
         <Image source={require('../../assets/Images/flyer3.jpg')}
          style={styles.ProductImage}/> 
  
         <Image source={require('../../assets/Images/flyer4.jpg')}
           style={styles.ProductImage}/> 
      
        <Image source={require('../../assets/Images/flyer5.jpg')}
           style={styles.ProductImage}/> 

        <Image source={require('../../assets/Images/flyer6.jpg')}
          style={styles.ProductImage}/> 

     </ScrollView>
   </View>
  )
}
const styles= StyleSheet.create({ 
  ProductImage:{
    width:280, 
    height:200,
    borderRadius:15,
    margin:10}
  })