import { StyleProp, ViewStyle } from "react-native";

export interface WaveShimmerProps{
    width: number|string,
    height: number|string,
    style?: StyleProp<ViewStyle>
}

export interface PulseShimmerProps{
   
}

export interface ShimmerProps{
    type?: "pulse"|"wave",
    width:number|string, 
    height:number|string,
    style?: StyleProp<ViewStyle>
}
