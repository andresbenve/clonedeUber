import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import Map from "../components/Map";

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <Text>Here is the map stuff...</Text>
      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
