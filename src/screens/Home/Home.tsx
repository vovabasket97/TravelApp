import Heading from '@components/Heading/Heading'

import { styles } from './Home.styles'

const Home = () => {
  return (
    <>
      <Heading style={[styles.heading]}>Where do</Heading>
      <Heading style={[styles.heading, styles.headingBold]}>you want go?</Heading>

      <Heading style={[styles.heading, styles.subHeading]}>Explore attractions</Heading>
    </>
  )
}

export default Home
