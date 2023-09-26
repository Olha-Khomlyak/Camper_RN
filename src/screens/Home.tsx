import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../navigation/types'
import firestore from '@react-native-firebase/firestore';
import { observer } from 'mobx-react';
import CampStore from '../mobx/CampStore';

const Home: React.FC = () => {

    const navigation = useNavigation<HomeScreenNavigationProp>()


    const getData = async () => { 
      const users = await firestore().collection('campsites').get();
      console.log(users)
     }

    useEffect(() => {
     getData()
    }, [])

  return (
    <View>
      <Text>Home</Text>
      <Text>{CampStore.counter}</Text>
      <Pressable onPress={() => CampStore.increment()}>
      <Text>PRESS ME TO ADD</Text> 
      </Pressable>
    </View>
  )
}

export default observer(Home)