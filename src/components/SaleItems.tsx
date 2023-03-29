import { Product } from "./Product"

import chair from "../assets/products/cadeira.png"
import table from "../assets/products/mesa.png"
import sofa from "../assets/products/sofa.png"
import lamp from "../assets/products/lampada.png"

export function SaleItems() {
  return (
    <div className="max-w-[1248px] mx-auto p-4 text-stone-900 my-5">
      <h1 className="text-2xl font-bold my-7">Sale Items</h1>
      <div className="gap-11 grid grid-cols-[1fr_1fr_1fr_1fr]">
        <Product
          productPrice={499.99}
          productName="Luxury Sofa"
          productImage={sofa}
          productId={1}
          promotionPercent={30}
        />
        <Product
          productPrice={299.99}
          productName="Luxury Chair"
          productImage={chair}
          productId={2}
          promotionPercent={20}
        />
        <Product
          productPrice={299.99}
          productName="Luxury Table"
          productImage={table}
          productId={3}
          promotionPercent={15}
        />
        <Product
          productPrice={50.99}
          productName="Luxury lamp"
          productImage={lamp}
          productId={4}
          promotionPercent={20}
        />
      </div>
    </div>
  )
}
