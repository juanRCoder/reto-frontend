import { useEffect, useState } from 'react'
import { fetchData } from '../services/getData';
import { GraphQLResponse } from '../interfaces/interfaces';

function useData() {
  const [receivedData, setRecivedData] = useState<GraphQLResponse>();

  // Datos de todos los paises
  useEffect(() => {
    const receivedData = async () => {
      const data = await fetchData();
      setRecivedData(data.data)
    }
    receivedData();
  }, [])

  return { receivedData }
}

export default useData