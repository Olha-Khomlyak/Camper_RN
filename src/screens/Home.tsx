import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../navigation/types'

const Home = () => {

    const navigation = useNavigation<HomeScreenNavigationProp>()

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