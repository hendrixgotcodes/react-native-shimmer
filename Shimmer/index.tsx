import { ShimmerProps } from '../types'
import PulseShimmer from './PulseShimmer'
import WaveShimmer from './WaveShimmer'

export default function Shimmer({type="wave", ...rest}:ShimmerProps) {
  return type==="pulse" ? <PulseShimmer {...rest} /> : <WaveShimmer {...rest} />
}