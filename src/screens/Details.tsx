import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Platform,
  Linking,
  Alert,
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
import {ScrollView} from 'react-native-gesture-handler';
import ActionButton from '../components/ActionButton';
import Features from '../components/Features';

type DetailsProps = {
  navigation: MainNavigationProp<MainRoutes.DETAILS>;
  route: MainRouteProp<MainRoutes.DETAILS>;
};

const screenWidth = Dimensions.get('screen').width;

const Details: React.FC<DetailsProps> = ({navigation, route}) => {
  const camp = toJS(CampStore.camps)[route.params.index];

  const openWebSite = (url: string) => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        Alert.alert('Ups something went wrong');
      }
    });
  };

  return (
    <SafeAreaView style={contStyles.container}>
      <ScrollView
        style={{flexGrow: 1}}
        contentContainerStyle={{width: screenWidth * 0.9, alignSelf: 'center'}}>
        <View style={styles.shadow}>
          <Image style={styles.image} source={{uri: camp.imageURLString}} />
        </View>
        <IconRow
          goBack={() => {
            navigation.goBack();
          }}
          bookmark={() => {}}
        />
        <View style={styles.dataContainer}>
          <Text style={contStyles.h1}>{camp.name}</Text>
          <Text style={contStyles.text}>{camp.region}</Text>
          <View style={{flexDirection: 'row'}}>
            {camp.phoneNumber && (
              <ActionButton
                title={camp.phoneNumber}
                btnColor={Colors.DARK_VANILLA}
                iconName={'call-outline'}
                action={() => Linking.openURL(`tel:${camp.phoneNumber}`)}
              />
            )}
            {camp.webSite && (
              <ActionButton
                title="Visit website"
                btnColor={Colors.DARK_VANILLA}
                iconName={'globe-outline'}
                action={() => openWebSite(camp.webSite)}
              />
            )}
          </View>
          <Text style={contStyles.text}>{camp.about}</Text>
          {Object.keys(camp.features).length != 0 && (
            <Features data={camp.features} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(Details);

const styles = StyleSheet.create({
  image: {
    width: screenWidth * 0.9,
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
  dataContainer: {
    marginTop: 20,
  },
});
