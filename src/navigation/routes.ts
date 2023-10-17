import { createNativeStackNavigator } from "@react-navigation/native-stack"

// an enum of all the screens we register in our routing setup, which will allow us to refer to screens via MainRoutes
export enum MainRoutes {
    // Home Stack
    HOME = "Home",
    DETAILS = "Details"
}

// type for all screens. undefined means, that this route does not expect any params.

export type MainStackParamList = {
    // Home  Stack
    [MainRoutes.HOME] : undefined
    [MainRoutes.DETAILS] : {id: string}

}

export const MainStack = createNativeStackNavigator<MainStackParamList>()
