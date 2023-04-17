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
  import { FontFamily, Colors} from '../../../assets/CommonStyle';
  import { useNavigation } from '@react-navigation/native';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import CategoryIconScrollView from '../../../components/CategoryIconScrollView';

  export default function Headphones() {

    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
      <View style={styles.container}>
  
         <View style={styles.HeaderView}>
            <Image source={require('../../../assets/Images/flyer10.jpg')} style={styles.flyer1}/>
            <Text style={styles.HeaderText}>Headphones</Text>
         </View>
          
         <View style={{marginTop:-150}}>
            <CategoryIconScrollView/>
         </View>
  

      <ScrollView style={{marginBottom:5}}> 
  
        <View style={styles.ProductBox}>
             <Image source={require('../../../assets/Images/jbl.jpg')} style={styles.ProductImage}/>
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>JBL Tune 510BT</Text>
                  <Text style={styles.DescriptionText}> 
                  The JBL Tune 510BT headphones let you stream powerful JBL Pure Bass sound with no strings attached.
                  </Text>
              </View> 
            </View>
  
            <View style={styles.PriceBox}>
               <Text style={styles.PriceText}>$ 79.00 </Text>
               <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                 <Text style={styles.CartText}>Add Cart</Text>
               </TouchableOpacity>
           </View>
  
            <View style={styles.ProductBox}>
             <Image source={require('../../../assets/Images/bose.jpg')} style={ styles.ProductImage}/>
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Bose Pro</Text>
                  <Text style={styles.DescriptionText}> 
                  Powerful Noise-Cancelling Headphones: 11 levels of active noise reduction allows you to enjoy your
                  </Text>
              </View> 
            </View>  
               <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 239.00 </Text>
              <TouchableOpacity  activeOpacity={0.9}   onPress={() => navigation.navigate('Cart')}>
                 <Text style={styles.CartText}>Add Cart</Text>
              </TouchableOpacity>
              </View>
  
         <View style={styles.ProductBox}>
             <Image
              source={require('../../../assets/Images/sony.jpg')}
              style={ styles.ProductImage  }
              />
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Sony WH   1000XM4</Text>
                  <Text style={styles.DescriptionText}> 
                  Weight. 251g ; Model Number. WH-1000XM4 ; Waterproof. No ; 
                  What we like. Great noise cancelling. Great sound quality.
                  </Text>
              </View> 
             </View>
                <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 274.00 </Text>
               <TouchableOpacity   activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                 <Text style={styles.CartText}>Add Cart</Text>
               </TouchableOpacity>
              </View>
  
        <View style={styles.ProductBox}>
             <Image
              source={require('../../../assets/Images/bower.jpg')}
              style={ styles.ProductImage  }
              />
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Bowers & Wilkins</Text>
                  <Text style={styles.DescriptionText}> 
                  The Bowers & Wilkins Px7 S2 over-ear headphones are priced the same as the Sony. 
                </Text>
              </View> 
              </View>
                <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 274.90 </Text>
               <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                 <Text style={styles.CartText}>Add Cart</Text>
               </TouchableOpacity>
              </View>
  
        <View style={styles.ProductBox}>
             <Image
              source={require('../../../assets/Images/airpods.jpg')}
              style={ styles.ProductImage }
              />
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Apple AirPods Pro</Text>
                  <Text style={styles.DescriptionText}> 
                  AirPods Pro mobile phone high-quality 3D modelRhino software modelingKeyshoe 
                  software 
              </Text>
              </View> 
            </View>
               <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$299.00 </Text>
              <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                 <Text style={styles.CartText}>Add Cart</Text>
              </TouchableOpacity>
              </View>
  
   </ScrollView>
      </View>
      );
  }
  const styles = StyleSheet.create({
  container:{
   flex: 1,
   backgroundColor:'#f1f1f1',
  },
  HeaderView:{
  
  },
  Drawericon:{
   marginLeft:'88%',
   marginTop:10,
   position:'absolute'
  },
  flyer1:{
   width:'100%',
   height:'50%',
   borderBottomLeftRadius:50,
   borderBottomRightRadius:50,
  },
  HeaderText:{
   textAlign:'center',
   backgroundColor:'white',
   color:'black',
   width:'60%',
   height:50,
   alignSelf:'center',
   fontSize:30,
   borderRadius:10,
   marginTop:-20,
   marginBottom:5,
   padding:5,
   fontFamily:FontFamily.indieFlowerRegular,
   shadowOffset: {width: -4, height: 4},  
   shadowColor: '#171717',  
   shadowOpacity: 0.4,  
   shadowRadius: 9,  
   shadowColor: 'black',  
   elevation:2
  },
  ProductBox:{
   backgroundColor:'white',
   height:hp ('30%'),
   width: wp('95%') ,
   borderRadius:20,
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   alignSelf:'center',
   shadowOffset: {width: -4, height: 4},  
   shadowColor: '#171717',  
   shadowOpacity: 0.4,  
   shadowRadius: 9,  
   shadowColor: 'black',  
   elevation:2
  },
  ProductBoxInside:{
   width: wp('40%'),
   height: hp('25%'),
   backgroundColor:'white',
   borderRadius:20,
   shadowOffset: {width: -4, height: 4},  
   shadowColor: '#171717',  
   shadowOpacity: 0.4,  
   shadowRadius: 9,  
   shadowColor: 'black',  
   elevation:2,
   justifyContent:'center',
   alignItems:'center',
  },
  ProductImage:{
   width:'50%',
   height:'85%',
   marginTop:10,
   borderRadius:10,
   marginLeft:5
  },
  ProductName:{
   fontFamily:FontFamily.montserrat,
   fontSize: 16,
   color:'black',
   justifyContent:'center',
   paddingTop:5
  },
  DescriptionText:{
   marginTop:5 ,
   marginLeft:10,
   color:'black',
   fontSize: 12,
   fontFamily:FontFamily.poppins,
   paddingBottom:2,
   paddingTop:10,
   padding:5
  },
  PriceBox:{
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   marginBottom:20,
   marginTop:-10
  },
  PriceText:{
   textAlign:'center',
   color:'black',
   padding:5,
   fontSize: 14,
   backgroundColor:'white',
   borderRadius:10,
   shadowOffset: {width: -4, height: 4},  
   shadowColor: '#171717',  
   shadowOpacity: 0.4,  
   shadowRadius: 9,  
   shadowColor: 'black',  
   elevation:9,
   width:80
  },
CartText:{
 textAlign:'center',
 color:'white',
 padding:5,
 fontSize: 14,
 backgroundColor:'black',
 borderRadius:10,
 width:80,
 fontFamily:FontFamily.montserrat
  }
  })