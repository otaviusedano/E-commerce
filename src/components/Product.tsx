import { useEffect } from "react"
import { MdOutlineEuro } from "react-icons/md"
import { Link } from "react-router-dom"

import { AppFunctions } from "../context/AppProvider"

export function Product({
  productPrice,
  productName,
  productId,
  promotionPercent,
  productImage,
}: any) {
  const { handleAddProductToCart, priceWithPromotion }: any = AppFunctions()

  const product = {
    name: productName,
    price: productPrice,
    id: productId,
    image: productImage,
    promotion: promotionPercent,
  }

  const truePrice = priceWithPromotion(productPrice, promotionPercent)

  return (
    <Link to={`/product/${productId}`}>
      <div className="bg-slate-100 p-6 rounded-sm">
        <div>
          <img src={productImage} alt="" />
        </div>
        <h1 className="text-xl my-2 mt-4 font-medium">{productName}</h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {promotionPercent ? (
              <>
                <span className="text-xs line-through mr-3 text-gray-400">
                  {productPrice}
                </span>
                <div className="text-green-600 flex items-center">
                  <MdOutlineEuro className="inline-block mr-1" size={12} />
                  <span>{truePrice}</span>
                </div>
              </>
            ) : (
              <>
                <MdOutlineEuro className="inline-block mr-1" size={12} />
                <span className=" mr-3 text-stone-900">{productPrice}</span>
              </>
            )}
          </div>
          <button
            onClick={() => handleAddProductToCart(product)}
            data-te-ripple-init
            data-te-ripple-color="light"
            className="font-bold p-1 px-3 transition-colors hover:border-green-400 hover:bg-green-400 rounded-sm border border-stone-900"
          >
            Buy now
          </button>
        </div>
      </div>
    </Link>
  )
}
