import React from 'react'
import { Text,View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feather from 'react-native-vector-icons/Feather'
import { Home,Cart,Categories,Profile} from '../Screens';
import { DrawerContent } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();

export default function HomeNavigationTabs() {

    return (

        <Tab.Navigator
        initialRouteName='Home' 
        screenOptions={{
             headerShown: false,
             tabBarShowLabel: false,
             tabBarStyle:{
             position: 'absolute',
             elevation: 4,
             borderTopLeftRadius:30,
             borderTopRightRadius:30,
             height:60,
             paddingBottom:7,
             backgroundColor: 'black'
            }
          }}
        >

            <Tab.Screen
                  name='HomeTab'
                  component={Home}
                  options={{ headerShown: false, 
                      tabBarIcon: ({ focused }) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                          <Feather name="home" size={22} color={'white'}/>
                          <Text 
                            style={{
                              color: focused ? 'white' : '#00ffe3',
                              width: 50,
                              fontSize: 11,
                              textAlign: 'center'
                          }}
                          >Home</Text>
                      </View>
                      ),
                    
              }}/>

           <Tab.Screen 
           name="Profile" 
           component={Profile} 
              options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                  <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                    <Feather name="user" size={22} color={'white'}/>
                    <Text 
                      style={{
                          color: focused ? 'white' : '#00ffe3',
                          width: 60,
                          fontSize: 11,
                          textAlign: 'center'
                            }}
                              >Profile</Text>
                </View>
                ),
            }}/>
      
          <Tab.Screen 
          name="Categories" 
          component={Categories} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                <Feather name="layers" size={22} color={'white'}/>
                 <Text 
                   style={{
                      color: focused ? 'white' : '#00ffe3',
                      width: 60,
                      fontSize: 11,
                      textAlign: 'center'
                        }}
                           >Categories</Text>
             </View>
            ),
                }}/>

           <Tab.Screen 
           name="Cart"
            component={Cart} 
            options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
               <Feather name="shopping-cart" size={22} color={'white'}/>
                 <Text 
                   style={{
                      color: focused ? 'white' : '#00ffe3',
                      width: 60,
                      fontSize: 11,
                      textAlign: 'center'
                        }}
                           >Cart</Text>
              </View>
             ),
           }}/>
      
         <Tab.Screen 
         name={"More"} 
         options={{
         tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => (
         <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
           <Feather name="align-justify" size={22} color={'white'}/>
              <Text 
                  style={{
                    color: focused ? 'white' : '#00ffe3',
                    width: 50,
                    fontSize: 11,
                    textAlign: 'center'
                  }}
                  >SideBar</Text>
         </View>
            ),
           }}

  listeners={({ navigation }) => ({
    tabPress: e => {
      e.preventDefault();
      navigation.openDrawer();
    }
  })}
  component={HomeNavigationTabs} 
/>

  </Tab.Navigator>

        
    );
}