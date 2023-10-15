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
import {Icon} from '@rneui/themed';
import Colors from '../constnats/colors';

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
        margin: 5,
        alignItems: 'center',
        borderWidth:1,
        borderColor: Colors.GRAY_ASPARAGUS,
        padding:5, borderRadius:15
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={{width: 50, height: 50, borderRadius:15}}
          source={{uri: item.imageURLString}}
        />
        <View style={{marginLeft: 10}}>
          <Text>{item.name}</Text>
          <Text>{item.region}</Text>
        </View>
      </View>

      <Text>{item.price} TL</Text>
      <Icon
        name="chevron-forward-outline"
        type="ionicon"
        color={Colors.DARK_VANILLA}
        onPress={() => console.log('hello world')}
      />
    </View>
  );

  const _separator = () => (
    <View
      style={{
        borderBottomColor: 'red',
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    />
  );

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
        <FlatList
          data={toJS(CampStore.camps)}
          renderItem={({item}) => _renderItem(item)}
        />
    </SafeAreaView>
  );
};

export default observer(Home);
