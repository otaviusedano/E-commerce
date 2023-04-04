import { useState } from "react"
import { Link } from "react-router-dom"
import { IoIosCart, IoIosMenu, IoIosExit } from "react-icons/io"

import { AppFunctions } from "../context/AppProvider"

import { ItemCart } from "./ItemCart"
import { MdOutlineEuro } from "react-icons/md"

export function Navbar() {
  const {
    productsInCart,
    setIsOpenCart,
    isOpenCart,
    setIsOpenMenu,
    isOpenMenu,
  }: any = AppFunctions()

  const priceTotal = productsInCart.reduce(
    (acc: number, curr: any) => acc + curr.promotionPrice * curr.quantity,
    0
  )

  function handleOpenMenu() {
    setIsOpenMenu(!isOpenMenu)
  }

  function handleOpenCart() {
    setIsOpenCart(!isOpenCart)
  }

  const ItemsCart = () => {
    return productsInCart.map((product: any, key: number) => (
      <ItemCart key={key} itemValues={product} />
    ))
  }

  const LinkToPage = ({ linkName, linkTo, params }: any) => {
    return (
      <li className="font-medium cursor-pointer hover:text-green-500 transition-colors text-lg">
        {params ? (
          <Link to={`/${linkTo}/${params}`}> {linkName} </Link>
        ) : (
          <Link to={`/${linkTo}`}> {linkName} </Link>
        )}
      </li>
    )
  }

  return (
    <header className="flex justify-between items-center h-24 max-w-[1248px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-green-400">
        <Link to={"/"}> minima </Link>
      </h1>
      <ul className="hidden tablet:flex items-center text-stone-900 gap-6">
        <LinkToPage linkName="Home" linkTo="" />
        <LinkToPage linkName="Sales" linkTo="categories" params={"Sales"} />
        <LinkToPage linkName="Categories" linkTo="categories" params="All" />
        <button
          onClick={handleOpenCart}
          className="bg-green-400 ml-4 flex gap-1 p-2 rounded-md items-center transition hover:bg-green-500"
          data-te-ripple-init
          data-te-ripple-color="light"
          data-te-sidenav-toggle-ref
          data-te-target="#sidenav-7"
          aria-controls="#sidenav-7"
          aria-haspopup="true"
        >
          <IoIosCart size={20} color={"rgb(28 25 23)"} />
          <span>{productsInCart.length}</span>
        </button>
      </ul>
      <div onClick={handleOpenMenu} className="block tablet:hidden">
        {!isOpenMenu ? <IoIosMenu size={32} /> : <IoIosExit size={32} />}
      </div>
      <ul
        className={
          isOpenMenu
            ? " z-50 fixed left-0 top-0 w-[60%] h-screen border-r pb-20 border-r-gray-900 text-slate-100 bg-stone-900 ease-in-out duration-500"
            : " z-50 ease-in-out w-[60%] h-full animate-pulse top-0 left-[-100%] fixed duration-500"
        }
      >
        <h1 className="p-4 py-8 w-full text-3xl font-bold text-green-400">
          <Link onClick={handleOpenMenu} to={"/"}>
            minima
          </Link>
        </h1>
        <li className="font-medium m-4 text-lg cursor-pointer">
          <Link onClick={handleOpenMenu} to="/">
            Home
          </Link>
        </li>
        <li className="font-medium m-4 text-lg cursor-pointer">
          <Link onClick={handleOpenMenu} to="/categories/Sales">
            Sale
          </Link>
        </li>
        <li className="font-medium m-4 text-lg cursor-pointer">
          <Link onClick={handleOpenMenu} to="/categories/All">
            Categories
          </Link>
        </li>
      </ul>
      <div>
        <div
          className={
            isOpenCart
              ? "fixed right-0 top-0 z-50 laptop:w-[30%] w-full bg-slate-100 duration-500"
              : "z-50 ease-in-out laptop:w-[30%] w-full animate-pulse top-0 right-[-100%] fixed duration-500"
          }
        >
          <div className="flex items-center p-6 justify-between">
            <h1 className="font-bold text-xl">Your Shopping Cart</h1>
            <IoIosExit
              className="cursor-pointer"
              onClick={handleOpenCart}
              size={32}
            />
          </div>
        </div>
        <nav
          className={
            isOpenCart
              ? "fixed overflow-auto top-0 right-0 z-[49] h-screen laptop:w-[30%] w-full duration-500 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] bg-slate-100"
              : "z-50 overflow-auto ease-in-out laptop:w-[30%] h-screen w-full animate-pulse top-0 right-[-100%] fixed duration-500"
          }
        >
          <ul
            className="relative m-0 list-none p-5 text-stone-900"
            data-te-sidenav-menu-ref
          >
            <ItemsCart />
          </ul>
        </nav>
        <div
          className={
            isOpenCart
              ? "fixed right-0 bottom-0 z-50 laptop:w-[30%] w-full duration-500 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] bg-slate-100"
              : "z-50 ease-in-out laptop:w-[30%] w-full animate-pulse bottom-0 right-[-100%] fixed duration-500"
          }
        >
          <div className="flex justify-between items-center gap-4 p-6">
            <div className=" flex items-center">
              <span className="text-stone-900 text-xl font-bold px-2">
                Total:
              </span>
              <span className="text-green-600 text-lg font-semibold flex items-center">
                <MdOutlineEuro className="inline-block mr-1" size={12} />
                {priceTotal.toFixed(2)}
              </span>
              <span className="font-semibold text-lg"></span>
            </div>

            <button className="bg-green-400 font-bold text-xl p-2 px-4 transition-colors hover:bg-green-500">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
