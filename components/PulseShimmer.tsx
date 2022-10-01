import React, { useEffect, useRef, useMemo } from 'react'
import { Animated, Easing, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

export default function PulseShimmer({width, height, style}:{width:number, height:number, style?: StyleProp<ViewStyle>}) {

    const opacity = useRef(new Animated.Value(0)).current

    const parentContainerStyles = useMemo(()=>([styles.container,{width, height, ...style as object}]),[])
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

    

    useEffect(()=>Animated.loop(Animated.timing(opacity, animationTimingConfig)).start(),[width])
    
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