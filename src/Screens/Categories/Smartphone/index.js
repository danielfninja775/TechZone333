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
import { useNavigation } from '@react-navigation/native';
import { FontFamily, Colors} from '../../../assets/CommonStyle';
import CategoryIconScrollView from '../../../components/CategoryIconScrollView';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Smartphone() {

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

        <View style={styles.HeaderView}>
            <Image source={require('../../../assets/Images/flyer.jpg')} style={styles.flyer1}/>
            <Text style={styles.HeaderText}>Smartphones</Text>
        </View>
          
        <View style={{marginTop:-150}}>
            <CategoryIconScrollView/> 
        </View>

          <ScrollView style={{marginBottom:5}}> 

         <View style={styles.ProductBox}>
           <Image source={require('../../../assets/Images/sansung21.png')} style={styles.ProductImage}/>
             <View style={styles.ProductBoxInside}> 
                <Text style={styles.ProductName}>Samsung S21</Text>
                <Text style={styles.DescriptionText}> 
              169g (Sub6), 171g (mmWave), 7.9mm thicknes Android 11, up to Android 13, One UI 5.1
               128GB/256GB no storage slot  Versions: SM-G991B, SM-G991B/DS 
                </Text>
            </View> 
          </View>

          <View style={styles.PriceBox}>
                <Text style={styles.PriceText}>$ 480.90 </Text>
              <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.CartText}>Add Cart</Text>
             </TouchableOpacity>
          </View>

          <View style={styles.ProductBox}>
           <Image source={require('../../../assets/Images/iphone13.png')} style={ styles.ProductImage}/>
             <View style={styles.ProductBoxInside}> 
                <Text style={styles.ProductName}>Iphone 13</Text>
                <Text style={styles.DescriptionText}> 
                  128GB Cinematic mode automatically adds shallow 
                 depth of field and shifts focus in your videos
                 Advanced dual-camera    Wi-Fi 802.11 a/b/g/n/ac, 
                </Text>
            </View> 
          </View>  
             <View style={styles.PriceBox}>
                <Text style={styles.PriceText}>$ 580.00 </Text>
                <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                   <Text style={styles.CartText}>Add Cart</Text>
                </TouchableOpacity>
             </View>

        <View style={styles.ProductBox}>
           <Image
            source={require('../../../assets/Images/xiomi.jpg')}
            style={ styles.ProductImage  }
            />
             <View style={styles.ProductBoxInside}> 
                <Text style={styles.ProductName}>Xiaomi Note 11</Text>
                <Text style={styles.DescriptionText}> 
                   Internal	64GB 4GB RAM, 64GB 6GB RAM,
                  128GB 4GB RAM, 128GB 6GB RAM UFS 2.2  
                   Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct
                </Text>
            </View> 
        </View>
             <View style={styles.PriceBox}>
                <Text style={styles.PriceText}>$ 280.00 </Text>
               <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                 <Text style={styles.CartText}>Add Cart</Text>
               </TouchableOpacity>
            </View>

      <View style={styles.ProductBox}>
           <Image
            source={require('../../../assets/Images/sansung22ultra.jpg')}
            style={ styles.ProductImage  }
            />
             <View style={styles.ProductBoxInside}> 
                <Text style={styles.ProductName}>Samsung S22 Ultra</Text>
                <Text style={styles.DescriptionText}> 
                  128GB 8GB RAM, 256GB 12GB RAM, 512GB 12GB RAM, 1TB 12GB RAM
                	UFS 3.1 MAIN CAMERA	Quad	108 MP, f/1.8, 23mm (wide), 1/1.33", 
                  0.8µm, PDAF, Laser AF, OIS
                </Text>
            </View> 
       </View>
            <View style={styles.PriceBox}>
                <Text style={styles.PriceText}>$ 1,579.90 </Text>
              <TouchableOpacity  activeOpacity={0.9} onPress={() => navigation.navigate('Cart')}>
                <Text style={styles.CartText}>Add Cart</Text>
             </TouchableOpacity>
            </View>

          <View style={styles.ProductBox}>
           <Image
            source={require('../../../assets/Images/iphone14.png')}
            style={ styles.ProductImage }
            />
             <View style={styles.ProductBoxInside}> 
                <Text style={styles.ProductName}>Iphone 14 Pro Max</Text>
                <Text style={styles.DescriptionText}> 
                   Dynamic Island Always-On display
                   ProMotion technology with adaptive refresh rates up to 120Hz
                   HDR display  True Tone Wide color (P3) Haptic Touch
                </Text>
             </View> 
          </View>
             <View style={styles.PriceBox}>
                <Text style={styles.PriceText}>$ 1,480.00 </Text>
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
 width: wp('50%'),
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
 width:150,
 height:'85%',
 marginTop:10,
 borderRadius:10,
 marginLeft:5
},
ProductName:{
 fontFamily:FontFamily.montserrat,
 fontSize: hp('2.5%'),
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
 marginTop:-10,
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
 width:80,
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