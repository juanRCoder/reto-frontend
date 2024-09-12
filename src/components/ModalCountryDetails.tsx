import { IoClose } from "react-icons/io5"
import useData from "../hook/useData";
import imgFlag from '../assets/images/flag-UK.webp'
import imagen from '../assets/images/United Kingdom.jpg'


function ModalCountryDetails({ setModal, codeCountry }: { setModal: (bool: boolean) => void, codeCountry: string }) {
  const { receivedData } = useData();
  const countryDetails = receivedData?.countries.filter(x => x.code === codeCountry);

  return (
    <div className='fixed right-0 bottom-0 bg-white w-[23.2rem] h-96 rounded-tl-xl box-shadow-card z-[60]'>
      <IoClose
        className='absolute top-3 right-3 text-2xl cursor-pointer text-gray-500'
        onClick={() => setModal(false)}
      />
      {countryDetails && (
        <div className='text-black mx-10'>
          <figure className=' overflow-hidden rounded-3xl mt-10'>
            <img
              src={imagen}
              alt='imagen'
              className='w-full h-full object-cover'
            />
          </figure>
          <div className='flex gap-3 bg-white group-hover:bg-[#009CFF] rounded-bl-3xl rounded-br-3xl items-center justify-start py-1'>
            <figure className='block h-8 w-12 bg-gray-600'>
              <img
                src={imgFlag}
                alt='imagen'
                className='h-full w-full object-fill'
              />
            </figure>
            <div className='flex flex-col items-start justify-center py-1 transition'>
              <p className='text-[#009CFF] group-hover:text-white font-bold'>{countryDetails[0].name}</p>
              <p className='text-gray-500 group-hover:text-white group-hover:font-semibold text-sm'>{countryDetails[0].continent?.name}</p>
            </div>
          </div>
          <p className="text-gray-500"><strong className="text-[#009CFF] pr-1">Capital:</strong> {countryDetails[0].capital}</p>
          <p className="text-gray-500">
            <strong className="text-[#009CFF] pr-1">Languages:</strong>
            {countryDetails[0].languages?.map(ln => ln.name).join(', ')}
          </p>
          <p className="text-gray-500"><strong className="text-[#009CFF] pr-1">Currency:</strong> {countryDetails[0].currency}</p>
        </div>
      )}
    </div>
  )
}

export default ModalCountryDetails