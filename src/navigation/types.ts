import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
    Home: undefined,
    Details: {
        name:string,
        birthYear:string
    }
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Details'
>;

export type DetailsScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Details'
>;

export type BottomTabNavigatorParamList = {
    Home: undefined;
    Details: undefined;
    Favourites: undefined;
  };