import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { HomeStackNavigatorParamList } from './types'


import Home from '../screens/Home'
import Details from '../screens/Details'

const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>()

const HomeStackNavigator = () => { 
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home}/>
            <HomeStack.Screen name="Details" component={Details}/>
        </HomeStack.Navigator>
    )
 }

 export default HomeStackNavigator;