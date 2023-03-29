import { Categories } from "../components/Categories"
import { Footer } from "../components/Footer"
import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"
import { OurFeatures } from "../components/OurFeatures"
import { Poster } from "../components/Poster"
import { SaleItems } from "../components/SaleItems"

export function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SaleItems />
      <Categories />
      <OurFeatures />
      <Poster />
      <Footer />
    </>
  )
}
