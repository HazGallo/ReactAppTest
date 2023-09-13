import { PropsDataWeather } from './Interfaces/CityData';
import { InfoCityWeather } from './Interfaces/InfoCityWeather';

export const GetInfoWeather = async ({
  city,
}: InfoCityWeather): Promise<PropsDataWeather> => {
  // TODO: Recordar usar variables de entorno para la URL y el apikey
  const resp = await fetch(
    // I put units=metric to have the temp in celsius.
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b37458401b415a652387e52d4883efb4`,
    {
      method: 'GET',
    }
  );

  if (!resp.ok) {
    throw new Error('No se hizo correctamente');
  }

  const data = await resp.json();
  return data;
};
