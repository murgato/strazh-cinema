import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Main } from "./tabs/Main";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tabs = createBottomTabNavigator();

export function Home() {
  return (
    // Criação da navegação das tabs no home
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#140D24",
          borderTopStartRadius: 12,
          borderTopEndRadius: 12,
          padding: 10,
          height: 60,
        },
      //  tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#E6BA20",
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
        name="home"
        component={Main}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="movie-open-outline"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
        name="Movie"
        component={Main}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="star" size={size} color={color} />
          ),
          headerShown: false,
        }}
        name="favorite"
        component={Main}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
        name="profile"
        component={Main}
      />
    </Tabs.Navigator>
  );
}
