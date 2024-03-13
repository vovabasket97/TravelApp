import MapPin from '@assets/svgComponents/MapPin.tsx'
import { configStyles } from '@configs/style.ts'
import { FC } from 'react'
import { Image, ImageSourcePropType, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'

import { styles } from './AttractionCard.styles.ts'

interface AttractionCardProps {
  imageSource: ImageSourcePropType
  title: string
  location: string
  onPress?: () => void
}

const AttractionCard: FC<AttractionCardProps> = ({ imageSource, title, location, onPress }) => {
  const { width } = useWindowDimensions()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.card, { width: configStyles.container.getContainerWidth(width) / 2 - configStyles.attractionsGrid.gap / 2 }]}
    >
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text numberOfLines={2} lineBreakStrategyIOS="push-out" style={styles.heading}>
          {title}
        </Text>
        <View style={styles.location}>
          <MapPin style={styles.icon} width={12} height={12} />
          <Text lineBreakStrategyIOS="push-out" style={styles.subHeading}>
            {location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default AttractionCard
