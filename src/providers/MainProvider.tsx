import { configStyles } from '@configs/style'
import { FC, PropsWithChildren } from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const MainProvider: FC<PropsWithChildren & { useContainerStyles?: boolean }> = ({ children, useContainerStyles = true }) => {
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
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: configStyles.container.padding.vertical,
    paddingHorizontal: configStyles.container.padding.horizontal,
  },
})

export default MainProvider
