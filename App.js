import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, TouchableHighlight, View, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>


            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "tomato" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>


            <View style={styles.recentView}>
              <Text style={styles.modalTopText}>Recent Files</Text>
              <MaterialCommunityIcons name='file-tree' size={20} color="#A9ACB4" />
            </View>


            <View style={styles.listView}>
              <View style={styles.iconRow}>
                <Image source={require('./assets/right.png')} style={styles.icon} />
                <View style={styles.text1View}>
                  <Text numberOfLines={1} style={styles.dtp}>Design Thinking Process{'\t'}
                    <Text style={styles.pdf}>PDF</Text>
                  </Text>
                  <Text style={styles.bottomText}>Opened By me Feb 27</Text>
                </View>

              </View>
            </View>

            <View style={styles.listView}>
              <View style={styles.iconRow}>
                <Image source={require('./assets/task2.png')} style={styles.icon} />
                <View style={styles.text1View}>
                  <Text numberOfLines={1} style={styles.dtp}>Ture Photos{'\t'}
                    <Text style={styles.pdf}>JPEG</Text>
                  </Text>
                  <Text style={styles.bottomText}>Opened By me Feb 16
            </Text>
                </View>

              </View>
            </View>


            <View style={styles.listView}>
              <View style={styles.iconRow}>
                <Image source={require('./assets/bright.png')} style={styles.icon} />
                <View style={styles.text1View}>
                  <Text numberOfLines={1} style={styles.dtp}>Crypto Dashboard{'\t'}
                    <Text style={styles.pdf}>XD</Text>
                  </Text>
                  <Text style={styles.bottomText}>Opened By me Feb 02</Text>
                </View>





              </View>
            </View>


          </View>
        </View>
      </Modal>


      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>

    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: hp('3.5%'),
    backgroundColor: "#343851"
  },
  modalView: {
    width: '100%',
    height: '60%',
    marginTop: '90%',
    backgroundColor: "#EDEEF3",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "orange",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    bottom: hp('3%')
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  },


  modalTopText:
  {
    fontSize: wp('6%'),
    fontWeight: "bold",

    color: '#898EAA'
  },

  recentView:
  {
    width: wp('90%'),
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: hp('1%'),


  },




  listView: {
    width: wp('90%'),
    height: hp('10%'),
    backgroundColor: "#fff",
    marginTop: hp('3.5%'),
    borderRadius: 20,
    justifyContent: "center",
    alignItems: 'center',

  },
  icon: {

    borderRadius: 20,
    marginLeft: wp('4%'),
    height: hp('8%'),
    width: wp('15%')
  },
  dtp: {

    color: "#777B99",
    fontSize: wp('3.5%'),
    fontWeight: "bold"
  },
  bottomText: {

    marginTop: hp('0.8%'),
    color: "#D6D6D8",
    fontSize: wp('3.5%')
  },
  text1View: {
    width: wp('50%'),
    marginLeft: wp('4%')
  },
  pdf: {
    color: "#D6D6D8",




  },
  iconRow: {

    flexDirection: "row",
    marginLeft: wp('3%'),
    marginRight: wp('26%')
  }

});

export default App;