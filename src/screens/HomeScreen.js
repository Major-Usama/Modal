import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import FlatlistCards from "../components/FlatlistCards";
import Navigation from "../navigation/Navigation";

export default function HomeScreen({navigation}) {
  const [value, onChangeText] = React.useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Daily Prompt</Text>

        <View style={styles.mainContainer}>
          <View style={styles.headerImageContainer}>
            <Image
              style={styles.headerImage}
              resizeMode="contain"
              source={require("../icons/man.png")}
            />
          </View>

          <View style={styles.bellIconContainer}>
            <EvilIcons name="bell" size={20} color="black" />
            <View style={styles.badge} />
          </View>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <EvilIcons name="search" size={26} color="gray" />
        <TextInput
          placeholder="Search for articles, authors, and tags "
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>

      <Text style={styles.dailyReadText}>Your Daily Read</Text>
      <FlatlistCards 
      
      onPress={()=>navigation.navigate('HomeClickScreen')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },

  headerContainer: {
    marginTop: heightPercentageToDP("6%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  headerText: {
    fontWeight: "bold",
    fontSize: 28,
    fontStyle: "italic",
  },

  headerImageContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0DBD7",
  },

  headerImage: {
    width: 18,
    height: 18,
  },

  bellIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0DBD7",
  },

  badge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D33F63",
    position: "absolute",
    right: 0,
    top: -3,
  },

  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: widthPercentageToDP("18%"),
  },

  searchContainer: {
    width: widthPercentageToDP("80%"),
    height: heightPercentageToDP("6.5%"),
    backgroundColor: "#F3F3F5",
    alignItems: "center",
    borderRadius: 14,
    alignSelf: "center",
    marginTop: heightPercentageToDP("4%"),
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 10,
  },

  input: {
    width: widthPercentageToDP("70%"),
    height: heightPercentageToDP("6.5%"),
    padding: 10,
  },

  dailyReadText: {
    fontWeight: "bold",
    fontSize: 20,
    fontStyle: "italic",
    marginTop: heightPercentageToDP("3%"),
    marginHorizontal: heightPercentageToDP("6%"),
  },
});
