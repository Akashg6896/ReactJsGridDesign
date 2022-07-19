import './App.css'
import TopBarContainer from './components/TopBar/TopBarContainer/TopBarContainer'
import LatestPosts from './components/LatestPosts/LatestPosts'
import LatestPostsSection from './components/LatestPosts/LatestPostsSection/LatestPostsSection'
function App() {
  return (
    <div className='App'>
      <TopBarContainer />
      <LatestPosts />
    </div>
  )
}

export default App
