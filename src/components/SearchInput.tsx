import { IoSearch } from "react-icons/io5"
import { useState } from "react";
import ModalContinents from "./ModalContinents";
import { propSearchInput } from "../interfaces/interfaces";
import '../App.css'


function SearchInput({ search, searchForContinent }: propSearchInput) {
  const [modal, setModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value)
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e.preventDefault();
  
  const handleContinent = (continents: string[]) => searchForContinent(continents)

  const cleanInput = () => {
    setInputValue(''); // limpia el input
    setModal(false); // cierra el modal de continentes
    search(''); //limpia la busqueda
    searchForContinent([]) // limpia seleccionados
  }

  return (
    <form onSubmit={handleSubmit} className="sm:w-fit sm:rounded-3xl flex mt-0 sm:mt-6 items-center bg-white w-full rounded-none px-3 py-[2px] box-shadow-input justify-between">

      <div className="flex flex-col pl-3 relative">
        <label htmlFor="country" className="text-md text-[#676767] font-bold">Pais</label>
        <input
          type="search"
          value={inputValue}
          onClick={() => setModal(!modal)}
          className='bg-transparent outline-none border-none text-[12px] w-full sm:w-96 pb-1 text-[#676767] placeholder:text-[#DADADA]'
          placeholder="Escribe el pais que deseas ver"
          onChange={handleChange}
          id="country"
        />
        {modal && <ModalContinents cleanInput={cleanInput} searchForContinent={handleContinent} />}
      </div>
      <div>
        <button className="flex gap-1 items-center bg-[#009CFF] px-[10px] py-1 rounded-2xl">
          <IoSearch className="text-xl" />
          Buscar
        </button>
      </div>

    </form>
  )
}

export default SearchInput