import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useMemo, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { WaveShimmerProps } from '../types'

export default function WaveShimmer({width, height, style}:WaveShimmerProps) {

    const gradientColors = useMemo(()=>["transparent", "rgba(0,0,0,0.05)", "rgba(0,0,0,0.03)", "rgba(0,0,0,0.02)", "transparent"],[])
    const gradientStartPosition = useMemo(()=>({x:1, y:1}),[])
    const translateX = useRef(new Animated.Value(-width)).current

    const parentContainerStyles = [styles.container,{width, height, ...style as object}]

    useEffect(()=>{
        Animated.loop(
            Animated.timing(translateX, {
                toValue: width,
                useNativeDriver: true,
                duration: 1500
            })
        ).start()
    },[width])
    
  return (
    <View
        style={parentContainerStyles}
    >
        <Animated.View
            style={[styles.animatedView,{transform: [{translateX}]}]}
        >
            <LinearGradient 
                colors={gradientColors}
                start={gradientStartPosition}
                style={styles.fillParent}
            />
        </Animated.View>
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