import imageLivingRoom from "../assets/Living room.jpg"
import imageBedroom from "../assets/bedroom.jpg"
import imageKitchen from "../assets/kitchen.jpg"
import imageBathroom from "../assets/bathroom.jpg"
import { Link } from "react-router-dom"

export function Categories() {
  function Categorie({ categorieName, categorieImage }: any) {
    return (
      <a
        href={`./categories/${categorieName}`}
        className="w-[25%] flex flex-col text-center relative"
      >
        <div className="cursor-pointer flex justify-center items-center bg-stone-400 bg-opacity-40 absolute w-full h-[91%] duration-300 z-10 transition opacity-0 hover:opacity-100 ">
          <div>
            <button
              data-te-ripple-init
              data-te-ripple-color="light"
              className="text-lg font-bold transition bg-green-400 rounded-sm p-2 py-1"
            >
              <a href={`./categories/${categorieName}`}>Shop now</a>
            </button>
          </div>
        </div>
        <img
          className="rounded w-full h-full object-cover"
          src={categorieImage}
          alt={`${categorieName} image`}
        />
        <h1 className="text-lg font-bold mt-4">{categorieName}</h1>
      </a>
    )
  }

  return (
    <section className="mt-[4.33%] max-w-[1248px] flex flex-col mx-auto gap-2 text-stone-900 px-4">
      <div className="text-center mb-9">
        <h1 className="font-bold text-4xl mb-3">Exclusive Furniture</h1>
        <span className="text-stone-400 text-xl font-medium">
          Check out this week's selection of popular products that might catch
          your eye. and don't
        </span>
      </div>
      <div className="flex gap-8">
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
