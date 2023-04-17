import React from 'react'
import StackNavigation from './StackNavigation'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigation from './DrawerNavigation'
import { StatusBar} from 'react-native';

export default props => (

<NavigationContainer>

     <StatusBar
      hidden={false}
      barStyle="default"
      animated={true}
      backgroundColor="black"
      />

      <DrawerNavigation/>

</NavigationContainer>
)