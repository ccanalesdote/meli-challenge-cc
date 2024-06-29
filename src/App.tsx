import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from './presentation/components/pages/Home'
import { ProductList } from './presentation/components/pages/ProductList'
import { ProductDetail } from './presentation/components/pages/ProductDetail'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
