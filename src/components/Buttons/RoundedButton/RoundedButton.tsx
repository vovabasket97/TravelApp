import { FC, PropsWithChildren } from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'

import { styles } from './RoundedButton.styles.ts'

interface RoundedButtonProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>
}

const RoundedButton: FC<RoundedButtonProps> = ({ children, style }) => {
  return <View style={[styles.btn, style]}>{children}</View>
}

export default RoundedButton
