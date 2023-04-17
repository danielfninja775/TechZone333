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
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import FontAwesome from 'react-native-vector-icons/FontAwesome';
  import CategoryIconScrollView from '../../../components/CategoryIconScrollView';


export default function Smartwatch() {

  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

    return (
      <View style={styles.container}>
  
        <View style={styles.HeaderView}>
            <Image source={require('../../../assets/Images/flyer9.jpg')} style={styles.flyer1}/>
            <Text style={styles.HeaderText}>Laptops</Text>
        </View>
          
          <View style={{marginTop:-150}}>
            <CategoryIconScrollView/>
          </View>
       <ScrollView style={{marginBottom:5}}> 
  
        <View style={styles.ProductBox}>
             <Image source={require('../../../assets/Images/lenovov15.jpg')} style={styles.ProductImage}/>
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Lenovo V15</Text>
                  <Text style={styles.DescriptionText}> 
                  Lenovo V15 IML Laptop, 15.6" IPS FHD, I5-10210U, 8GB, 256GB SSD, Up to 9 Hours Run Time, No Optical or LAN, Windows 10 Pro
                  </Text>
              </View> 
            </View>
  
            <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 449.00 </Text>
               <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                 <Text style={styles.CartText}>Add Cart</Text>
              </TouchableOpacity>
           </View>
  
            <View style={styles.ProductBox}>
             <Image source={require('../../../assets/Images/aceraspire.jpg')} style={ styles.ProductImage}/>
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Acer Aspire 5</Text>
                  <Text style={styles.DescriptionText}> 
                  De Acer Aspire 5 A515-56-59M5 Zwart is uitgerust met een Intel Core i5 11e 
                  </Text>
              </View> 
            </View>  
               <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 299.00 </Text>
               <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                 <Text style={styles.CartText}>Add Cart</Text>
              </TouchableOpacity>
              </View>
  
           <View style={styles.ProductBox}>
             <Image
              source={require('../../../assets/Images/macbook.jpg')}
              style={ styles.ProductImage  }
              />
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Mac Book Pro</Text>
                  <Text style={styles.DescriptionText}> 
                  Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels.
                  </Text>
              </View> 
             </View>
                <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 1,389.00 </Text>
              <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                 <Text style={styles.CartText}>Add Cart</Text>
              </TouchableOpacity>
              </View>
  
           <View style={styles.ProductBox}>
             <Image
              source={require('../../../assets/Images/hppavilion.jpg')}
              style={ styles.ProductImage  }
              />
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>HP Pavilion 15</Text>
                  <Text style={styles.DescriptionText}> 
                  HP Pavilion 15.6", Core i5, 256Gb SSD, 8GB Laptop Used Apple Watch SE 44mm Space Gray Aluminum - Black Sport Band MYDT2LL/A (Used )
                </Text>
               </View> 
           </View>
                <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 1,174.90 </Text>
                   <TouchableOpacity  activeOpacity={0.9}  onPress={() => navigation.navigate('Cart')}>
                     <Text style={styles.CartText}>Add Cart</Text>
                   </TouchableOpacity>
              </View>
  
        <View style={styles.ProductBox}>
             <Image
              source={require('../../../assets/Images/asus.jpg')}
              style={ styles.ProductImage }
              />
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Asus VivoBook</Text>
                  <Text style={styles.DescriptionText}> 
                  Display resolution 1440x2560 pixels Touchscreen No 
                  Processor Core i9 SSD 4TB Graphics Nvidia GeForce RTX 3080 Ti
              </Text>
              </View> 
            </View>
               <View style={styles.PriceBox}>
                 <Text style={styles.PriceText}>$596.00 </Text>
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
   marginLeft:'85%',
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