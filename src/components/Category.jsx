import Dish from "./Dish.jsx"

export default function Category ({ name, dishes }) {
  const categoryDishes = dishes.filter(dish => dish.category === name)

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-4xl">{name}</h2>
      <div className="flex flex-col gap-4">
       {categoryDishes.map((dish) => (
        <Dish key={dish.id} dish={dish} />
       ))} 
      </div>
    </div>
  )
}