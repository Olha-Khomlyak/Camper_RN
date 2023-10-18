import {View, Text, Pressable, StyleSheet, Platform, Linking, Alert} from 'react-native';
import React from 'react';
import {color} from '@rneui/base';
import {Icon} from '@rneui/themed';

interface ActionProps {
  title: string;
  btnColor: string;
  iconName: string;
  action: () => void
}


const ActionButton: React.FC<ActionProps> = props => {
  return (
    <Pressable style={[styles.container, styles.shadow, {backgroundColor: props.btnColor}]} onPress={props.action}>
      <Icon name={props.iconName} type="ionicon" size={15}  iconStyle={{paddingRight:5}}/>
      <Text>{props.title}</Text>
    </Pressable>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding:5, 
    marginVertical:10,
    marginRight:10
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
