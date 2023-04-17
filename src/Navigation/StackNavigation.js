import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeNavigationTabs from './BottomTabs'

import {
    Home,
    Menu,
    LogIn,
    SignUp,
    Payment,
    Cart,
    Smartwatch,
    Smartphone
        } from '../Screens'

const Stack = createNativeStackNavigator()

export default props => (

    <Stack.Navigator
        initialRouteName='Profile' // Controle de rota inicial
        screenOptions={{ headerShown: false }}>
      
        <Stack.Screen name="Home" component={HomeNavigationTabs}/>
      
    </Stack.Navigator>
)

export function HomeNavigation({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                title: 'Tela Home',
                headerLeft: () => (
                    <View style={{ margin: 10 }}>
                        <Icon
                            name="bars"
                            size={25}
                            color={"#000"}
                            onPress={() => navigation.openDrawer()}
                        />
                    </View>
                )
            }}
        >
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Smartwatch" component={Smartwatch} />
            <Stack.Screen name="Smartphone" component={Smartphone} />
        </Stack.Navigator>
    )
}
