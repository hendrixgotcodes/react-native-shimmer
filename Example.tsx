import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ShimmerProps } from './types'
import Shimmer from './Shimmer'

export default function Example() {
  return (
    <View style={styles.container}>
      <View style={cardStyles.container}>
        <Shimmer 
            width={32}
            height={32}
            style={{borderRadius: 30, marginBottom: 10}}
        />
        <Shimmer 
            width={165}
            height={100}
            style={{borderRadius: 5, marginBottom: 10}}
        />
        <Shimmer 
            width={165}
            height={10}
            style={{borderRadius: 5, marginBottom: 10}}
        />
      </View>

      <View style={styles.divider} />

      <View style={cardStyles.container}>
        <Shimmer 
            width={32}
            height={32}
            style={{borderRadius: 30, marginBottom: 10}}
            type="pulse"
        />
        <Shimmer 
            width={165}
            height={100}
            style={{borderRadius: 5, marginBottom: 10}}
            type="pulse"
        />
        <Shimmer 
            width={165}
            height={10}
            style={{borderRadius: 5, marginBottom: 10}}
            type="pulse"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    divider:{
        marginVertical: 10
    },
})

const cardStyles = StyleSheet.create({
    container:{
        width: 180,
        height: 180,
        elevation: 3,
        shadowOffset: {
            height: 3,
            width: 0
        },
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 1,
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 8
    }
})