import { AttractionType } from '@configs/attractions'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AttractionDetail from '@screens/AttractionDetail/AttractionDetail'
import Gallery from '@screens/Gallery/Gallery'
import Home from '@screens/Home/Home'
import ScreenMap from '@screens/Map/ScreenMap'
import 'react-native-gesture-handler'

import withMainProvider from './src/providers/MainProvider'

const Stack = createStackNavigator()

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
}

export type navigationType = {
  Home: {}
  AttractionDetails: { attraction: AttractionType }
  Map: { attraction: AttractionType }
  Gallery: { images: { uri: string }[] }
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={withMainProvider({ WrappedComponent: Home })} />
        <Stack.Screen name="AttractionDetails" component={withMainProvider({ WrappedComponent: AttractionDetail })} />
        <Stack.Screen name="Gallery" component={withMainProvider({ WrappedComponent: Gallery })} />
        <Stack.Screen
          name="Map"
          // @ts-ignore
          component={ScreenMap}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
