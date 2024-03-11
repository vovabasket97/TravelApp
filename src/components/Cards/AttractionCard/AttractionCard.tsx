import { configStyles } from '@configs/style.ts'
import { FC } from 'react'
import { Image, ImageSourcePropType, Text, View, useWindowDimensions } from 'react-native'

import { styles } from './AttractionCard.styles.ts'

interface AttractionCardProps {
  imageSource: ImageSourcePropType
  title: string
  location: string
}

const AttractionCard: FC<AttractionCardProps> = ({ imageSource, title, location }) => {
  const { height, width } = useWindowDimensions()

  return (
    <View style={[styles.card, { width: configStyles.container.getContainerWidth(width) / 2 - configStyles.attractionsGrid.gap / 2 }]}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.heading}>{title}</Text>
        <View style={styles.location}>
          <Image source={require('../../../assets/map-pin.png')} style={styles.icon} />
          <Text style={styles.subHeading}>{location}</Text>
        </View>
      </View>
    </View>
  )
}

export default AttractionCard
