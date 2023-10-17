import { StyleSheet, TextStyle, ViewStyle, ImageStyle } from "react-native";
import Colors from "./colors";
import { responsiveFontSize } from "../utils/ResponsiveUtils";

type Style = {
    container: ViewStyle;
    title: TextStyle;
    icon: ImageStyle;
    text: TextStyle;
    h1: TextStyle;
};

export default StyleSheet.create<Style>({
    container: {
        flex: 1
    },
    title: {
        color: Colors.RICH_BLACK,
        fontFamily: 'Roboto-Bold',
        fontSize: responsiveFontSize(50)
    },
    h1: {
        color: Colors.RICH_BLACK,
        fontFamily: 'Roboto-Bold',
        fontSize: responsiveFontSize(70)
    },
    text: {
        color: Colors.RICH_BLACK,
        fontFamily: 'Roboto-Regular',
        fontSize: responsiveFontSize(40)
    },
    icon: {
        width: 10,
        height: 10
    }
});