import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='w-full p-10 bg-slate-50'>
      <img className='w-[30%] flex mx-auto' src="https://4kwallpapers.com/images/wallpapers/404-not-found-cute-2048x2048-18164.jpg" alt="" />
            <div className=' flex justify-center mt-10'>
                <button className='w-25 rounded-2xl p-2 bg-blue-500 hover:scale-105 transition-all'><NavLink className={"text-white"} to={'/'}>Back to Home</NavLink></button>
            </div>
    </div>
  )
}
