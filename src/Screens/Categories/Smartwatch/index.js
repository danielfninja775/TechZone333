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
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import { useNavigation } from '@react-navigation/native';
 import CategoryIconScrollView from '../../../components/CategoryIconScrollView';

export default function Smartwatch() {

  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
    return (
      <View style={styles.container}>
  
        <View style={styles.HeaderView}>
            <Image source={require('../../../assets/Images/flyer8.jpg')} style={styles.flyer1}/>
            <Text style={styles.HeaderText}>SmartWatches</Text>
        </View>
          
          <View style={{marginTop:-150}}>
            <CategoryIconScrollView/>
          </View>
                
            <ScrollView style={{marginBottom:5}}> 
  
           <View style={styles.ProductBox}>
             <Image source={require('../../../assets/Images/galaxy5.png')} style={styles.ProductImage}/>
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Galaxy Watch5</Text>
                  <Text style={styles.DescriptionText}> 
                  Bluetooth® 5.2, WLAN 2.4 GHz & 5 GHz, NFC, GPS, up to 80h
                  </Text>
              </View> 
            </View>
  
            <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 359.00 </Text>
               <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                 <Text style={styles.CartText}>Add Cart</Text>
                 </TouchableOpacity>
            </View>
  
            <View style={styles.ProductBox}>
              <Image source={require('../../../assets/Images/appleultra.jpg')} style={ styles.ProductImage}/>
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Apple Watch</Text>
                  <Text style={styles.DescriptionText}> 
                      Brand: Pinnacle Luxuries Apple Watch Series: Pinnacle Luxuries utilizes our precision laser cut technology to provide the perfect fit for every Series Apple Watch 4, 5, 6, 7, 8 & Ultra 
                  </Text>
               </View> 
            </View>  
               <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 909.00 </Text>
                 <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                     <Text style={styles.CartText}>Add Cart</Text>
                 </TouchableOpacity>
               </View>
  
          <View style={styles.ProductBox}>
             <Image
               source={require('../../../assets/Images/huawei.jpg')}
               style={ styles.ProductImage  }
             />
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Huawei GT3</Text>
                  <Text style={styles.DescriptionText}> 
                    Dimensions. 46.4 mm × 46.4 mm × 11 mm · Case Size. 46 mm · Wrist Size. 140-210 mm · Weight. Approximately 35.6 g (without the strap) · Display. 1.43 inches
                  </Text>
              </View> 
          </View>
                <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 194.00 </Text>
                   <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                      <Text style={styles.CartText}>Add Cart</Text>
                   </TouchableOpacity>
                </View>
  
         <View style={styles.ProductBox}>
             <Image
               source={require('../../../assets/Images/applese.jpg')}
               style={ styles.ProductImage  }
              />
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Apple Watch Se</Text>
                  <Text style={styles.DescriptionText}> 
                    Used Apple Watch SE 44mm Space Gray Aluminum - Black Sport Band MYDT2LL/A (Used )
                </Text>
              </View> 
           </View>
                <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 174.90 </Text>
                   <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                      <Text style={styles.CartText}>Add Cart</Text>
                   </TouchableOpacity>
                </View>
  
           <View style={styles.ProductBox}>
             <Image
               source={require('../../../assets/Images/huaweimini.jpg')}
               style={ styles.ProductImage }
              />
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Huawei Mini</Text>
                  <Text style={styles.DescriptionText}> 
                      BROTECT Full Cover Screen Protector Compatible with Huawei Watch Fit Mini (Pack of 2) - Full Screen Protector Film, 3D Curved Crystal Clear
                  </Text>
              </View> 
            </View>
               <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$86.00 </Text>
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
  Drawericon:{
   marginLeft:'90%',
   marginTop:10,
   position:'absolute'
  },
  HeaderView:{

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