import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  list: {
    marginLeft: configStyles.container.padding.horizontal,
  },
  item: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 14,
  },
  active: {
    color: 'rgba(0, 0, 0, 1)',
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',
  },
  content: {
    flexDirection: 'row',
    gap: configStyles.attractionsGrid.gap,
    paddingRight: configStyles.container.padding.horizontal,
  },
  selectedContainer: {
    borderBottomColor: '#4681A3',
  },
})
