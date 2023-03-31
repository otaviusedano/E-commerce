import heroImage1 from "../assets/hero/sofa.jpg"
import bathroomimage from "../assets/hero/bathroom.jpg"
import livingimage2 from "../assets/hero/living room.jpg"

import { useState } from "react"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md"
import { Link } from "react-router-dom"

export function Hero() {
  const [current, setCurrent] = useState(0)

  const slides = [heroImage1, livingimage2, bathroomimage]

  const prev = () =>
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
  const next = () =>
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))

  const Slides = slides.map((slide) => <img key={slide} src={slide}></img>)

  return (
    <main className=" mx-auto laptop:w-3/4 max-w-[1248px] px-4 py-1 text-slate-300">
      <div className="overflow-hidden relative">
        <div
          className=" w-full flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Slides}
        </div>
        <div className="bg-slate-900 hover:text-slate-200 bg-opacity-30 flex justify-center items-center transition-all hover:bg-opacity-40 absolute top-0 z-40 h-full w-full">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl mb-10 laptop:mb-4 font-bold">
              Unique funitures for you
            </h1>
            <Link
              className="cursor-pointer z-50 text-stone-900 font-bold  p-1 px-4 bg-green-400 text-lg transition-colors hover:bg-green-500"
              to="/categories/All"
            >
              Shop now
            </Link>
          </div>
          <div className="absolute z-20 inset-0 flex items-center justify-between">
            <button
              onClick={prev}
              className="p-8 h-screen text-slate-100 hover:text-green-500 transition-all"
            >
              <MdOutlineArrowBackIos />
            </button>
            <button
              onClick={next}
              className="p-8 h-screen text-slate-100 hover:text-green-500 transition-all"
            >
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 right-0 left-0 z-40">
          <div className="flex items-center justify-center gap-2 ">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`
            transition-all w-3 h-3 ${
              current === i ? "bg-green-400" : "bg-slate-100"
            } rounded-full
          `}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
