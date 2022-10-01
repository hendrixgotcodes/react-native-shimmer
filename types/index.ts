import { StyleProp, ViewStyle } from "react-native";

export interface WaveShimmerProps{
    width: number,
    height: number,
    style?: StyleProp<ViewStyle>
}

export interface PulseShimmerProps{
   
}

export interface ShimmerProps{
    type?: "pulse"|"wave",
    width:number, 
    height:number,
    style?: StyleProp<ViewStyle>
}
