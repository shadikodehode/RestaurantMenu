import './style.css'
import { menuItems } from './data/menuItems.js'
import Menu from './components/Menu.jsx'

export default function App() {

  return (
    <>
      <div className='flex flex-col items-center bg-taupe-50 min-h-screen text-blue-500 p-16'>
        <div className='w-full max-w-3xl mx-auto'>
          <h1 className='font-bevellier font-bold text-7xl p-2 text-center'>Menu</h1>
          <div className='w-full border-b-2 mt-4'/>
          <Menu items={menuItems} />
        </div>
      </div>
    </>
  )
}