import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const DATA = [
  {
    id: "1",
    title: "Your website ",
    subtitle: "10 seconds ago",
    bold: '"Dawn News "',
    end: " uptime was 94% today",
  },
  {
    id: "2",
    title: "Your website ",
    subtitle: "10 seconds ago",
    bold: '"Daraz.pk "',
    end: ' has the response time of 498 ms today"',
  },
  {
    id: "3",
    title: "Your website ",
    subtitle: "10 seconds ago",
    bold: '"OUTFITTER "',
    end: ' is down"',
  },

  {
    id: "4",
    title: "Your website ",
    subtitle: "10 seconds ago",
    bold: '"Daraz.pk "',
    end: ' has the response time of 498 ms today"',
  },
  {
    id: "5",
    title: "Your website ",
    subtitle: "10 seconds ago",
    bold: '"Dawn News "',
    end: ' uptime was 94% today"',
  },
  {
    id: "6",
    title: "Your website ",
    subtitle: "10 seconds ago",
    bold: '"Dawn News "',
    end: ' uptime was 94% today"',
  },

  {
    id: "7",
    title: "Your website ",
    subtitle: "10 seconds ago",
    bold: '"Dawn News "',
    end: ' uptime was 94% today"',
  },
  {
    id: "8",
    title: "Your website ",
    subtitle: "10 seconds ago",
    bold: '"Dawn News "',
    end: ' uptime was 94% today"',
  },
  {
    id: "9",
    title: "Your website ",
    subtitle: "10 seconds ago",
    bold: '"Dawn News "',
    end: ' uptime was 94% today"',
  },

  {
    id: "10",
    title: "Your website ",
    subtitle: "10 seconds ago",
    bold: '"Dawn News "',
    end: ' uptime was 94% today"',
  },
];

export default class FlatlistNotification extends React.Component {
  constructor(props) {
    super(props);
  }

  ItemSeparator = () => (
    <View
      style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginLeft: 10,
        marginRight: 10,
      }}
    />
  );

  render() {
    return (
      <SafeAreaView>
        <View style={styles.notificationTitleContainer}>
          <Text style={styles.notifyBlack}>Notifications</Text>
          <Text style={styles.notifyblue}>Notifications settings</Text>
        </View>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.container}>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>
                    {item.title}
                    <Text style={styles.boldText}>{item.bold}</Text>
                    <Text>{item.end}</Text>
                  </Text>
                  <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("1%"),
    margin: 10,
    backgroundColor: "#FFF",
    borderRadius: 12,
    alignSelf: "center",
  },

  title: {
    fontSize: wp("3.5%"),
  },

  subtitle: {
    color: "#a3a4aa",
    fontSize: wp("3.1%"),
    marginTop: hp(".5%"),
  },

  textContainer: {
    marginLeft: wp("5%"),
  },
  boldText: {
    fontWeight: "bold",
  },

  notifyBlack: {
    fontWeight: "bold",
    fontSize: wp("3.5%"),
  },
  notificationTitleContainer: {
    marginLeft: wp("5%"),
    marginTop: hp("2%"),
  },

  notifyblue: {
    fontSize: wp("3%"),
    color: "#1c59cc",
    marginTop: hp("1%"),
  },

  flatlistContainer: {
    marginTop: hp("1%"),
  },
});
