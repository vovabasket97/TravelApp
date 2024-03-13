import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  float: { zIndex: 1 },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  backWrapper: {
    position: 'absolute',
    top: 60,
    backgroundColor: 'white',
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 10,
    borderRadius: 16,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: 'rgba(0, 0, 0, 1)',
  },
  location: {
    flexShrink: 1,
  },
})
