import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import MyStory from './Components/MyStory/MyStory'
import Project from './Components/Projects/Project'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <div className=' overflow-x-hidden'>
      <Home/>
      <MyStory/>
      <Skills/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App


// home
// My story
// skills
// projects
// footer