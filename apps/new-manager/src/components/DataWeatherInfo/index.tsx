import { Box, Heading, Image, ListItem, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import weatherlyStore from 'src/store/weatherlyStore';
import IconWind from 'src/assets/icons/icoWind.svg';
import IconMaxTemp from 'src/assets/icons/icoMaxTemp.svg';
import IconMinTemp from 'src/assets/icons/icoMinTemp.svg';
import { useTranslation } from 'react-i18next';

export const DataWeatherInfo = () => {
  const { dataWeather, setDataWeather } = weatherlyStore();

  const timestamp = dataWeather.dt;
  const date = new Date(timestamp * 1000); // funcion para sacar la fecha de dt
  let hours = date.getHours(); // funcion para sacar la hora de dt
  const minutes = date.getMinutes(); // funcion para sacar los minutos de dt

  console.log(dataWeather);
  console.log(dataWeather.weather);
  const iconCode = dataWeather?.weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

  const [t, i18n] = useTranslation('global');

  let amOrPm = 'AM';

  // si es AM o PM y ajustar las horas en consecuencia
  if (hours >= 12) {
    amOrPm = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  }

  // let clouds = () => {
  //   const description = dataWeather?.weather?.map((element) => {
  //     return element.description;
  //   });

  //   return description ? description.join(', ') : '';
  // };

  // switch (clouds()) {
  //   case 'clear sky':
  //     break;
  //   case '':
  //     break;
  // }

  // const showClouds = {
  //   'clear sky': () => t('CloudsDesc.clearSky'),
  // };

  return (
    <Box display={'block'} justifyContent={'center'} alignItems={'center'}>
      <Heading
        display={'flex'}
        justifyContent={'center'}
        color={'neAccent.500'}
        fontSize={'30px'}
        fontWeight={'bold'}
      >
        {dataWeather.name}
      </Heading>

      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box
          w={'50%'}
          h={'100%'}
          borderRightWidth="2px"
          borderRightColor="neAccent.500"
        >
          <UnorderedList p={'1rem'}>
            {dataWeather?.weather?.map((element) => (
              <Box
                listStyleType={'none'}
                key={element.id}
                display={'flex'}
                flexDirection={'column'}
                gap={'10px'}
                textTransform={'capitalize'}
              >
                <ListItem fontWeight={'bold'}>
                  {date.toLocaleDateString()} {hours}:{minutes} {amOrPm}
                </ListItem>

                <ListItem
                  display={'flex'}
                  alignItems={'center'}
                  w={'50%'}
                  fontWeight={'bold'}
                >
                  {element.description === 'clear sky'
                    ? t('CloudsDesc.clearSky')
                    : element.description === 'scattered clouds'
                    ? t('CloudsDesc.scatteredCloud')
                    : element.description === 'broken clouds'
                    ? t('CloudsDesc.brokenClouds')
                    : element.description === 'few clouds'
                    ? t('CloudsDesc.fewClouds')
                    : element.description === 'overcast clouds'
                    ? t('CloudsDesc.overCast')
                    : ''}
                  <Image src={iconUrl} />
                </ListItem>

                <ListItem color={'yellow.500'} fontWeight={'bold'}>
                  {dataWeather.main.temp}°C
                </ListItem>
              </Box>
            ))}
          </UnorderedList>
        </Box>

        <Box w={'50%'} h={'100%'}>
          <UnorderedList p={'1rem'}>
            {dataWeather?.weather?.map((element) => (
              <Box
                key={element.id}
                display={'flex'}
                flexDirection={'column'}
                gap={'10px'}
              >
                <ListItem
                  display={'flex'}
                  alignItems={'center'}
                  gap={'5px'}
                  fontSize={'sm'}
                  fontWeight={'bold'}
                >
                  <Image w={'8%'} src={IconMaxTemp} />
                  {t('Temp.tempMax')}: <br /> {dataWeather.main.temp_max}°C
                </ListItem>

                <ListItem
                  display={'flex'}
                  alignItems={'center'}
                  gap={'5px'}
                  fontSize={'sm'}
                  fontWeight={'bold'}
                >
                  <Image w={'8%'} src={IconMinTemp} />
                  {t('Temp.tempMin')}: <br /> {dataWeather.main.temp_max}°C
                </ListItem>
              </Box>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Box>
  );
};

export default DataWeatherInfo;
