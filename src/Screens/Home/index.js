import {
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
 TextInput
} from 'react-native'
import React, { useState, useContext, useEffect} from 'react';
import CategoryHomeScroll from '../../components/CategoryHomeScrollView'
import Ionicons from 'react-native-vector-icons/Ionicons';
import PromotionScrollView from '../../components/PromotionScrollView';
import { FontFamily, Colors} from '../../assets/CommonStyle';
import {Dimensions} from 'react-native';
import ModalProduct1 from '../../components/ModalProduct1';
import ModalProduct2 from '../../components/MoldalProduct2';
import ModalProduct3 from '../../components/MoldalProduct3';
import ModalProduct4 from '../../components/ModalProduct4';
import { width } from '@fortawesome/free-solid-svg-icons/faPeopleCarryBox';
import {Text as MotiText, View} from 'moti'


export default function Home() {

  const [search, setSearch] = useState('')

  return (

  <View style={styles.container}>

     <ImageBackground
          source={require('../../assets/Images/background2.png')}
          style={{flex:1,resizeMode:'cover'}}>

  <MotiText
      style={styles.HeaderText}
      from={{
      opacity:0,
      translateY: 15,
     }}
    animate={{
      opacity:1,
      translateY:0
     }}
    transition={{
      delay:600,
      type: "timing",
      duration:950
     }}
    > TechZone
  </MotiText>  

    <ScrollView style={{marginBottom:60,marginTop:10}}> 

        <Ionicons name="notifications-circle-outline" size={35} color={'red'} 
           style={styles.NotificationIcon}
           />

        <View style={styles.ProfileBox}>
            <Image
               source={require('../../assets/Images/daniel.jpg')}
               style={ styles.ProfilePic  }/>
           
              <View style={styles.ProfileTextBox}>
                 <MotiText style={styles.welcomeText}
                  from={{
                    opacity:0,
                    translateY: 15,
                  }}
                  animate={{
                    opacity:1,
                    translateY:0
                  }}
                  transition={{
                    delay:600,
                    type: "timing",
                    duration:1450
                  }}
                >Welcome!</MotiText>

                <MotiText style={styles.ProfileName}
                 from={{
                  opacity:0,
                  translateY: 15,
                }}
                animate={{
                  opacity:1,
                  translateY:0
                }}
                transition={{
                  delay:600,
                  type: "timing",
                  duration:2450
                }}
                 >Daniel Ferreira</MotiText>

            </View>
        </View>

   <View style={styles.TopBox}
       from={{
        opacity:0,
        translateY: -50,
      }}
      animate={{
        opacity:1,
        translateY:0
      }}
      transition={{
        delay:600,
        type: "timing",
        duration:950
      }}
      > 
      <Text style={styles.TopText}>Let's Explore Brands !</Text>
      <View style={styles.InputBox}>
        
        <TextInput
        style={styles.SearchInput}
        placeholder="Search Products"
        placeholderTextColor="white"
        value={search}
        onChangeText={setSearch}
          />
           <Ionicons name="search-outline" size={22} color={'white'} 
           style={styles.SearchIcon}
           />
     </View>
                        
  </View>
    
      <View style={styles.CategoriesBox}> 
             <Text style={styles.TitleScroll}>Categories</Text>
              <CategoryHomeScroll/>
           </View>
    
               <Image
                 source={require('../../assets/Images/flyer16.jpg')}
                 style={ styles.flyer12  }
                 />

              <View style={styles.logoview}>
                 <Image
                 source={require('../../assets/Images/logo333.1.png')}
                 style={ styles.logo }
                 />
              </View>

      <Text style={styles.RecomendationText}>Recomendations</Text>

       <View style={styles.Mainboxborder}>

         <View style={styles.RecMainBox}>
             <View style={styles.RecBox1}>
                <Image
                 source={require('../../assets/Images/smartwatch3.png')}
                 style={ styles.recomendationImage1  }
                 />
                 <Text style={styles.RecText1}>Samsug Galaxy</Text>
                 <View style={styles.Modal1}>
                   <ModalProduct1/>
                 </View>
             </View>
              
           <View style={styles.RecBox2}>
               <Image
                 source={require('../../assets/Images/desktop.png')}
                 style={ styles.recomendationImage2  }
                 />
                 <Text style={styles.RecText1}>Apple Desktop</Text>

                 <View style={styles.Modal1}>
                   <ModalProduct2/>
                 </View>
          </View>
        </View>

       <View style={styles.RecMainBox}>
          <View style={styles.RecBox1}>
               <Image
                 source={require('../../assets/Images/headset.jpg')}
                 style={ styles.recomendationImage1  }
               />
              <Text style={styles.RecText1}>Samsung Buds2</Text>
              <View style={styles.Modal1}>
                   <ModalProduct3/>
              </View>
          </View>

         <View style={styles.RecBox2}>
              <Image
                 source={require('../../assets/Images/laptop3.jpg')}
                 style={ styles.recomendationImage2  }
              />
              <Text style={styles.RecText1}>Apple Laptop</Text>
              <View style={styles.Modal1}>
                   <ModalProduct4/>
              </View>
         </View>
       </View>

       <View style={styles.BottomBox}>
               <Image
                 source={require('../../assets/Images/flyer.jpg')}
                 style={ styles.flyer1  }
               />
              <Text style={styles.ArrivalsText}>New Arrivals</Text>
               <Image
                 source={require('../../assets/Images/smartwatch2.png')}
                 style={ styles.flyer1  }
               />
              <Text style={styles.ArrivalsText}>Promotions</Text>

              <PromotionScrollView/>

              <View style={styles.logoBottomBox}>
                 <Image
                 source={require('../../assets/Images/1.png')}
                 style={ styles.logoBottom }
                 />
              </View>
        </View>

        </View>
      </ScrollView>
    </ImageBackground>
  </View>
  )
}

const styles = StyleSheet.create({
container:{
 flex: 1,
},
HeaderText:{
 fontFamily:FontFamily.shadowsIntoLight,
 fontSize:60,
 color:'black',
 paddingLeft:20,
 },
ProfilePic:{
 width:70,
 height:70,
 borderRadius:40,
 marginLeft:20
  },
ProfileBox:{
 flexDirection:'row',
},
ProfileTextBox:{
 marginLeft:20,
 justifyContent:"center",
 alignItems:'center'
},
welcomeText:{
 fontSize:20,
 fontFamily:FontFamily.montserrat,
 color:'black'
},
ProfileName:{
 fontSize:16,
 color:'black',
 fontFamily:FontFamily.poppins
},
TopBox:{
 justifyContent:'center',
 alignSelf:'center',
 width:'90%',
 backgroundColor:"silver",
 borderRadius:20,
 marginTop:30,
 marginBottom:20,
 paddingTop:10,
 shadowOffset: {width: -4, height: 4},  
 shadowColor: '#171717',  
 shadowOpacity: 0.4,  
 shadowRadius: 9,  
 shadowColor: 'black',  
 elevation:9,
},
TopText:{
 color:'black',
 fontSize:30,
 textAlign:'center',
 paddingBottom:10,
 fontFamily:FontFamily.indieFlowerRegular
},
SearchInput:{
 marginTop:20,
 borderWidth:1,
 borderColor:'white',
 borderRadius:10,
 width:'70%',
 alignSelf:'center',
 paddingLeft:50,
 color:'black'
},
SearchIcon:{
 alignSelf:'center',
 position:'absolute',
 paddingLeft:10,
 paddingTop:20
},
NotificationIcon:{
 position:'absolute',
 marginLeft:'80%',
 marginTop:15
},
InputBox:{
 flexDirection:'row',
 alignSelf:'center',
 marginTop:-30,
 marginBottom:20,
},
TitleScroll:{
 fontSize:22,
 paddingLeft:25,
 paddingBottom:10,
 fontFamily:FontFamily.openSansBoldItalic,
 color:'black'
},
CategoriesBox:{
 paddingBottom:40,
 paddingTop:10
},
logoview:{
 position:'absolute',
 marginTop:620,
},
logo:{
 width:90,
 height:100
},
RecomendationText:{
 fontSize:35,
 color:'black',
 marginLeft:20,
 marginTop:40,
 fontFamily:FontFamily.indieFlowerRegular,
},
RecText1:{
 color:'black',
 fontSize:18,
 marginLeft:10
},
RecMainBox:{
 flex:1,
 flexDirection:'row',
 justifyContent:'space-evenly',
 alignItems:'center',
 padding:5,
 marginBottom:10
},
Modal1:{
 height:80,
 marginTop:-20
},
Mainboxborder:{
 backgroundColor:Colors.secondary,
 borderTopLeftRadius:40,
 borderTopRightRadius:40,
 paddingTop:5,
},
RecBox1:{
 width:'45%',
 height:200,
 borderRadius:20,
 backgroundColor:'white',
 alignContent:'space-between',
 shadowOffset: {width: -4, height: 4},  
 shadowColor: '#171717',  
 shadowOpacity: 0.4,  
 shadowRadius: 9,  
 shadowColor: 'black',  
 elevation:4,
},
RecBox2:{
 width:'45%',
 height:200,
 borderRadius:20,
 backgroundColor:'white',
 alignContent:'space-between',
 shadowOffset: {width: -4, height: 4},  
 shadowColor: '#171717',  
 shadowOpacity: 0.4,  
 shadowRadius: 9,  
 shadowColor: 'black',  
 elevation:4,
},
recomendationImage1:{
 width:'75%',
 height:140,
 marginLeft:10,
 borderRadius:10
},
recomendationImage2:{
 width:'100%',
 height:140,
 borderRadius:20
},
flyer1:{
 width:'100%',
 height:180,
 alignSelf:'center',
 marginBottom:1,
 borderRadius:10,
},
flyer12:{
 width:'100%',
 height:320,
 alignSelf:'center',
 borderRadius:20,
},
ArrivalsText:{
 fontSize:35,
 color:'black',
 marginLeft:20,
 marginTop:30,
 fontFamily:FontFamily.indieFlowerRegular,
},
BottomBox:{
 flex:1,
 paddingBottom:5,
 borderTopRightRadius:40,
 backgroundColor:'white',
 marginTop:20
},
logoBottom:{
 backgroundColor:'white',
 alignSelf:'center',
 width:210,
 height:180,
 borderRadius:40
},
logoBottomBox:{
 backgroundColor:'white',
 width:210,
 height:200,
 borderRadius:30,
 alignSelf:'center',
 justifyContent:'center',
 shadowOffset: {width: -4, height: 4},  
 shadowColor: '#171717',  
 shadowOpacity: 0.4,  
 shadowRadius: 9,  
 shadowColor: 'black',  
 elevation:9,
 marginTop:30,
 marginBottom:30,
}

} )