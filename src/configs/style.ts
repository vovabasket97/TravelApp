export const configStyles = {
  container: {
    padding: {
      vertical: 20,
      horizontal: 30,
    },
    getContainerWidth(screenWidth: number) {
      return screenWidth - this.padding.horizontal * 2
    },
  },
  attractionsGrid: {
    gap: 16,
  },
}
