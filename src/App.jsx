import Navbar from "./components/Navbar/Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./components/Footer/Footer"
import { useState } from "react"
import LoginPopup from "./components/LoginPopUp/LoginPopup"

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route key="home" path='/' element={<Home />} />
          <Route key="cart" path='/cart' element={<Cart />} />
          <Route key="order" path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App