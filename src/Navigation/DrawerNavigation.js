import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import StackNavigation from './StackNavigation';
import HomeNavigationTabs from './BottomTabs';
import Feather from 'react-native-vector-icons/Feather'

import {
   Home,
  Payment,
  Menu,
  Smartphone,
   Smartwatch, 
   Headsets,
   Laptops,
   Desktop,
   PrivacyPolicy,
   TermsCondition,
   Categories,
   Profile,
   SignUp
   }
   from '../Screens';
import CustomDrawer from '../components/CustomDrawer';
import { height } from '@fortawesome/free-solid-svg-icons/faPeopleCarryBox';

const Drawer = createDrawerNavigator();

export default props => (

    <Drawer.Navigator
    drawerContent={ props => <CustomDrawer {...props}/>}
    screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor:'white',
        drawerActiveTintColor:'black',
        drawerInactiveTintColor:'black',
        drawerStyle: {
         backgroundColor: 'white',
         width: 260,
         height:'80%',
         borderRadius:40,
         marginTop:80
       },
       drawerLabelStyle:{
         marginLeft:50,
       fontFamily:'Roboto-Medium'
       },
       headerStyle:{
         backgroundColor:'red',
        },
      }} 
    >
        <Drawer.Screen name="Home Page" component={HomeNavigationTabs} 
          options={{
          drawerIcon: (color) =>(
            <Ionicons name="home-outline" size={22} color={'black'} 
            style={{marginRight:-70}}/>
          )
        }}
      />

<Drawer.Screen name="Profile" component={Profile} 
        options={{
          drawerIcon: (color) =>(
            <Ionicons name="person-outline" size={22} color={'black'} 
            style={{marginRight:-70}}/>
          )
        }}
      />
    
    <Drawer.Screen name="Categories" component={Categories} 
           options={{
            drawerIcon: (color) =>(
              <Feather name="layers" size={22} color={'black'}
              style={{marginRight:-70}} />
            )
           }}
      />  

      <Drawer.Screen name="Payment" component={Payment} 
           options={{
            drawerIcon: (color) =>(
              <Ionicons name="cart-outline" size={22} color={'black'} 
              style={{marginRight:-70}} />
            )
           }}
      />

      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy}/>
      <Drawer.Screen name="TermsCondition" component={TermsCondition}/>
  
<Drawer.Screen
  name="Smartphone"
  component={Smartphone}
  options={{
    drawerItemStyle: { height: 0 }
  }}
/>
  
<Drawer.Screen
  name="Smartwatch"
  component={Smartwatch}
  options={{
    drawerItemStyle: { height: 0 }
  }}
/>
  
<Drawer.Screen
  name="Laptops"
  component={Laptops}
  options={{
    drawerItemStyle: { height: 0 }
  }}
/>
  
<Drawer.Screen
  name="Headsets"
  component={Headsets}
  options={{
    drawerItemStyle: { height: 0 }
  }}
/>

<Drawer.Screen
  name="Desktop"
  component={Desktop}
  options={{
    drawerItemStyle: { height: 0 }
  }}
/>

<Drawer.Screen
  name="SignUp"
  component={SignUp}
  options={{
    drawerItemStyle: { height: 0 }
  }}
/>
    </Drawer.Navigator>
);