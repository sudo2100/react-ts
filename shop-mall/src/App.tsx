import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import ProductList from './products/ProductList'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App
