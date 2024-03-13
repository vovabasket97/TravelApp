import ChavronLeft from '@assets/svgComponents/ChavronLeft'
import RoundedButton from '@components/Buttons/RoundedButton/RoundedButton'
import { StackScreenProps } from '@react-navigation/stack'
import { FlatList, Image, Text, View } from 'react-native'

import { navigationType } from '../../../App'

import { styles } from './Gallery.styles'

const Gallery = ({ route: { params }, navigation }: StackScreenProps<navigationType, 'Gallery'>) => {
  const { images } = params || {}

  if (!images || !images.length) return <Text>Images not found!</Text>

  return (
    <View>
      <RoundedButton style={styles.iconWrapper}>
        <ChavronLeft width="100%" height="100%" style={styles.icon} onPress={() => navigation.goBack()} />
      </RoundedButton>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.gallery}
        data={images}
        renderItem={({ item, index }) => <Image source={item} style={[styles.image, index === 0 && styles.firstImage]} />}
      />
    </View>
  )
}

export default Gallery
