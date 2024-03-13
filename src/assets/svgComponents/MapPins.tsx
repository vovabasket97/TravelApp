import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const MapPins = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-map-pins"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10.828 9.828a4 4 0 1 0-5.656 0L8 12.657l2.828-2.829zM8 7v.01M18.828 17.828a4 4 0 1 0-5.656 0L16 20.657l2.828-2.829zM16 15v.01" />
  </Svg>
)
export default MapPins
