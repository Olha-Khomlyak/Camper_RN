import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../navigation/types';
import {observer} from 'mobx-react';
import CampStore from '../mobx/CampStore';
import {getData} from '../functionality/APIs/firebase';
import {toJS} from 'mobx';
import {CampInfo} from '../mobx/types';

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    getData();
  }, []);

  const _renderItem = (item: CampInfo) => (
    <View style={{backgroundColor: 'red', justifyContent: 'space-between', flexDirection:"row"}}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={toJS(CampStore.camps)}
        renderItem={({item}) => _renderItem(item)}
      />
    </SafeAreaView>
  );
};

export default observer(Home);
