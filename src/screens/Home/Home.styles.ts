import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    color: '#4681A3',
  },
  headingBold: {
    fontWeight: '700',
  },
  subHeading: {
    marginTop: 40,
    marginBottom: 34,
    fontSize: 20,
    color: '#000000',
    fontWeight: '700',
  },
  gridContainer: {
    marginVertical: configStyles.container.padding.vertical,
    paddingHorizontal: configStyles.container.padding.horizontal,
    flexGrow: 1,
  },
  grid: {
    gap: configStyles.attractionsGrid.gap,
  },
  noFound: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 16,
  },
})
