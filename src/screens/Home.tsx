import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../navigation/types';
import {observer} from 'mobx-react';
import CampStore from '../mobx/CampStore';
import {getData} from '../functionality/APIs/firebase';
import {toJS} from 'mobx';
import {CampInfo} from '../mobx/types';
import { Icon } from '@rneui/themed';

const Home: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    getData();
  }, []);

  const _renderItem = (item: CampInfo) => (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 4,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: item.imageURLString}}
        />
        <View style={{marginLeft: 10}}>
          <Text>{item.name}</Text>
          <Text>{item.region}</Text>
        </View>
      </View>

      <Text>{item.price}</Text>
      <Icon
        name='edit'
        type='material'
        color='#f50'
        onPress={() => console.log('hello')} />
    </View>
  );

  const _separator = () => (
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={toJS(CampStore.camps)}
        renderItem={({item}) => _renderItem(item)}
        ItemSeparatorComponent={_separator}
      />
    </SafeAreaView>
  );
};

export default observer(Home);
