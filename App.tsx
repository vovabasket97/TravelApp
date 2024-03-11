import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AttractionDetail from '@screens/AttractionDetail/AttractionDetail'
import Gallery from '@screens/Gallery/Gallery'
import Home from '@screens/Home/Home'
import 'react-native-gesture-handler'

import withMainProvider from './src/providers/MainProvider'

const Stack = createStackNavigator()

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={withMainProvider({ WrappedComponent: Home, useContainerStyles: false })} />
        <Stack.Screen name="AttractionDetails" component={withMainProvider({ WrappedComponent: AttractionDetail })} />
        <Stack.Screen name="Gallery" component={withMainProvider({ WrappedComponent: Gallery })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
