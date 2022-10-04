import React, { useEffect, useMemo, useRef } from 'react'
import { Animated, Easing, StyleSheet, View } from 'react-native'
import { SubShimmerProps } from '../types'

export default function PulseShimmer({width, height, style}:SubShimmerProps) {

    const opacity = useRef(new Animated.Value(0)).current

    const parentContainerStyles = useMemo(()=>([styles.container,{...style as object, width, height}]),[])
    const animatedViewStyles = useMemo(()=>([
        styles.animatedView, {backgroundColor: opacity.interpolate({
            inputRange: [0,1,2],
            outputRange: ["#fafafa", "transparent", "#fafafa"]
        })}
    ]),[opacity])

    const animationTimingConfig = useMemo(()=>({
        toValue: 1,
        useNativeDriver: false,
        duration: 1500,
        easing: Easing.inOut(Easing.circle)
    }),[])

    

    useEffect(()=>Animated.loop(Animated.timing(opacity, animationTimingConfig)).start(),[])
    
  return (
    <View
        style={parentContainerStyles}
    >
        <Animated.View
            style={animatedViewStyles}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(0,0,0,0.12)", 
        overflow: "hidden"
    },
    fillParent:{
        width: "100%",
        height: "100%"
    },
    animatedView:{
        width: "100%",
        height: "100%",
        overflow: "hidden"
    }
})