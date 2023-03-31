import { useParams } from "react-router-dom"

import { CategorieSimple } from "./CategorieSimple"

export function CategoriesSimple() {
  const { categoryName } = useParams()

  return (
    <div className="h-24 max-w-[1248px] mx-auto px-4 mt-8">
      <h1 className="mb-12 text-center text-2xl font-bold">{categoryName}</h1>
      <div className="flex flex-wrap gap-4">
        <CategorieSimple categorieName="All" />
        <CategorieSimple categorieName="Sales" />
        <CategorieSimple categorieName="Kitchen" />
        <CategorieSimple categorieName="Chairs" />
        <CategorieSimple categorieName="Tables" />
        <CategorieSimple categorieName="Bedroom" />
        <CategorieSimple categorieName="Living Room" />
        <CategorieSimple categorieName="Lamps" />
        <CategorieSimple categorieName="Plates" />
        <CategorieSimple categorieName="Wardrobes" />
        <CategorieSimple categorieName="Bathroom" />
      </div>
    </div>
  )
}
