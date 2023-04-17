import React from 'react';
import { View,ImageBackground,Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, Colors} from '../../assets/CommonStyle';


const CustomDrawer = (props) => {

    const navigation = useNavigation();
    return(
        <View style={{flex:1}}>  

         <DrawerContentScrollView
               {...props}
              contentContainerStyle={{flex:1,backgroundColor:'white',borderRadius:20}}>
              
             
              <Image source={require('../../assets/Images/daniel.jpg')}
                 style={{paddingTop:100,width:100,height:100,
                 alignSelf:'center',marginTop:10,borderRadius:50}}/>
            
             <View style={styles.ProfileTextBox}>
                 <Text style={styles.welcomeText}>Welcome!</Text>
                 <Text style={styles.ProfileName}>Daniel Ferreira</Text>
             </View>
            
           <View style={{flex:1,paddingTop:15}}>
              <DrawerItemList {...props} />
           </View>

         </DrawerContentScrollView>
        </View>
  
    )
}

const styles = StyleSheet.create({
    ProfileBox:{
      flexDirection:'row',
         },
    ProfileTextBox:{
      justifyContent:"center",
      alignItems:'center'
         },
    welcomeText:{
      fontSize:24,
      fontFamily:FontFamily.montserrat,
      color:'black',
        },
    ProfileName:{
      fontSize:16,
      color:'black',
      fontFamily:FontFamily.poppins
          },
        })
        
export default CustomDrawer