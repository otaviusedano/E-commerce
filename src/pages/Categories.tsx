import { CategoriesSimple } from "../components/CategoriesSimple"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { Products } from "../components/Products"

export function CategoriesPage() {
  return (
    <>
      <Navbar />
      <CategoriesSimple />
      <Products />
      <Footer />
    </>
  )
}
