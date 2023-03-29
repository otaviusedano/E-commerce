import {
  MdOutlineLocalShipping,
  MdOutlineMonetizationOn,
  MdOutlineCreditCard,
  MdOutlineStarOutline,
  MdOutlineAutoAwesome,
} from "react-icons/md"

export function OurFeatures() {
  function Feature({ featureName, IconElement }: any) {
    return (
      <div className="w-2/6 p-4 flex justify-center flex-col gap-2 bg-gray-100 rounded-md">
        {/* ICONE BG-GREEN-200 */}
        <IconElement size={32} className="bg-slate-200 p-1 rounded-md" />
        <h1 className="text-lg font-bold">{featureName}</h1>
        <span className="text-stone-400 font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, optio
          tenetur.
        </span>
      </div>
    )
  }

  return (
    <div className="max-w-[1248px] mx-auto px-4 my-36 text-stone-900">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-5xl font-bold">Our Features Special For You</h1>
        <span className="text-xl text-stone-400 w-1/2 text-center font-medium">
          We provide a variety of specials features for all of you, to make it
          easier and make you even more happy shopping here.
        </span>
      </div>
      <div className="flex justify-center items-center my-12 gap-6">
        <Feature
          featureName="Best quality"
          IconElement={MdOutlineStarOutline}
        />
        <Feature
          featureName="Free shipping"
          IconElement={MdOutlineLocalShipping}
        />
        <Feature
          featureName="Promotions"
          IconElement={MdOutlineMonetizationOn}
        />
        <Feature featureName="Easy payment" IconElement={MdOutlineCreditCard} />
        <Feature
          featureName="Unique furnitures"
          IconElement={MdOutlineAutoAwesome}
        />
      </div>
    </div>
  )
}
