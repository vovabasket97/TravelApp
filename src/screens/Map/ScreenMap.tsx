import ChavronLeft from '@assets/svgComponents/ChavronLeft.tsx'
import RoundedButton from '@components/Buttons/RoundedButton/RoundedButton.tsx'
import { configStyles } from '@configs/style.ts'
import { StackScreenProps } from '@react-navigation/stack'
import { Pressable, SafeAreaView, Text, View, useWindowDimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import { navigationType } from '../../../App.tsx'

import { styles } from './ScreenMap.styles.ts'

const ScreenMap = ({ route: { params }, navigation }: StackScreenProps<navigationType, 'Map'>) => {
  const { attraction } = params || {}

  const { width } = useWindowDimensions()

  if (!attraction) return <Text>Attraction not found!</Text>

  return (
    <>
      <SafeAreaView style={[styles.container, styles.float]}>
        <View style={[styles.backWrapper, { width: width - configStyles.container.padding.horizontal * 2 }]}>
          <Pressable onPress={() => navigation.goBack()}>
            <RoundedButton style={styles.iconWrapper}>
              <ChavronLeft style={styles.icon} />
              <Text>Back</Text>
            </RoundedButton>
          </Pressable>
          <Text style={styles.location} lineBreakStrategyIOS="push-out">
            {attraction.fullLocation}
          </Text>
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: attraction.coordinates.lat,
            longitude: attraction.coordinates.lon,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: attraction.coordinates.lat,
              longitude: attraction.coordinates.lon,
            }}
            title={attraction.title}
            description={attraction.fullLocation}
          />
        </MapView>
      </View>
    </>
  )
}

export default ScreenMap
