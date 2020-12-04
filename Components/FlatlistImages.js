import React, { useState } from 'react';

// import all the components we are going to use
import {StyleSheet, View, FlatList, Image,Text } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const App = () => {
  const [dataSource, setDataSource] = useState([]);

 

  useState(() => {
    let items = Array.apply(null, Array(12)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
    });
    setDataSource(items);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
            <Image style={styles.imageThumbnail} source={require('../assets/cities.jpg')} />
        <Text style={{alignSelf:'center',opacity:0.5,color:'#000',marginRight:wp('4%'),
         marginBottom:hp('2%')
    }}>Bedroom</Text>
          </View>
        )}
        //Setting the number of column
        numColumns={3}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginLeft:wp('5%'),
    marginTop:hp('1%'),
   
 

    
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width:110,
    borderRadius:20,
    
  },
});
