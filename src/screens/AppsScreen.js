import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import FlatlistImages from "../../Components/FlatlistImages";

export default function AnasScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
      />

      <View
        style={{
          backgroundColor: "#ECF6FF",
          borderStyle: "dotted",
          width: "100%",
          paddingVertical: hp("2%"),
          borderColor: "#A2BCD6",
          borderWidth: 2,
          borderRadius: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-around",
            marginTop: hp("-4%"),
          }}
        >
          <View>
            <View style={styles.topLogoContainer}>
              <Image
                style={styles.sheildImage}
                source={require("../../assets/shield.png")}
              />
              <Text style={styles.safetyText}>Safety Assured</Text>
            </View>

            <View style={{ marginBottom: hp("3%") }}>
              <Text style={styles.awesomeText}>Awesome Furniture.</Text>
              <Text style={styles.deliverText}>Delivered Safe</Text>
            </View>
          </View>
          <Image
            style={{ width: wp("30%"), height: hp("15%"), marginTop: hp("2%") }}
            source={require("../../assets/h1.png")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: hp("2%"),
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              elevation: 4,
              width: wp("45%"),
              height: hp("12.5%"),
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              padding: 10,
              paddingBottom: 25,
            }}
          >
            <Image
              source={require("../../assets/avatar-1.jpg")}
              style={{ width: 55, height: 55, borderRadius: 27.5 }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  opacity: 0.9,
                  fontSize: 11,
                  marginRight: 10,
                }}
              >
                Sanitised{"\n"}Furnitured and{"\n"}Appliances
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                <Text
                  style={{ color: "#325B89", fontWeight: "bold", fontSize: 11 }}
                >
                  Know More
                </Text>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#325B89",
                    marginLeft: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Entypo name="chevron-small-right" size={10} color="#fff" />
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#fff",
              elevation: 4,
              width: wp("45%"),
              height: hp("12.5%"),
              borderRadius: 8,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              padding: 10,
              paddingBottom: 25,
            }}
          >
            <Image
              source={require("../../assets/avatar-3.jpg")}
              style={{ width: 55, height: 55, borderRadius: 27.5 }}
            />
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  opacity: 0.9,
                  fontSize: 11,
                  marginRight: 10,
                }}
              >
                Sanitised{"\n"}Furnitured and{"\n"}Appliances
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 1,
                }}
              >
                <Text
                  style={{ color: "#325B89", fontWeight: "bold", fontSize: 11 }}
                >
                  Know More
                </Text>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#325B89",
                    marginLeft: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Entypo name="chevron-small-right" size={10} color="#fff" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View></View>

      <View
        style={{
          backgroundColor: "#fff",
          elevation: 5,
          width: wp("90%"),
          alignSelf: "center",
          marginTop: hp("3%"),
          paddingVertical: hp("2%"),
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Entypo
            name="github-with-circle"
            size={30}
            color="#2E6F9F"
            style={{ marginLeft: wp("4%") }}
          />

          <Text
            style={{
              marginHorizontal: wp("4%"),
              color: "gray",
              fontSize: wp("3.8%"),
              textAlign: "left",
            }}
          >
            Go rent-free for 4 months.Get flat 50% off{"\n"}per month. Hurry!
            Offer ends at midnight.{"\n"}T&C apply.
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          opacity: 0.6,
          marginLeft: wp("5%"),
          marginTop: hp("2%"),
        }}
      >
        Explore Products
      </Text>
      <FlatlistImages />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#fff",
  },

  safetyText: {
    color: "#4E8BB7",
    fontWeight: "bold",
    marginLeft: wp("2%"),
    fontSize: 12.5,
    marginBottom: hp("1%"),
  },

  sheildImage: {
    width: wp("4%"),
    height: hp("2%"),
  },

  topLogoContainer: {
    flexDirection: "row",
  },

  awesomeText: {
    fontWeight: "bold",
    fontSize: 18,
    opacity: 0.8,
  },
  deliverText: {
    fontWeight: "bold",
    fontSize: 18,
    opacity: 0.8,
  },
});
