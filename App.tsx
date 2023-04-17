import 'react-native-gesture-handler'
import { View, StatusBar,LogBox} from 'react-native';
import React from 'react';
import Navigation from './src/Navigation';
import { FontFamily, Colors} from '../../assets/CommonStyle';
import 'react-native-reanimated'


LogBox.ignoreLogs(['Reanimated 2']);
export default props => <Navigation/>