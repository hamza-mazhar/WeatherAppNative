import React from "react";
import { Button, Text, View } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from "./Home/home";
import SettingsScreen from "./Settings/settings";
import ShareScreen from "./Share/share";
import MapScreen from "./Map/map";
import MatIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialIcons";
const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const ShareStack = createStackNavigator(
  {
    Share: { screen: ShareScreen }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);
const MapStack = createStackNavigator(
  {
    Map: { screen: MapScreen }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);
const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const Tabnavigation = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: navigation => ({
        tabBarIcon: ({ tintColor }) => (
          // <MatIcon name="camera" color={tintColor} size={20} />
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      })
    },
    Map: {
      screen: MapStack,
      navigationOptions: navigation => ({
        tabBarIcon: ({ tintColor }) => (
          <MatIcon name="map" color={tintColor} size={30} />
        )
      })
    },
    Share: {
      screen: ShareStack,
      navigationOptions: navigation => ({
        tabBarIcon: ({ tintColor }) => (
          <MatIcon name="share" color={tintColor} size={30} />
        )
      })
    },

    Settings: {
      screen: SettingsStack,
      navigationOptions: navigation => ({
        tabBarIcon: ({ tintColor }) => (
          <MatIcon name="settings" color={tintColor} size={30} />
        )
      })
    }
  },

  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: "#f9f9f9",
      inactiveTintColor: "#515151",

      style: {
        backgroundColor: "rgba(0,0,0,0.5)"
      }
    }

    /* Other configuration remains unchanged */
  }
);

Tabnavigation.navigationOptions = {
  header: null
};

const Routes = createStackNavigator(
  {
    Home: { screen: Tabnavigation }
  },
  {
    initialRouteName: "Home"
  }
);

export default Routes;
