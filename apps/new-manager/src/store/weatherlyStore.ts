import create from 'zustand';
import { PropsDataWeather } from 'src/services/Interfaces/CityData';

const emptyData: PropsDataWeather = {
  coord: { lon: 0, lat: 0 },
  weather: [],
  base: '',
  main: {
    temp: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    pressure: 0,
    humidity: 0,
  },
  visibility: 0,
  wind: { speed: 0, deg: 0 },
  clouds: { all: 0 },
  dt: 0,
  sys: {
    type: 0,
    id: 0,
    country: '',
    sunrise: 0,
    sunset: 0,
  },
  timezone: 0,
  id: 0,
  name: '',
  cod: 0,
};

interface InputState {
  dataWeather: PropsDataWeather;
  setDataWeather: (dataWeather: PropsDataWeather) => void;
}

const weatherlyStore = create<InputState>((set) => ({
  dataWeather: emptyData,
  setDataWeather: (dataWeather) => {
    set((state) => ({
      ...state,
      dataWeather: dataWeather,
    }));
  },
}));

export default weatherlyStore;
