import { NavLink } from "react-router-dom"

export function CategorieSimple({ categorieName }: any) {
  return (
    <div>
      <NavLink
        className={({ isActive, isPending }) =>
          isPending
            ? "font-bold focus:bg-green-500 focus:border-green-400 p-1 px-3 transition-colors hover:border-stone-300 hover:bg-stone-300 rounded-sm border border-stone-900"
            : isActive
            ? "font-bold focus:bg-green-500 focus:border-green-400 p-1 px-3 transition-colors hover:border-green-400 hover:bg-green-400 rounded-sm border border-stone-900"
            : "font-bold focus:bg-green-500 focus:border-green-400 p-1 px-3 transition-colors hover:border-green-400 hover:bg-green-400 rounded-sm border border-stone-900"
        }
        to={`/categories/${categorieName}`}
      >
        {categorieName}
      </NavLink>
    </div>
  )
}
