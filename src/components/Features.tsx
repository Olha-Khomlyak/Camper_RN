import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../constnats/styles';
import {Icon} from '@rneui/themed';

type featureType = {
  [key: string]: string[];
};

interface FeatureProp {
  data: featureType;
}

const Features: React.FC<FeatureProp> = props => {
  useEffect(() => {
    console.log(props.data);
  }, []);

  return (
    <View>
      <Text style={[styles.title, {marginVertical:5}]}>Features</Text>
      <View style={{}}>
        {Object.keys(props.data).map(key => (
          <View key={key}>
            <Text style={[styles.subtitle, {textDecorationLine: 'underline'}]}>{key}:</Text>
            <View style={stylesLocal.rowStyle}>
              {props.data[key].map((item, index) => (
                <View style={stylesLocal.item}>
                  <Icon
                    name="checkmark-outline"
                    type="ionicon"
                    style={{padding: 0, margin: 0}}
                  />
                  <Text key={index}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Features;

const stylesLocal = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    padding: 10,
    flexWrap:'wrap', 
    width:'100%'  
  },
  item: {
    flexDirection: 'row',
    margin: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
 
  },
});
