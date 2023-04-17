import { View, Text,ScrollView,Image,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default function CategoryIconScrollView() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      

      <TouchableOpacity onPress={ () => navigation.goBack()} > 
        <View style={styles.IconView}>
           <Ionicons name="home-outline" size={22} color={'white'} />
         </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('Smartphone')} > 
        <View style={styles.IconView}>
           <Feather name="smartphone" size={22} color={'white'} />
         </View>
      </TouchableOpacity>
      
      <View style={styles.IconView}>
        <TouchableOpacity onPress={ () => navigation.navigate('Smartwatch')} > 
          <Feather name="watch" size={22} color={'white'} />
        </TouchableOpacity>
      </View>


      <View style={styles.IconView}>
        <TouchableOpacity onPress={ () => navigation.navigate('Laptops')} > 
          <Entypo name="laptop" size={22} color={'white'} />
        </TouchableOpacity>
      </View>

      
      <View style={styles.IconView}>
        <TouchableOpacity onPress={ () => navigation.navigate('Headsets')} > 
          <Ionicons name="md-headset-outline" size={22} color={'white'} />
        </TouchableOpacity>
      </View>

      
      <View style={styles.IconView}>
        <TouchableOpacity onPress={ () => navigation.navigate('Desktop')} > 
          <Ionicons name="desktop-sharp" size={22} color={'white'} />
        </TouchableOpacity>
      </View>

     </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
      alignItems:'center',
    },
    IconView:{
      padding:5,
      borderRadius:40,
      borderWidth:1,
      margin:10,
      backgroundColor:'black',
    }
})