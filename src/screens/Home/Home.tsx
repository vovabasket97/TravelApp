import AttractionCard from '@components/Cards/AttractionCard/AttractionCard'
import Heading from '@components/Heading/Heading'
import CategoryList from '@components/Lists/CategoryList/CategoryList'
import { attractions, categoriesOfAttractios } from '@configs/attractions'
import { useMemo, useState } from 'react'
import { FlatList } from 'react-native'

import { styles } from './Home.styles'

const caegoriesArr = Object.values(categoriesOfAttractios)

const Home = () => {
  const [category, setCategory] = useState(() => caegoriesArr[0])
  const posts = useMemo(() => {
    if (category === categoriesOfAttractios.All) return attractions

    return attractions.filter((item) => item.categories.includes(category))
  }, [category])

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Heading style={[styles.heading]}>Where do</Heading>
          <Heading style={[styles.heading, styles.headingBold]}>you want go?</Heading>

          <Heading style={[styles.heading, styles.subHeading]}>Explore attractions</Heading>

          <CategoryList categories={caegoriesArr} onPress={(item) => setCategory(item)} selectedCategory={category} />
        </>
      }
      data={posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => '#' + item.title + item.location}
      renderItem={({ item }) => <AttractionCard {...item} />}
      numColumns={2}
      style={styles.gridContainer}
      columnWrapperStyle={styles.grid}
      contentContainerStyle={styles.grid}
    />
  )
}

export default Home
