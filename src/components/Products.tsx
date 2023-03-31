import { useParams } from "react-router-dom"

import { products } from "../utils/products"
import { Product } from "./Product"

export function Products() {
  const selectedItem = useParams().categoryName

  const productComponent = (product: any, key: any) => (
    <Product
      key={key}
      productPrice={product.price}
      productName={product.name}
      productId={product.id}
      productImage={product.image}
      promotionPercent={product.promotion}
    />
  )

  const filteredsProduct = products.map((product, key) => {
    if (selectedItem === "All") {
      return productComponent(product, key)
    }

    return product.categories.map((category: string) => {
      if (category === selectedItem) {
        return productComponent(product, product)
      }
    })
  })

  return (
    <section className="max-w-[1248px] mx-auto px-4 mt-16 mb-[6%] grid laptop:grid-cols-[1fr_1fr_1fr_1fr] tablet:grid-cols-[1fr_1fr_1fr] grid-cols-[1fr_1fr] mobile:grid-cols-[1fr] largeMobile:grid-cols-[1fr_1fr] mobile:py-24 tablet:py-0 gap-4">
      {filteredsProduct}
    </section>
  )
}
