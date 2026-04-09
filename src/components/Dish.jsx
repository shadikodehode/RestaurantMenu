export default function Dish ({ dish }) {

  const { title, price, ingredients} = dish
  return (
    <div className="flex flex-col">
      <div className="flex flex-row text-xl justify-between items-center mt-4">
        <h2 className="min-w-0">{title}</h2>
        <p className="font-bold whitespace-nowrap">{price}</p>
      </div>
      <div>
        <p className="font-light text-sm text-blue-400">{ingredients}</p>
      </div>
    </div>
  )
}