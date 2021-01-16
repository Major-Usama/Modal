import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function FlatlistCards({onPress,Title}) {
  const [gallery, useGallery] = useState([
    {
      id: "1",
      image: require("../images/U1.jpg"),
      Title: "Finding your ikigai\nin your middle age",
      name: "Jonathan Brown ",
      date: "25 Feb 2020",
    },
    {
      id: "2",
      image: require("../images/U2.jpg"),
      Title: "How to Lead Before\nyou are inCharge ",
      name: "Johny Vino ",
      date: "24 Feb 2020",
    },
    {
      id: "3",
      image: require("../images/U3.jpg"),
      Title: "Hoe Minimilism\nBrought me",
      name: "James Bond ",
      date: "23 Feb 2020",
    },
    {
      id: "4",
      image: require("../images/U4.jpg"),
      Title: "The most important\ncolor in UI design",
      name: "Nick babik ",
      date: "20 Feb 2020",
    },
    {
      id: "5",
      image: require("../images/U5.jpg"),
      Title: "Finding your ikigai in your middle age",
      name: "Mitchel Starc ",
      date: "25 Feb 2020",
    },
    {
      id: "6",
      image: require("../images/U6.jpg"),
      Title: "Finding your ikigai in your middle age",
      name: "Mitchel Starc ",
      date: "25 Feb 2020",
    },
    {
      id: "7",
      image: require("../images/U1.jpg"),
      Title: "Finding your ikigai in your middle age",
      name: "Mitchel Starc ",
      date: "25 Feb 2020",
    },
  ]);

  return (
    <View style={styles.mainWrapper}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={gallery}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={onPress}>
              <View style={styles.card}>
                <View style={styles.img}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.Title}</Text>
                  <View style={styles.nameContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: wp("80%"),
                  height: 0.8,
                  backgroundColor: "#ccc",
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    marginTop: wp("1%"),
    alignSelf: "center",
  },
  card: {
    height: hp("11%"),
    width: wp("80%"),
    backgroundColor: "#FEFEFE",
    borderRadius: 20,
    marginVertical: hp("2%"),
    alignItems: "center",
    flexDirection: "row",

    justifyContent: "space-between",
  },
  image: {
    width: wp("32%"),
    height: hp("11s%"),
    borderRadius: 12,
  },

  nameContainer: {
    flexDirection: "row",
    marginRight: wp("5%"),
    marginTop: hp("1%"),
  },

  name: {
    fontStyle: "italic",
    fontSize: 12,
    color: "#000",
    opacity: 0.6,
    fontWeight: "bold",
  },

  date: {
    color: "#DCDCDE",
    fontStyle: "italic",
    fontSize: 12,
    fontWeight: "bold",
  },

  title: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 18,
    color: "#000",
    opacity: 0.6,
  },
  textContainer: {
    position: "absolute",
    right: wp("1%"),
    width: wp("40%"),
  },
});
