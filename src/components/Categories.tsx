import imageLivingRoom from "../assets/Living room.jpg"
import imageBedroom from "../assets/bedroom.jpg"
import imageKitchen from "../assets/kitchen.jpg"
import imageBathroom from "../assets/bathroom.jpg"
import { Link } from "react-router-dom"
import { ScrollToTop } from "./ScrollToTop"

export function Categories() {
  function Categorie({ categorieName, categorieImage }: any) {
    return (
      <Link
        to={`./categories/${categorieName}`}
        className="flex flex-col text-center relative"
      >
        <div className="cursor-pointer flex justify-center items-center bg-stone-400 bg-opacity-40 absolute w-full h-[91%] duration-300 z-10 transition opacity-0 hover:opacity-100 ">
          <div>
            <button
              data-te-ripple-init
              data-te-ripple-color="light"
              className="text-lg font-bold transition bg-green-400 rounded-sm p-2 py-1"
            >
              <Link to={`./categories/${categorieName}`}>Shop now</Link>
            </button>
          </div>
        </div>
        <img
          className="rounded w-full h-full object-cover"
          src={categorieImage}
          alt={`${categorieName} image`}
        />
        <h1 className="text-lg font-bold mt-4">{categorieName}</h1>
      </Link>
    )
  }

  return (
    <section className="mt-[4.33%] max-w-[1248px] flex flex-col mx-auto gap-2 text-stone-900 px-4">
      <ScrollToTop />
      <div className="text-center mb-9">
        <h1 className="font-bold text-4xl mb-3">Exclusive Furniture</h1>
        <span className="text-stone-400 text-xl font-medium">
          Check out this week's selection of popular products that might catch
          your eye. and don't
        </span>
      </div>
      <div className="grid laptop:grid-cols-[1fr_1fr_1fr_1fr] tablet:grid-cols-[1fr_1fr_1fr] grid-cols-[1fr_1fr] mobile:grid-cols-[1fr] largeMobile:grid-cols-[1fr_1fr] gap-8">
        <Categorie
          categorieName="Living Room"
          categorieImage={imageLivingRoom}
        />
        <Categorie categorieName="Bedroom" categorieImage={imageBedroom} />
        <Categorie categorieName="Kitchen" categorieImage={imageKitchen} />
        <Categorie categorieName="Bathroom" categorieImage={imageBathroom} />
      </div>
    </section>
  )
}
