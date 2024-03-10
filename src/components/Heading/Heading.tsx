import { FC, PropsWithChildren } from 'react'
import { StyleProp, Text, TextStyle } from 'react-native'

import { styles } from './Heading.styles'

interface HeadingProps extends PropsWithChildren {
  style?: StyleProp<TextStyle>
}

const Heading: FC<HeadingProps> = ({ children, style }) => {
  return <Text style={[styles.heading, style]}>{children}</Text>
}

export default Heading
