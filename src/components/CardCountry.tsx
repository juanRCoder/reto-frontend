import imgFlag from '../assets/images/flag-UK.webp'
import imagen from '../assets/images/United Kingdom.jpg'
import { propCardCountry } from '../interfaces/interfaces'


function CardCountry({ country, continent, onclick }: propCardCountry) {
  return (
    <section
      onClick={onclick}
      className='box-shadow-card rounded-3xl cursor-pointer group'
    >
      <figure className=' overflow-hidden rounded-tl-3xl rounded-tr-3xl'>
        <img
          src={imagen}
          alt='imagen'
          className='w-full h-full object-cover'
        />
      </figure>
      <div className='flex gap-3 bg-white group-hover:bg-[#009CFF] rounded-bl-3xl rounded-br-3xl items-center justify-start px-5 py-1'>
        <figure className='block h-8 w-12 bg-gray-600'>
          <img
            src={imgFlag}
            alt='imagen'
            className='h-full w-full object-fill'
          />
        </figure>
        <div className='flex flex-col items-start justify-center py-1 transition'>
          <p className='text-[#009CFF] group-hover:text-white font-bold'>{country}</p>
          <p className='text-gray-500 group-hover:text-white group-hover:font-semibold text-sm'>{continent}</p>
        </div>
      </div>
    </section>
  )
}

export default CardCountry