import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import Colors from "./colors";
import { responsiveFontSize } from "../utils/ResponsiveUtils";

type Style = {
    container: ViewStyle;
    title: TextStyle;
    icon: ImageStyle;
    text: TextStyle;
    h1: TextStyle;
    subtitle: TextStyle;
};

type commonStyle = {
    textRegular: TextStyle;
    textBold: TextStyle;
}

const commonStyles: commonStyle = {
    textBold: {
      color: Colors.RICH_BLACK,
      fontFamily: 'Roboto-Bold',
    },
    textRegular: {
        color: Colors.RICH_BLACK,
        fontFamily: 'Roboto-Regular',
      },
  };

export default StyleSheet.create<Style>({
    container: {
        flex: 1,
        backgroundColor:Colors.WHITE
    },
    h1: {
        ...commonStyles.textBold,
        fontSize: responsiveFontSize(30)
    },
    title: {
        ...commonStyles.textBold,
        fontSize: responsiveFontSize(20)
    },
    subtitle: {
        ...commonStyles.textRegular,
        fontSize: responsiveFontSize(18)
    },
    text: {
        ...commonStyles.textRegular,
        fontSize: responsiveFontSize(14)
    },
    icon: {
        width: 10,
        height: 10
    }
});