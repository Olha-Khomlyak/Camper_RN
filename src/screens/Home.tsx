import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../navigation/types'
import firestore from '@react-native-firebase/firestore';

const Home = () => {

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
      <Pressable 
      onPress={() => navigation.navigate('Details', {name: "item.name",birthYear: "item.birth_year"})}>
      <Text>PRESS ME</Text> 
      </Pressable>
    </View>
  )
}

export default Home