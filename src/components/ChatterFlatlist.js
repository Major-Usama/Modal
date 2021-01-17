import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ChatterFlatlist({onPress,Title}) {
  const [gallery, useGallery] = useState([
    {
      id: "1",
      image: require("../images/d1.png"),
      Title: "Finding your ikigai\nin your middle age",
      name: "Jonathan Brown ",
      date: "25 Feb 2020",
    },
    {
      id: "2",
      image: require("../images/d2.png"),
      Title: "How to Lead Before\nyou are inCharge ",
      name: "Johny Vino ",
      date: "24 Feb 2020",
    },
    {
      id: "3",
      image: require("../images/d3.png"),
      Title: "Hoe Minimilism\nBrought me",
      name: "James Bond ",
      date: "23 Feb 2020",
    },
    {
      id: "4",
      image: require("../images/d4.png"),
      Title: "The most important\ncolor in UI design",
      name: "Nick babik ",
      date: "20 Feb 2020",
    },
    {
      id: "5",
      image: require("../images/d5.png"),
      Title: "Finding your ikigai in your middle age",
      name: "Mitchel Starc ",
      date: "25 Feb 2020",
    },
    {
      id: "6",
      image: require("../images/d6.png"),
      Title: "Finding your ikigai in your middle age",
      name: "Mitchel Starc ",
      date: "25 Feb 2020",
    },
    {
      id: "7",
      image: require("../images/d7.png"),
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
                <View>
                  <Image source={item.image} style={styles.image} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.musicText}>Music</Text>
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
    height: hp("15%"),
    width: wp("82%"),
    backgroundColor: "#FEFEFE",
    borderRadius: 20,
    marginVertical: hp("2%"),
    alignItems: "center",
    flexDirection: "row",
    elevation:2,
    justifyContent: "space-between",
    overflow:'hidden'
  },
  image: {
    width: wp("40%"),
    height: hp("15%"),
    borderRadius: 12,
   marginLeft:-30,
     resizeMode:'cover',
     zIndex:100

  },

  nameContainer: {
    flexDirection: "row",
    marginRight: wp("5%"),
    marginTop: hp("1%"),
    width:wp('45%'),
    justifyContent:'space-between'
  },

  name: {
    fontStyle: "italic",
    fontSize: 12,
    color: "gray",
    opacity: 0.6,
    fontWeight: "bold",
  },

  date: {
    color: "gray",
    fontStyle: "italic",
    fontSize: 12,
    fontWeight: "bold",
    opacity:0.6
  },

  title: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 18,
    color: "#000",
    
  },
  textContainer: {
    position: "absolute",
    right: wp("8%"),
    width: wp("40%"),
  },


  musicText:
  {
      fontWeight:'bold',
      color:'gray',
      opacity:0.6,
      marginBottom:hp('.8%')
  }
});
