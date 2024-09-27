import './App.css'
import Cart from './components/Cart'
import Product from './components/Product'
import ProductList from './components/ProductList'
import Total from './components/Total'

function App() {

  return (
    <>
      <ProductList />
      <Product />
      <Cart />
      <Total />
    </>
  )
}

export default App
