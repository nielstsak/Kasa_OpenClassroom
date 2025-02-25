import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import styles from "./MainLayout.module.css"

function MainLayout() {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      {
    }
      <Outlet />
      {
        
      }
    </div>
  )
}

export default MainLayout
