import { useMutation } from 'react-query';
import { GetInfoWeather } from 'src/services/GetInfoWeather';
import { PropsDataWeather } from 'src/services/Interfaces/CityData';

export const useWeather = () => {
  return useMutation(GetInfoWeather, {
    onSuccess: (data: PropsDataWeather) => {},
  });
};
