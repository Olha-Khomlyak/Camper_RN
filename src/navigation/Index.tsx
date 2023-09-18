import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import HomeStackNavigator from './HomeStack'
import BottomTabs from './TabStack'

const RootNavigator = () => { 
    return (
        <NavigationContainer>
            <BottomTabs />
        </NavigationContainer>
    )
 }

 export default RootNavigator;