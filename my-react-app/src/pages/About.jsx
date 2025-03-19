// src/pages/About.jsx
import React from "react"
import BannerAbout from "../components/BannerAbout"
import Collapse from "../components/Collapse"
import collapseData from "../data/data.json"

export default function About() {
  return (
    <main>
      <BannerAbout />
      <div style={{ width: "80%", margin: "0 auto" }}>
        {collapseData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </main>
  )
}
