import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useTranslation } from "react-i18next";

import HomeScreen from "../screens/Home";

const Stack = createStackNavigator();

export default function RootNavigator() {
  const [t] = useTranslation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={t("home-page-title")} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
