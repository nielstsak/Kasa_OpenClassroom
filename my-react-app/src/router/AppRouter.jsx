import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import About from "../pages/About"
import Logement from "../pages/Logement"
import Error from "../pages/Error"

function AppRouter() {
  return (
    <Router>
      <Routes>
        {

        }
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
