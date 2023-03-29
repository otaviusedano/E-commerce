import { AppFunctions } from "../context/AppProvider"

import { MdOutlineClear, MdOutlineEuro } from "react-icons/md"

export function ItemCart({ itemValues }: any) {
  const { setProductsInCart }: any = AppFunctions()

  const { name, quantity, price, image, promotionPrice } = itemValues

  const formatingPrice = (price: number) => (price * quantity).toFixed(2)

  const formatedPrice = formatingPrice(price)
  const formatedPromotionPrice = formatingPrice(promotionPrice)

  function handleDeleteItemFromCart() {
    setProductsInCart((items: any) => {
      return items.filter((item: any) => item.name !== name)
    })
  }

  function handleAddMoreQuantity() {
    setProductsInCart((items: any) => {
      items.map((item: any) => {
        if (item.name === name) ++item.quantity
      })

      return [...items]
    })
  }

  function handleRemoveMoreQuantity() {
    setProductsInCart((items: any) => {
      items.map((item: any) => {
        if (item.name === name && item.quantity > 1) --item.quantity
      })

      return [...items]
    })
  }

  return (
    <div className="grid grid-cols-[30fr_30fr_10fr] my-28 ">
      <img className=" object-cover" src={image} alt="" />
      <div className="flex flex-col justify-between items-baseline ml-8">
        <div className="mr-10">
          <h1 className="text-lg font-medium">{name}</h1>
          {promotionPrice != price ? (
            <>
              <span className="text-xs line-through mr-3 text-gray-400">
                {formatedPrice}
              </span>
              <div className="text-green-600 flex items-center">
                <MdOutlineEuro className="inline-block mr-1" size={12} />
                <span>{formatedPromotionPrice}</span>
              </div>
            </>
          ) : (
            <div className="mt-2">
              <MdOutlineEuro className="inline-block mr-1" size={12} />
              <span className=" mr-3 text-stone-900">{formatedPrice}</span>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-1">
          <button
            onClick={handleRemoveMoreQuantity}
            className="px-2 rounded text-2xl bg-slate-200"
          >
            -
          </button>
          <span className="px-2 rounded text-1xl bg-slate-200">{quantity}</span>
          <button
            onClick={handleAddMoreQuantity}
            className="px-2 rounded text-2xl bg-green-400"
          >
            +
          </button>
        </div>
      </div>
      <div>
        <button onClick={handleDeleteItemFromCart}>
          <MdOutlineClear size={22} />
        </button>
      </div>
    </div>
  )
}
