import { useState } from "react"
import { MdOutlineEuro } from "react-icons/md"
import { useParams } from "react-router-dom"
import { AppFunctions } from "../context/AppProvider"
import { products } from "../utils/products"

export function ProductDetails() {
  const { productId } = useParams()
  const { handleAddProductToCart }: any = AppFunctions()

  const [quantity, setQuantity] = useState(1)

  const productIdFromUrl = parseFloat(productId || "0")

  const handleAddMoreQuantity = () => setQuantity((quantity) => ++quantity)

  const handleReduceMoreQuantity = () => {
    if (quantity === 1) return
    setQuantity((quantity) => --quantity)
  }

  const productComponent = products.map((product, key) => {
    if (product.id === productIdFromUrl) {
      const priceWithPromotion =
        product.price - (product.price * product.promotion) / 100

      const formatingPrice = (price: number) => (price * quantity).toFixed(2)

      const formatedPrice = formatingPrice(product.price)
      const formatedPromotionPrice = formatingPrice(priceWithPromotion)

      const newProduct = { ...product, quantity: quantity }

      return (
        <div key={key} className="text-center p-6">
          <h1 className="text-3xl font-bold laptop:mb-6 mb-20">
            {product.name}
          </h1>
          <div className="laptop:flex grid grid-cols-1 items-center justify-center">
            <img className="laptop:w-[40%] laptop:ml-12" src={product.image} />
            <div className="text-start p-6 laptop:p-20">
              <span className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A modi
                eos quos repellendus at dolorem architecto, nisi, officia error
                magni, corrupti quam quidem pariatur animi aliquid impedit sunt
                maxime in. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Sint culpa, qui ipsa magnam architecto adipisci
                consectetur pariatur beatae. Ullam error hic est dolorem id,
                ipsa iste delectus excepturi fugiat provident.
              </span>
              <div className="grid laptop:grid-cols-[1fr_1fr_1fr] gap-6 items-center justify-center mt-10">
                <h1 className="font-semibold text-lg text-center">Quantity</h1>
                <div className="grid grid-cols-[3rem_20px_3rem] items-center justify-center gap-4">
                  <button
                    onClick={handleReduceMoreQuantity}
                    className="text-2xl p-2 px-4 bg-stone-200"
                  >
                    -
                  </button>
                  <span className="text-lg text-center">{quantity}</span>
                  <button
                    onClick={handleAddMoreQuantity}
                    className="text-2xl p-2 px-4 bg-green-400"
                  >
                    +
                  </button>
                </div>
                <span className=" flex flex-col items-center">
                  {product.promotion ? (
                    <>
                      <span className=" ml-6 text-base line-through text-gray-400">
                        {formatedPrice}
                      </span>
                      <div className="text-green-600 flex items-center">
                        <MdOutlineEuro
                          className="inline-block mr-1"
                          size={12}
                        />
                        <span className="text-lg font-semibold">
                          {formatedPromotionPrice}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center">
                      <MdOutlineEuro className="inline-block mr-1" size={12} />
                      <span className=" text-stone-900 text-lg font-semibold">
                        {formatedPrice}
                      </span>
                    </div>
                  )}
                </span>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-6 my-10 mt-16">
                <button
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => handleAddProductToCart(newProduct)}
                  className="text-xl font-bold border-[2px] border-stone-900 rounded p-4 px-8  hover:bg-green-400 transition-colors"
                >
                  Add to cart
                </button>
                <button
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => handleAddProductToCart(newProduct)}
                  className="text-xl font-bold rounded p-4 px-8 bg-green-400  hover:bg-green-500 transition-colors"
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  })

  return (
    <div className="bg-slate-100 text-stone-900 max-w-[1216px] mx-auto rounded mt-4">
      {productComponent}
    </div>
  )
}
