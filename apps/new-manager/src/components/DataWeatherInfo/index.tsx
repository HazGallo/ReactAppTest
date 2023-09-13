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
  const date = new Date(timestamp * 1000);
  let hours = date.getHours();
  const minutes = date.getMinutes();

  console.log(dataWeather);
  console.log(dataWeather.weather);
  const iconCode = dataWeather?.weather[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

  const [t, i18n] = useTranslation('global');

  let amOrPm = 'AM';

  if (hours >= 12) {
    amOrPm = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  }

  // Crear un objeto que mapea descripciones a claves de traducción
  const cloudDescriptions: Record<string, string> = {
    'clear sky': 'CloudsDesc.clearSky',
    'scattered clouds': 'CloudsDesc.scatteredCloud',
    'broken clouds': 'CloudsDesc.brokenClouds',
    'few clouds': 'CloudsDesc.fewClouds',
    'overcast clouds': 'CloudsDesc.overCast',
    'light rain': 'CloudsDesc.lightRain',
    'light intensity drizzle': 'CloudsDesc.lightIntensity',
  };

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

      <Box
        display={['block', 'flex']}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box
          borderRightWidth={['0px', '2px']}
          borderRightColor={['transparent', 'neAccent.500']}
          w={['100%', '50%']}
          h={'100%'}
        >
          <UnorderedList p={['0rem', '1rem']}>
            {dataWeather?.weather?.map((element) => (
              <Box
                listStyleType={'none'}
                key={element.id}
                display={'flex'}
                flexDirection={'column'}
                alignItems={['center', 'initial']}
                gap={'10px'}
                textTransform={'capitalize'}
              >
                <ListItem fontWeight={'bold'}>
                  {date.toLocaleDateString()} <br /> {hours}:{minutes} {amOrPm}
                </ListItem>

                <ListItem
                  display={'flex'}
                  alignItems={'center'}
                  w={'50%'}
                  fontWeight={'bold'}
                >
                  {cloudDescriptions[element.description] !== undefined // Comprobamos si existe una traducción
                    ? t(cloudDescriptions[element.description]) // Si existe, traducimos
                    : element.description}
                </ListItem>

                <ListItem
                  display={'flex'}
                  alignItems={'center'}
                  color={'yellow.500'}
                  fontWeight={'bold'}
                >
                  {dataWeather.main.temp}°C
                  <Image src={iconUrl} />
                </ListItem>
              </Box>
            ))}
          </UnorderedList>
        </Box>

        <Box
          w={['100%', '50%']}
          h={'100%'}
          borderTopWidth={['2px', '0px']}
          borderTopColor={['neAccent.500', 'transparent']}
        >
          <UnorderedList p={'1rem'}>
            {dataWeather?.weather?.map((element) => (
              <Box
                key={element.id}
                display={'flex'}
                flexDirection={'column'}
                gap={'10px'}
                alignItems={['center', 'initial']}
              >
                <ListItem
                  display={'flex'}
                  alignItems={'center'}
                  gap={'5px'}
                  fontSize={['sm', 'md']}
                  fontWeight={'bold'}
                  textAlign={['center', 'initial']}
                >
                  <Image w={['15%', '8%']} src={IconMaxTemp} />
                  {t('Temp.tempMax')}: <br /> {dataWeather.main.temp_max}°C
                </ListItem>

                <ListItem
                  display={'flex'}
                  alignItems={'center'}
                  gap={'5px'}
                  fontSize={['sm', 'md']}
                  fontWeight={'bold'}
                  textAlign={['center', 'initial']}
                >
                  <Image w={['15%', '8%']} src={IconMinTemp} />
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
