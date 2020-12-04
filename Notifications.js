import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  Image,
  FlatList,
  AppRegistry,
  Alert,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FlatlistNotification from "./Components/FlatlistNotification";
export default function Notifications() {
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  };
  //handling onPress action
  getListViewItem = (item) => {
    Alert.alert(item.key);
  };

  const DATA = [
    {
      key: "1",
      title: "First Item",
      subtitle: "10 Seconds Ago",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
      />

      <View style={styles.headerContainer}>
        <View style={styles.headerImagesContainer}>
          <Image source={require("./assets/logo.png")} />
          <Image
            style={styles.logoText}
            source={require("./assets/logotext.png")}
          />
        </View>
        <View style={styles.badgeContainer}>
          <MaterialIcons name="notifications" size={22} color="#1c59cc" />
          <View style={styles.badge} />
        </View>
      </View>

      <View style={styles.flatlistContainer}>
        <FlatlistNotification />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#f7f7fc",
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: wp("5%"),
    backgroundColor: "#fff",
  },

  headerImagesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logoText: {
    marginLeft: wp("3%"),
  },

  badgeContainer: {
    flexDirection: "row",
  },

  badge: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: "red",
    position: "absolute",
    left: wp("2.6%"),
    top: hp(".1.5%"),
    borderWidth: 0.8,
    borderColor: "#fff",
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  flatlistContainer: {
    marginBottom: hp("10%"),
  },
});
