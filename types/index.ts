import { StyleProp, ViewStyle } from "react-native";

export interface SubShimmerProps {
  width: number;
  height: number;
  style?: StyleProp<ViewStyle>;
}

export interface ShimmerProps {
  type?: "pulse" | "wave";
  width: number;
  height: number;
  style?: StyleProp<ViewStyle>;
}
