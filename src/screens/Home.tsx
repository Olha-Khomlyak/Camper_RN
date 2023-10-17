import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {MainNavigationProp} from '../navigation/types';
import {observer} from 'mobx-react';
import CampStore from '../mobx/CampStore';
import {getData} from '../functionality/APIs/firebase';
import {toJS} from 'mobx';
import {CampInfo} from '../mobx/types';
import {Icon} from '@rneui/themed';
import Colors from '../constnats/colors';
import contStyles from '../constnats/styles';
import { MainRoutes } from '../navigation/routes';



const Home: React.FC = () => {
  const navigation = useNavigation<MainNavigationProp<MainRoutes.HOME>>();

  useEffect(() => {
    getData();
  }, []);

  const _renderItem = (item: CampInfo) => (
    <View style={styles.frame}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image} source={{uri: item.imageURLString}} />
        <View style={{marginLeft: 10}}>
          <Text style={contStyles.title}>{item.name}</Text>
          <Text style={contStyles.text}>{item.region}</Text>
        </View>
      </View>
      <View style={styles.priceBlock}>
        <Text style={contStyles.text}>{item.price} TL</Text>
        <Icon
          name="chevron-forward-outline"
          type="ionicon"
          color={Colors.DARK_VANILLA}
          onPress={() => navigation.navigate(MainRoutes.DETAILS, {id: item.id})}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={toJS(CampStore.camps)}
        renderItem={({item}) => _renderItem(item)}
      />
    </SafeAreaView>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  frame: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.GRAY_ASPARAGUS,
    padding: 5,
    borderRadius: 15,
  },
  image: {width: 50, height: 50, borderRadius: 15},
  priceBlock: {flexDirection: 'row', alignItems: 'center'},
});
