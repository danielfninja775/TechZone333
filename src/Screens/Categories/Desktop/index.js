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

  export default function Desktop() {

    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
      <View style={styles.container}>
  
        <View style={styles.HeaderView}>
            <Image source={require('../../../assets/Images/flyer11.jpg')} style={styles.flyer1}/>
            <Text style={styles.HeaderText}>Desktop</Text>
        </View>
          
        <View style={{marginTop:-150}}>
            <CategoryIconScrollView/>
        </View>

          <ScrollView style={{marginBottom:5}}> 
  
           <View style={styles.ProductBox}>
             <Image source={require('../../../assets/Images/intel.jpg')} style={styles.ProductImage}/>
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Intel i7 10700F</Text>
                  <Text style={styles.DescriptionText}> 
                  Intel i7 6700 8-Thread 4.00 GHz Business Office Multimedia 
                  Computer with 3 Year Warranty! 
                  </Text>
              </View> 
            </View>
  
            <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 444.00 </Text>
               <TouchableOpacity 
                activeOpacity={0.9}
               onPress={() => navigation.navigate('Cart')}>
                 <Text style={styles.CartText}>Add Cart</Text>
              </TouchableOpacity>
            </View>
  
            <View style={styles.ProductBox}>
             <Image source={require('../../../assets/Images/minipc.jpg')} style={ styles.ProductImage}/>
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>ACEPC CK2</Text>
                  <Text style={styles.DescriptionText}> 
                  Mini PC Dimensions 140 x 140 x 47 mm Weight 0.68 kg System Hardware Configuration: Type Details Descriptions CPU Type
                  </Text>
              </View> 
            </View>  

               <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 239.00 </Text>
                <TouchableOpacity 
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate('Cart')}>
                   <Text style={styles.CartText}>Add Cart</Text>
               </TouchableOpacity>
              </View>
  
     
  
        <View style={styles.ProductBox}>
             <Image
              source={require('../../../assets/Images/systemtreff.jpg')}
              style={ styles.ProductImage  }
              />
           <View style={styles.ProductBoxInside}> 
              <Text style={styles.ProductName}>SystemTreff</Text>
               <Text style={styles.DescriptionText}> 
                  Gaming PC AMD Ryzen 5 4500 6x4.1GHz | Nvidia GeForce RTX 3060 12 GB DX12
                   | 512GB M.2 NVMe | 16GB DDR4 RAM | Windows 11 | WLAN Desktop Computer
               </Text>
           </View> 
          </View>

               <View style={styles.PriceBox}>
                  <Text style={styles.PriceText}>$ 1,894.00 </Text>
                   <TouchableOpacity  activeOpacity={0.9}  onPress={() => navigation.navigate('Cart')}>
                     <Text style={styles.CartText}>Add Cart</Text>
                   </TouchableOpacity>
               </View>
  
        <View style={styles.ProductBox}>
             <Image
              source={require('../../../assets/Images/systemtreff2.jpg')}
              style={ styles.ProductImage  }
              />
           <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>Gaming Pc Set</Text>
                  <Text style={styles.DescriptionText}> 
                  SYSTEMTREFF® Basic Gaming Komplett PC Set AMD Ryzen 5 PRO 4650G 6x4.3GHz | AMD RX Vega 7 4K |
                   256GB M.2 + 500GB HDD | 8GB DDR4 RAM | Windows 11 |
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
              source={require('../../../assets/Images/appledesktop.jpg')}
              style={ styles.ProductImage }
              />
               <View style={styles.ProductBoxInside}> 
                  <Text style={styles.ProductName}>2021 Apple iMac</Text>
                  <Text style={styles.DescriptionText}> 
                  (24 inch, Apple M1 Chip with 8-Core CPU and 8-Core GPU, 
                  Four Ports, 8GB RAM, 512GB) - Silver
              </Text>
              </View> 
            </View>

             <View style={styles.PriceBox}>
                <Text style={styles.PriceText}>$299.00 </Text>
                  <TouchableOpacity  activeOpacity={0.9}  onPress={() => navigation.navigate('Cart')}>
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
    width:'54%',
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