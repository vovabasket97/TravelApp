import { configStyles } from '@configs/style'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface MainProviderProps {
  WrappedComponent: React.ComponentType<any>
  useContainerStyles?: boolean
}

const withMainProvider = ({ WrappedComponent, useContainerStyles = true }: MainProviderProps) => {
  return (props: any) => {
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
        <View
          style={[backgroundStyle, useContainerStyles && styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}
        >
          <WrappedComponent {...props} />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: configStyles.container.padding.vertical,
    paddingHorizontal: configStyles.container.padding.horizontal,
    height: '100%',
  },
})

export default withMainProvider
