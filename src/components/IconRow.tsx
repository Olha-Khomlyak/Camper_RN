import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Icon} from '@rneui/themed';
import Colors from '../constnats/colors';

const screenWidth = Dimensions.get('screen').width;
const iconsContainerSize = 40
const iconSize = 30

interface IconProps {
  bookmark: () => void;
  goBack: () => void;
}

const IconRow: React.FC<IconProps> = props => {
  return (
    <View style={styles.iconsViewContainer}>
      <Icon
        name="chevron-back-outline"
        type="ionicon"
        size={iconSize}
        color={Colors.GRAY_ASPARAGUS}
        onPress={props.goBack}
        containerStyle={styles.iconContainer}
      />
      <Icon
        name="bookmark-outline"
        type="ionicon"
        size={iconSize}
        color={Colors.GRAY_ASPARAGUS}
        onPress={props.goBack}
        containerStyle={styles.iconContainer}
      />
    </View>
  );
};

export default IconRow;

const styles = StyleSheet.create({
  iconsViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: screenWidth * 0.85,
    position: 'absolute',
    top: 15,
  },
iconContainer: {
    backgroundColor: Colors.WHITE_TRANSPARENT,
    justifyContent: 'center',
    alignItems: 'center',
    height: iconsContainerSize,
    width:iconsContainerSize,
    borderRadius: 50,

}
});
