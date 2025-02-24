import { Nav } from './nav'
import { Main } from './pages'
import NavProvider from './context/NavContext'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="appContainer">
      <NavProvider>
        <Nav />
        <Main />
      </NavProvider>
    </div>
  )
}

export default App
