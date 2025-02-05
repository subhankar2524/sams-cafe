import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import BookTable from './pages/BookTable'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/book-table' element={<BookTable />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
