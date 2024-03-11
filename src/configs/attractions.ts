export const categoriesOfAttractios = {
  All: 'All',
  USA: 'USA',
  Mexico: 'Mexico',
  Thailand: 'Thailand',
  Australia: 'Australia',
  'United Arab Emirates': 'United Arab Emirates',
  China: 'China',
  'Czech Republic': 'Czech Republic',
  Turkey: 'Turkey',
  Spain: 'Spain',
  Poland: 'Poland',
}

export const attractions = [
  {
    imageSource: { uri: 'https://ktla.com/wp-content/uploads/sites/4/2023/04/harry-lechamps-EXQyJApaO44-unsplash.jpg' },
    location: 'California, USA',
    title: 'Disney land',
    categories: [categoriesOfAttractios.USA],
  },
  {
    imageSource: { uri: 'https://i.insider.com/556deed6ecad04c84fb23cfc?width=1300&format=jpeg&auto=webp' },
    location: 'Sydney, Australia',
    title: 'Sydney Opera House',
    categories: [categoriesOfAttractios.Australia],
  },
  {
    imageSource: { uri: 'https://i.insider.com/556deeb269beddf13cb23cfc?width=1300&format=jpeg&auto=webp' },
    location: 'Yucatan, Mexico',
    title: 'Chichen Itza',
    categories: [categoriesOfAttractios.Mexico],
  },
  {
    imageSource: { uri: 'https://i.insider.com/556dee8feab8eabd023daf54?width=1300&format=jpeg&auto=webp' },
    location: 'Bangkok, Thailand',
    title: 'Wat Pho',
    categories: [categoriesOfAttractios.Thailand],
  },
  {
    imageSource: { uri: 'https://i.insider.com/556e055a69beddb651b23d00?width=1300&format=jpeg&auto=webp' },
    location: 'New York City, New York',
    title: 'The National September 11 Memorial',
    categories: [categoriesOfAttractios.USA],
  },
  {
    imageSource: { uri: 'https://i.insider.com/556dee42eab8eac0023daf56?width=1300&format=jpeg&auto=webp' },
    location: 'Dubai, United Arab Emirates',
    title: 'Burj Khalifa',
    categories: [categoriesOfAttractios['United Arab Emirates']],
  },
  {
    imageSource: { uri: 'https://i.insider.com/556e05046da811f679e53b46?width=1300&format=jpeg&auto=webp' },
    location: 'Washington DC',
    title: 'Lincoln Memorial',
    categories: [categoriesOfAttractios.USA],
  },
  {
    imageSource: { uri: 'https://i.insider.com/556ded9869beddeb3cb23cfe?width=1300&format=jpeg&auto=webp' },
    location: 'China',
    title: 'Great Wall at Mutianyu',
    categories: [categoriesOfAttractios.China],
  },
  {
    imageSource: { uri: 'https://i.insider.com/53ab285decad04343e22ef9b?width=1300&format=jpeg&auto=webp' },
    location: 'Prague, Czech Republic',
    title: 'Charles Bridge',
    categories: [categoriesOfAttractios['Czech Republic']],
  },
  {
    imageSource: { uri: 'https://i.insider.com/556e04676bb3f7a15fb23cfc?width=1300&format=jpeg&auto=webp' },
    location: 'Istanbul, Turkey',
    title: 'Hagia Sophia',
    categories: [categoriesOfAttractios.Turkey],
  },
  {
    imageSource: { uri: 'https://i.insider.com/556e0416eab8ea310a3daf5c?width=1300&format=jpeg&auto=webp' },
    location: 'Granada, Spain',
    title: 'The Alhambra',
    categories: [categoriesOfAttractios.Spain],
  },
]
