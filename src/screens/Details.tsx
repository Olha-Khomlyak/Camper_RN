import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import React, {useEffect} from 'react';
import {MainNavigationProp, MainRouteProp} from '../navigation/types';
import {MainRoutes} from '../navigation/routes';
import contStyles from '../constnats/styles';
import {Image} from '@rneui/base';
import {observer} from 'mobx-react';
import CampStore from '../mobx/CampStore';
import {toJS} from 'mobx';
import {Icon} from '@rneui/themed';
import Colors from '../constnats/colors';
import IconRow from '../components/IconRow';

type DetailsProps = {
  navigation: MainNavigationProp<MainRoutes.DETAILS>;
  route: MainRouteProp<MainRoutes.DETAILS>;
};

const screenWidth = Dimensions.get('screen').width;

const Details: React.FC<DetailsProps> = ({navigation, route}) => {
  const camp = toJS(CampStore.camps)[route.params.index];

  return (
    <SafeAreaView style={contStyles.container}>
      <View>
        <View style={styles.imageContainer}>
          <View style={styles.shadow}>
            <Image style={styles.image} source={{uri: camp.imageURLString}} />
          </View>
          <IconRow goBack={() => {navigation.goBack()}} bookmark={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default observer(Details);

const styles = StyleSheet.create({
  image: {
    width: screenWidth * 0.90,
    aspectRatio: 1 / 1,
    borderRadius: 15,
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 2, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  imageContainer: {
    alignItems: 'center',
  },

});
