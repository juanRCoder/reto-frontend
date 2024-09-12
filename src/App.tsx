import { useState } from 'react';
import CardCountry from './components/CardCountry';
import SearchInput from "./components/SearchInput";
import useData from './hook/useData';
import { Country } from './interfaces/interfaces';
import './App.css'
import ModalCountryDetails from './components/ModalCountryDetails';


function App() {
  const { receivedData } = useData();
  const [search, setSearch] = useState<string>('');
  const [continentSelected, setContinentSelected] = useState<string[]>([]);
  const [modalCountry, setModalCountry] = useState<boolean>(false);
  const [codeCountry, setCodeCountry] = useState<string>('')

  // Seleccionados por continente
  const handleContinents = (continents: string[]) => {
    setContinentSelected(continents);
  }

  // Entrada del usuario
  const handleSearch = (value: string) => {
    setSearch(value)
  }

  // Filtros //

  // paises en general
  const filterCountry: Country[] = (receivedData?.countries ?? [])
    .filter(continent => continent.continent.name !== 'Antarctica');


  // Filtrar segun los caracteres del pais escrito por el usuario
  const filterInput = filterCountry
    .filter(country => (country.name ?? 'Other')
      .toLowerCase().startsWith(search.toLocaleLowerCase()))


  // Filtrar paises seleccionado por continente
  const filterForContinent = filterCountry.filter(country =>
    // verificar si America esta incluido porque se separan en 2 [South y North]
    continentSelected.includes('America')
      ? country.continent?.name.includes('America')
      : (continentSelected.includes(country.continent?.name || 'Other'))
  );

  // Switch de filtros
  const filtered = () => {
    if (search.length > 0) return filterInput;
    if (continentSelected.length > 0) return filterForContinent;
    return filterCountry;
  };

  const handleModal = (code: string) => {
    setModalCountry(true)
    setCodeCountry(code)
  }

  return (
    <>
      <section className='md:ml-48 lg:ml-72 relative flex flex-col items-center justify-start bg-[#E3F4FF] min-h-screen outline outline-1 outline-black'>
        <SearchInput
          search={(value) => handleSearch(value)}
          searchForContinent={handleContinents}
        />
        <main className='flex gap-4 max-w-4xl'>
          <article className='relative grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4 w-full my-10 lg:px-0 grid-start'>
            {filtered().map((country) => (
              <CardCountry
                onclick={() => handleModal(country.code)}
                key={country.code}
                country={country.name || 'Other'}
                continent={country.continent?.name || 'Other'}
              />
            ))
            }
            {modalCountry &&
              <ModalCountryDetails
                codeCountry={codeCountry || ''}
                setModal={(bool) => setModalCountry(bool)}
              />}
          </article>
        </main>
      </section>
    </>
  )
}

export default App
