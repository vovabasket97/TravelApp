import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  card: {
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 16,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 8,
    flex: 1,
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    gap: 4,
    paddingRight: 16,
  },
  image: {
    borderRadius: 16,
    height: 120,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
  icon: {
    display: 'flex',
    width: 8,
    height: 8,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  subHeading: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.5)',
    fontWeight: '300',
  },
})
