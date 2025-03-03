// my-react-app/src/pages/Home.jsx
import { useState, useEffect } from "react"
import Banner from "../components/Banner"
import Cards from "../components/Cards"

export default function Home() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <main>
      <Banner />
      <Cards properties={properties} />
    </main>
  )
}
