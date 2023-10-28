import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { Image, Text, View } from "react-native";
import styles from "./appNavigation.style";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name=" "
          options={{
            headerStyle: { backgroundColor: "#1f1e2e" },
            headerTintColor: "#fff",
            headerRight: () => (
              <View style={styles.container}>
                <Text style={styles.user}>A</Text>
              </View>
            ),
            headerLeft: () => (
              <View>
                <Image
                  source={require("../assets/fizyodemi-logo.png")}
                  style={{ width: 120, height: 32 }}
                />
              </View>
            ),
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
