import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer copy/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer  from './components/Footer/Footer'
import Error from './components/Error/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        
        <Routes>

          <Route path='/' element={<ItemListContainer greeting={"Bienvenidos A Street Style"}/>}/>

          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          
          <Route path='*' element={<Error/>}/>

        </Routes>

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
