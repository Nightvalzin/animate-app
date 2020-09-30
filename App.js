import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import Home from "./screens/Home";
import animationExercise from "./screens/animationExercise";

const Drawer = createDrawerNavigator();
const RootTab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <RootTab.Navigator
      tabBarOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <RootTab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Entypo name="air" size={28} color={focused ? "blue" : "gray"} />
          ),
        }}
      />
      <RootTab.Screen
        name="Animations"
        component={animationExercise}
        options={{
          title: "Animations",
          tabBarIcon: ({ focused }) => (
            <Entypo name="air" size={28} color={focused ? "blue" : "gray"} />
          ),
        }}
      />
    </RootTab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Animations" component={animationExercise} />
      <Drawer.Screen name="Drawer" component={RootTabNavigator} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
