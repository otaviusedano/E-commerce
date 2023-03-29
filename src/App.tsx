import { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import { CategoriesPage } from "./pages/Categories"
import { HomePage } from "./pages/Home"
import { ProductPage } from "./pages/Product"
import { SalesPage } from "./pages/Sales"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="categories/:categoryName" element={<CategoriesPage />} />
        <Route path="sales" element={<SalesPage />} />
        <Route path="product/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
