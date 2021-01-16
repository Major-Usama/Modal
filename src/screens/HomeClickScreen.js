import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function HomeClickScreen({ navigation,route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="ios-arrow-back"
          size={30}
          color="black"
        />

        <View style={styles.iconsRow}>
          <View style={styles.IconContainer}>
            <Feather name="upload" size={16} color="gray" />
          </View>

          <View style={styles.IconContainer}>
            <Feather name="heart" size={16} color="gray" />
          </View>

          <View style={styles.IconContainer}>
            <Feather name="bookmark" size={16} color="gray" />
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Finding your ikigai{"\n"}in your middle age
          </Text>
          <View style={styles.nameContainer}>
            <View style={styles.headerImageContainer}>
              <Image
                style={styles.headerImage}
                resizeMode="contain"
                source={require("../icons/man.png")}
              />
            </View>
            <Text style={styles.name}>Jonathan Brown </Text>
            <Text style={styles.date}>25 Feb 2020</Text>
          </View>

          <View style={styles.ViewlikesSaves}>
            <View style={styles.ViewsContainer}>
              <Feather name="eye" size={10} color="gray" />
              <Text style={styles.ViewsText}>6.5K Views</Text>
            </View>

            <View style={styles.ViewsContainer}>
              <Ionicons name="ios-heart" size={10} color="gray" />
              <Text style={styles.ViewsText}>106 Likes</Text>
            </View>

            <View style={styles.ViewsContainer}>
              <Ionicons name="ios-bookmark" size={10} color="gray" />
              <Text style={styles.ViewsText}>58 Saves</Text>
            </View>
          </View>
        </View>

        <Image style={styles.mainImage} source={require("../images/U1.jpg")} />

        <View style={styles.randomText}>
          <Text style={styles.detailText}>
            <Text style={{ fontWeight: "bold", fontSize: 22 }}>Lorem</Text>{" "}
            Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp("10%"),
    marginTop: hp("6%"),
  },
  iconsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("23%"),
    justifyContent: "space-between",
  },
  IconContainer: {
    width: 25,
    height: 25,
    backgroundColor: "#F3F3F5",
    justifyContent: "center",
    alignItems: "center",
  },

  nameContainer: {
    flexDirection: "row",
    marginRight: wp("5%"),
    marginTop: hp("1%"),
    alignItems: "center",
  },

  name: {
    fontStyle: "italic",
    fontSize: 14,
    color: "#000",
    opacity: 0.8,
    fontWeight: "bold",
  },

  date: {
    color: "#DCDCDE",
    fontStyle: "italic",
    fontSize: 14,
    fontWeight: "bold",
  },

  title: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 28,
    color: "#000",
    opacity: 0.6,
  },
  textContainer: {
    marginHorizontal: wp("9%"),
    marginTop: hp("5%"),
  },
  headerImageContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#531115",
    marginRight: 5,
  },

  headerImage: {
    width: 16,
    height: 16,
  },

  ViewlikesSaves: {
    flexDirection: "row",
    marginTop: hp(".4%"),
  },

  ViewsText: {
    color: "gray",
    fontSize: 9,
    marginLeft: wp("1%"),
  },
  ViewsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: wp("18%"),
  },
  mainImage: {
    width: wp("82%"),
    height: hp("30%"),
    alignSelf: "center",
    borderRadius: 12,
    marginTop: hp("3%"),
  },

  randomText: {
    width: wp("80%"),
    alignSelf: "center",
    marginTop: hp("4%"),
  },
  detailText: {
    color: "#000",
    opacity: 0.7,
    textAlign: "justify",
    fontSize: 18,
    fontStyle: "italic",
  },
});
