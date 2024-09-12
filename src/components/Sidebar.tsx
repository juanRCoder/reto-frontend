import { Link } from "react-router-dom"

function SideBar() {
  return (
    <aside className='hidden fixed z-50 md:flex flex-col w-48 lg:w-72 bg-[#676767] min-h-screen'>
      <div className='bg-[#DBDBDB] text-[#676767] mx-4 mt-5 rounded-lg grid place-items-center py-4 text-xl font-bold'>
        Logo
      </div>
      <div className='flex flex-col items-start mx-4 mt-2 gap-1 text-xl font-bold'>
        {[
          ['Home', '/'],
          ['Vista 1', '/vista1'],
          ['Vista 2', '/vista2'],
        ].map(([title, link], i) => (
          <Link key={i} to={link} className='w-full text-left pl-2 hover:bg-white hover:text-[#676767] rounded-md py-1 transition'>
            {title}
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default SideBar