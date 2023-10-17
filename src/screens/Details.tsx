import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {MainNavigationProp, MainRouteProp} from '../navigation/types';
import {MainRoutes} from '../navigation/routes';

type DetailsProps = {
  navigation: MainNavigationProp<MainRoutes.DETAILS>;
  route: MainRouteProp<MainRoutes.DETAILS>;
};

const Details: React.FC<DetailsProps> = ({navigation, route}) => {

  useEffect(() => {
    console.log(route.params.id);
  }, []);

  return (
    <View>
      <Text>Details:</Text>
    </View>
  );
};

export default Details;
