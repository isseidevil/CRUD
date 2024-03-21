import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Axios/Home'
import Create from './Axios/Create'
import Edit from './Axios/Edit'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>
      </BrowserRouter> 
      
    </div>
  )
}

export default App
