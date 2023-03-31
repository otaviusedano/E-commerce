import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { ProductDetails } from "../components/ProductDetails"
import { SaleItems } from "../components/SaleItems"

export function ProductPage() {
  return (
    <>
      <Navbar />
      <ProductDetails />
      <SaleItems />
      <Footer />
    </>
  )
}
