import { GENERAL_QUERY } from "./querys";

const API_URL = "https://countries.trevorblades.com/";

export const fetchData = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GENERAL_QUERY,
      }),
    });

    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error en la solicitud de datos", e);
  }
};
