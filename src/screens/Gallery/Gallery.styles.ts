import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: configStyles.container.padding.horizontal,
    marginBottom: configStyles.container.padding.vertical,
  },
  gallery: {
    flexDirection: 'column',
    gap: 20,
  },
  image: {
    width: '100%',
    aspectRatio: '1/1',
    borderRadius: 16,
  },
  firstImage: {
    marginTop: configStyles.container.padding.vertical,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: 36,
    height: 36,
    padding: 6,
    position: 'absolute',
    left: configStyles.container.padding.horizontal + 8,
    top: configStyles.container.padding.vertical + 8,
    zIndex: 1,
  },
  icon: {
    color: 'rgba(0, 0, 0, 1)',
  },
})
