import { Link } from "react-router-dom"
import imageCouch3 from "../assets/poster/imagem poster 3.jpg"

export function Poster() {
  return (
    <div className=" max-w-[1248px] mx-auto p-4 my-[8.33%] text-stone-900 flex justify-between">
      <div className="flex flex-col gap-8 my-auto">
        <h1 className="text-5xl font-bold tracking-wide leading-tight">
          Own new colection for your luxury living room
        </h1>
        <span className="text-xl font-medium text-stone-400 w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          quisquam facilis accusantium unde eum nam provident eaque distinctio
          ullam nulla.
        </span>
        <div className="mt-24">
          <Link to="/categories/Living Room">
            <button
              data-te-ripple-init
              data-te-ripple-color="light"
              className="rounded-sm p-7 py-3 text-xl font-bold transition-colors hover:bg-green-400 hover:border-green-400 border-[2px] border-stone-900"
            >
              Shop now
            </button>
          </Link>
        </div>
      </div>
      <img className="w-1/3 rounded-sm" src={imageCouch3} alt="" />
    </div>
  )
}
