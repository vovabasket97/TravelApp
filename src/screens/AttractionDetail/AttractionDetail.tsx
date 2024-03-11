import { AttractionType } from '@configs/attractions'
import { StackScreenProps } from '@react-navigation/stack'
import { Text } from 'react-native'

const AttractionDetail = ({ route: { params } }: StackScreenProps<{ params: { attraction: AttractionType } }>) => {
  const { attraction } = params || {}

  return <Text>Attraction detail: {attraction.title}</Text>
}

export default AttractionDetail
