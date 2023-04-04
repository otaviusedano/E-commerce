import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react"

export const AppContext = createContext({})

export function AppProvider({ children }: PropsWithChildren) {
  const [productsInCart, setProductsInCart] = useState<any[]>([])
  const [count, setCount] = useState(1)
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const productAlreadyAdded = (products: [], productId: number) => {
    return products
      ?.map((product: any) => product?.productId)
      .includes(productId)
  }

  const priceWithPromotion = (productPrice: number, promotionPercent: number) =>
    parseFloat(
      (productPrice - (productPrice * promotionPercent || 0) / 100).toFixed(2)
    )

  function handleAddProductToCart(product: any) {
    setProductsInCart((products: any) => {
      setIsOpenCart(true)

      if (productAlreadyAdded(products, product.id)) return [...products]

      return [
        ...products,
        {
          price: product.price,
          promotionPrice: priceWithPromotion(product.price, product.promotion),
          name: product.name,
          image: product.image,
          quantity: product.quantity || 1,
          productId: product.id,
        },
      ]
    })
  }

  const contextValue = useMemo(
    () => ({
      productsInCart,
      setProductsInCart,
      count,
      setCount,
      setIsOpenCart,
      isOpenCart,
      handleAddProductToCart,
      priceWithPromotion,
      isOpenMenu,
      setIsOpenMenu,
    }),
    [
      productsInCart,
      setProductsInCart,
      count,
      setCount,
      setIsOpenCart,
      isOpenCart,
      handleAddProductToCart,
      priceWithPromotion,
      isOpenMenu,
      setIsOpenMenu,
    ]
  )

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  )
}

export const AppFunctions = () => {
  return useContext(AppContext)
}
