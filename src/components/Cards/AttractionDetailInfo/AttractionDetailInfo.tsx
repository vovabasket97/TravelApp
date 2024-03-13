import { FC, PropsWithChildren } from 'react'
import { Text, View } from 'react-native'

import { styles } from './AttractionDetailInfo.styles.ts'

interface AttractionDetailInfoProps extends PropsWithChildren {
  iconComponent: (props: any) => React.JSX.Element
}

const AttractionDetailInfo: FC<AttractionDetailInfoProps> = ({ iconComponent: IconComponent, children }) => {
  return (
    <View style={styles.container}>
      <IconComponent width={16} height={16} style={styles.icon} />
      <Text lineBreakStrategyIOS="push-out" style={styles.text}>
        {children}
      </Text>
    </View>
  )
}

export default AttractionDetailInfo
