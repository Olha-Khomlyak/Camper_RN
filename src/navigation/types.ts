import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MainRoutes, MainStackParamList } from "./routes"

//that holds all our defined routes and their annotations.
//we can now use this to annotate the navigation prop in our components
export type MainNavigationProp<RouteName extends keyof MainStackParamList = MainRoutes> = NativeStackNavigationProp<
    MainStackParamList,
    RouteName
>

export type MainRouteProp<RouteName extends keyof MainStackParamList = MainRoutes> = RouteProp<
    MainStackParamList,
    RouteName
>

export type BottomTabNavigatorParamList = {
    Home: undefined;
    Details: undefined;
    Favourites: undefined;
  };