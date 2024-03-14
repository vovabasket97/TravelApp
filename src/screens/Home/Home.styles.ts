import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  heading: {
    fontSize: 32,
    color: '#4681A3',
    paddingHorizontal: configStyles.container.padding.horizontal,
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
    flexGrow: 1,
    marginTop: configStyles.container.padding.vertical,
  },
  column: {
    paddingHorizontal: configStyles.container.padding.horizontal,
  },
  content: {
    paddingBottom: configStyles.container.padding.vertical,
    paddingTop: configStyles.container.padding.vertical,
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
