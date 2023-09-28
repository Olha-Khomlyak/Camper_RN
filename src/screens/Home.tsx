import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../navigation/types';
import {observer} from 'mobx-react';
import CampStore from '../mobx/CampStore';
import {getData} from '../functionality/APIs/firebase';
import { toJS } from 'mobx'

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>Home</Text>

      <Pressable
        onPress={() => {
          console.log(toJS(CampStore.camps));
        }}>
        <Text>PRESS ME TO ADD</Text>
      </Pressable>
    </View>
  );
};

export default observer(Home);
