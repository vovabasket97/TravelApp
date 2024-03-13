import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const ChavronLeft = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m15 6-6 6 6 6" />
  </Svg>
)
export default ChavronLeft
