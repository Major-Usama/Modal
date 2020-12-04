import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#1c59cc"
        translucent={true}
      />

      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("./assets/splash.png")} />
      </View>

      <View>
        <View style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </View>

        <View style={styles.registerButton}>
          <Text style={{ ...styles.loginText, color: "#fff" }}>Register</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#1c59cc",
    flex: 1,
  },

  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.5,
  },

  logo: {
    width: wp("50%"),
    height: hp("50%"),
  },

  loginButton: {
    width: wp("50%"),
    height: hp("7%"),
    backgroundColor: "#fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  registerButton: {
    width: wp("50%"),
    height: hp("7%"),
    backgroundColor: "#1c59cc",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp("4%"),
  },

  loginText: {
    color: "#1c59cc",
    fontWeight: "bold",
  },
});
