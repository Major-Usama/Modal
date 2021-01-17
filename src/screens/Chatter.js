import React from 'react'
import { StyleSheet, Text, View,Platform,StatusBar, SafeAreaView } from 'react-native'
import ChatterFlatlist from '../components/ChatterFlatlist'

export default function Chatter() {
    return (
        <SafeAreaView style={styles.container}>

           <ChatterFlatlist />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

container:
{
    flex:1,
    paddingTop:Platform.OS==='android'?StatusBar.currentHeight:0,
    borderStartColor:'#000'
}

})
