import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import About from "../pages/About" 
import Logement from "../pages/Logement" 
import Error from "../pages/Error" 

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
