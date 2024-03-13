import ChavronLeft from '@assets/svgComponents/ChavronLeft'
import Clock from '@assets/svgComponents/Clock'
import MapPin from '@assets/svgComponents/MapPin'
import ShareIcon from '@assets/svgComponents/Share'
import RoundedButton from '@components/Buttons/RoundedButton/RoundedButton'
import AttractionDetailInfo from '@components/Cards/AttractionDetailInfo/AttractionDetailInfo'
import Heading from '@components/Heading/Heading'
import { configStyles } from '@configs/style'
import { StackScreenProps } from '@react-navigation/stack'
import { Image, ImageBackground, Pressable, Text, View, useWindowDimensions } from 'react-native'
import Share from 'react-native-share'

import { navigationType } from '../../../App'

import { styles } from './AttractionDetail.styles'

const AttractionDetail = ({ route: { params }, navigation }: StackScreenProps<navigationType, 'AttractionDetails'>) => {
  const { attraction } = params || {}

  const { height } = useWindowDimensions()

  if (!attraction) return <Text>Attraction not found!</Text>

  const previewImages = attraction.images.slice(0, 4)
  const additationImagesLength = attraction.images.length - previewImages.length

  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={styles.image}
        style={[styles.imageContainer, { maxHeight: height / 2 - configStyles.container.padding.vertical * 2 }]}
        source={attraction.imageSource}
      >
        <View style={styles.header}>
          <RoundedButton style={styles.iconWrapper}>
            <ChavronLeft width="100%" height="100%" style={styles.icon} onPress={() => navigation.goBack()} />
          </RoundedButton>
          <RoundedButton style={styles.iconWrapper}>
            <ShareIcon
              width="100%"
              height="100%"
              style={styles.icon}
              onPress={() => {
                Share.open({
                  title: attraction.title,
                  message: `Visit the interesting place in ${attraction.fullLocation}`,
                })
              }}
            />
          </RoundedButton>
        </View>
        <Pressable style={styles.gallery} onPress={() => navigation.navigate('Gallery', { images: attraction.images })}>
          {previewImages.map((image, index) => (
            <View key={image.uri + index}>
              <Image source={image} style={styles.galleryItem} />
              {index === previewImages.length - 1 && additationImagesLength !== 0 && (
                <View style={styles.addImagesContainer}>
                  <Text style={styles.addImages}>+{additationImagesLength}</Text>
                </View>
              )}
            </View>
          ))}
        </Pressable>
      </ImageBackground>
      <View style={styles.infoHeader}>
        <View style={styles.titles}>
          <Heading style={styles.heading}>{attraction.title}</Heading>
          <Text style={styles.location}>{attraction.location}</Text>
        </View>
        <Text style={styles.price}>${attraction.price}</Text>
      </View>
      <View style={styles.addInfo}>
        <AttractionDetailInfo iconComponent={MapPin}>{attraction.fullLocation}</AttractionDetailInfo>
        <AttractionDetailInfo iconComponent={Clock}>{attraction.timeWorking}</AttractionDetailInfo>
      </View>
    </View>
  )
}

export default AttractionDetail
