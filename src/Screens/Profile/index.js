import React, { useState, useContext} from 'react';
import { 
  View, 
  Text,
  TextInput, 
  TouchableOpacity, 
  StyleSheet,Image, 
  ImageBackground,
  SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { AuthContext } from '../../Contexts/AuthContext'
import axios from 'axios';
import { FontFamily, Colors } from '../../assets/CommonStyle';

export default function Profile() {

  const navigation = useNavigation();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login2(){
    try {
      const response = await axios({
          method: 'post',
          url: 'https://meteologica.cloud/backend/session',
          data: {
              username,
              password
          }
      });
      console.log(response.data);''
  } catch (error) {
      console.log(error);
  }
  }

 return (
  
      <View style={StyleSheet.container}>

         <TouchableOpacity onPress={()=> navigation.openDrawer()}
            style={styles.Drawericon}>  
            <FontAwesome name="bars" size={30} color={'black'}/>
          </TouchableOpacity>
      
         <Image
         source={require('../../assets/Images/1.png')}
         style={styles.logo}/> 

       <View style={styles.HeaderBox}>
         <Text style={styles.HeaderText}>Please Enter Your Information!</Text>
       </View>

      <View style={styles.TextInputBox}>
         <TextInput
        style={styles.inputUserName}
        placeholder="Type your email"
        placeholderTextColor="black"
        value={username}
        onChangeText={setUsername}
          />
            <FontAwesome name="user-o" size={30} color={'#767479'}
            style={styles.UserIcon} />
      </View>

        <View style={styles.TextInputBox}>
     <TextInput
      style={styles.inputPassword}
      placeholder="Type your password"
      secureTextEntry
      returnKeyType="next"
      placeholderTextColor="black"
      value={password}
      onChangeText={setPassword}  
          />
      <FontAwesome name="lock" size={30} color={'#767479'}
            style={styles.LockIcon} />
        </View>


        <TouchableOpacity onPress={ () => navigation.navigate('Home Page')}> 
        <View style={{height:60}}>
        <Text style={styles.Login} onPress={login2}> Sign in </Text>
        </View>
         
       </TouchableOpacity>

      <TouchableOpacity onPress={ () => navigation.navigate('Home Page')}> 
       <View style={styles.facebookBox}>    
          <Image source={require('../../assets/Images/facebook.png')}
           resizeMode="contain"
           style={styles.facebookIcon}/>
         <Text style={styles.facebookText}> Login with Facebook</Text>
       </View>
     </TouchableOpacity>

          <Text style={styles.NewAccountText}>Not Registered Yet?</Text>
        <TouchableOpacity onPress={ () => navigation.navigate('SignUp')}>
          <Text style={styles.newAccount}> Create New Account! </Text>
        </TouchableOpacity>

   

        <TouchableOpacity onPress={ () => navigation.navigate('Home Page')}>
          <Text style={styles.BrowseText} > Browse as a guest</Text>
        </TouchableOpacity>
    
   </View>


  );
}

const styles  = StyleSheet.create({

  container:{
    flex:1,
backgroundColor:'white'
  },
  Drawericon:{
    marginLeft:'85%',
    marginTop:10
  },
    image:{
     flex:1
  },
  logo:{
    width:220, 
    height:200, 
    alignSelf:'center',
    marginTop:-20
  },
  TextInputBox:{
    flexDirection:'row',
    alignSelf:'center'
  },
    inputUserName:{
     marginTop:20,
    borderWidth:1,
    borderColor:'silver',
    borderRadius:10,
    width:300,
    alignSelf:'center',
    textAlign:'center',
    color:'white'
  },

    inputPassword:{
      marginTop:10,
      borderWidth:1,
      borderColor:'silver',
      borderRadius:10,
      width:300,
      alignSelf:'center',
      textAlign:'center',
      color:'white'
    },
    Login:{
      fontSize:20,
      textAlign:'center',
      fontWeight:'bold',
      marginTop:20,
      borderColor:'white',
      borderRadius:15,
      width:120,
      alignSelf:'center',
      backgroundColor:'#011c43',
      color:'white',
      padding:5
    },
    newAccount:{
      marginTop:1,
     color:'silver',
     alignSelf:'center',
     fontWeight:'bold',
     fontSize:20,
    borderBottomWidth:1
 },
 NewAccountText:{
  color: '#767479',
  fontWeight:'bold',
   textAlign:"center",
   paddingTop:20,
   fontSize:25
 },
HeaderText:{
  color:'black',
  fontSize:20,
  fontWeight:'bold',
  textAlign:'center',
  paddingTop:10
},
BrowseText:{ 
marginTop:30,
width:180,
height:35,
backgroundColor:'#011c43',
borderRadius:10,
color:'white',
alignSelf:'center',
fontWeight:'bold',
fontSize:18,
textAlign:'center',
paddingTop:5,
},
facebookBox:{
backgroundColor:'#3b5998',
width:'70%',
height:30,
flexDirection:'row',
alignItems:'center',
alignSelf:'center',
marginTop:20
},
facebookText:{
color:'white',
paddingLeft:50
},
facebookIcon:{
width:30,
height:30,
},
UserIcon:{
alignSelf:'center',
position:'absolute',
paddingLeft:10,
paddingTop:20
},
LockIcon:{
  alignSelf:'center',
  position:'absolute',
  paddingLeft:15,
  paddingTop:10
}
})