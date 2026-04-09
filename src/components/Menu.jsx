import Category from "./Category.jsx"

export default function Menu({ items }) {
  return (
    <>
      <div className="font-bevellier grid grid-cols-2 font-medium gap-24 mt-16">
        <div className="flex flex-col gap-32">
            <Category name="Forrett" dishes={items} />
            <Category name="Dessert" dishes={items} />
        </div>
        <div>
          <Category name="Hovedrett" dishes={items} />
        </div>
      </div>
    </>
  )
}