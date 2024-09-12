import { useState } from "react";
import { continents } from "../services/continents"
import { propModalContinents } from "../interfaces/interfaces";
import '../App.css';


function ModalContinents({ cleanInput, searchForContinent }: propModalContinents) {
  const [continentsSelected, setContinentsSelected] = useState<string[]>([]);
  const [select, setSelect] = useState<Record<string, boolean>>({
    America: false,
    Europe: false,
    Asia: false,
    Oceania: false,
    Africa: false,
  });

  const handleSelect = (continent: string) => {
    // Toggle de cada estado de continente
    setSelect(prevSelect => {
      const newSelect = { ...prevSelect, [continent]: !prevSelect[continent] };

      // Agregar o no continentes segun su estado
      setContinentsSelected(prevSelected => {
        if (newSelect[continent]) {
          return [...prevSelected, continent];
        } else {
          return prevSelected.filter(item => item !== continent);
        }
      });
      return newSelect;
    });
  };
  searchForContinent(continentsSelected);

  return (
    <aside className="fixed sm:absolute z-50 -left-1 top-[3.1rem] sm:top-16 bg-white sm:w-[31rem] sm:rounded-3xl px-4 py-3 sm:box-shadow-card">
      <div className="flex justify-between text-lg font-semibold">
        <p className="text-gray-500">
          Filtrar por Continentes
        </p>
        <p
          onClick={cleanInput}
          className=" text-[#009CFF] cursor-pointer"
        >
          Limpiar
        </p>
      </div>
      <section className='grid grid-cols-3 gap-5 my-3 h-full'>
        {continents.map(continent => (
          <div
            style={{ outline: select[continent.name] ? '2px solid #009CFF' : '', }}
            onClick={() => handleSelect(continent.name)}
            className="hover:outline hover:outline-2 hover:outline-[#009CFF] p-3 rounded-md"
          >
            <img
              className=''
              src={continent.img}
              alt='america'
            />
            <p className='text-[#676767] pt-3 text-center'>{continent.name}</p>
          </div>
        ))}
      </section>
    </aside >
  )
}

export default ModalContinents