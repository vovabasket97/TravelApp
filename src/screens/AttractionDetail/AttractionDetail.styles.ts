import { configStyles } from '@configs/style'
import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 20,
    paddingHorizontal: configStyles.container.padding.horizontal,
  },
  imageContainer: {
    marginTop: configStyles.container.padding.vertical,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    borderRadius: 16,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: 36,
    height: 36,
    padding: 6,
  },
  icon: {
    color: 'rgba(0, 0, 0, 1)',
  },
  gallery: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(256, 256, 256, 0.7)',
    borderRadius: 16,
    gap: 10,
    padding: 8,
    margin: 16,
  },
  galleryItem: {
    width: 40,
    height: 40,
    borderRadius: 10,
    position: 'relative',
  },
  addImagesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  addImages: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
  },
  titles: {
    flexDirection: 'column',
    gap: 8,
  },
  heading: {
    color: 'rgba(0, 0, 0, 1)',
  },
  location: {},
  price: {
    fontSize: 24,
    fontWeight: '700',
  },
  addInfo: {
    marginTop: 10,
    flexDirection: 'column',
    gap: 8,
  },
  mapWrapper: {
    position: 'relative',
  },
  map: {
    marginTop: 10,
    width: '100%',
    height: 250,
    borderRadius: Platform.OS === 'ios' ? 16 : 100,
    marginBottom: configStyles.container.padding.vertical,
  },
  maximize: {
    width: 36,
    height: 36,
    padding: 6,
    position: 'absolute',
    right: 16,
    top: 24,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
})
