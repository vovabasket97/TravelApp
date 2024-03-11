import Home from '@screens/Home/Home'

import MainProvider from './src/providers/MainProvider'

function App(): React.JSX.Element {
  return (
    <MainProvider useContainerStyles={false}>
      <Home />
    </MainProvider>
  )
}

export default App
