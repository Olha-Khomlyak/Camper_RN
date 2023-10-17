import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { MainStack,MainRoutes } from './routes'


import Home from '../screens/Home'
import Details from '../screens/Details'

const HomeStackNavigator = () => { 
    return (
        <MainStack.Navigator>
            <MainStack.Screen name={MainRoutes.HOME} component={Home}/>
            <MainStack.Screen name={MainRoutes.DETAILS} component={Details}/>
        </MainStack.Navigator>
    )
 }

 export default HomeStackNavigator;