import React from 'react';
import { CardItem } from '@iseazy/react-kit';
import { Box } from '@chakra-ui/react';

import weatherlyStore from 'src/store/weatherlyStore';
export const Card = () => {
  const { dataWeather, setDataWeather } = weatherlyStore();
  return (
    <Box display={'flex'} gap={'10px'}>
      <CardItem
        article={dataWeather.name}
        coverImage="https://i.pinimg.com/1200x/11/07/a2/1107a23180f01c0cb90ac0b7f5961e00.jpg"
        date="7/09/23"
        editable="Managua"
        hour="15:21"
        isChecked={false}
        sizeCard={'sm'}
        time="aaa"
        typeIcon="IconGhost"
      />

      <CardItem
        article={dataWeather.name}
        coverImage="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Masaya_church_in_the_Central_Park.jpg/1200px-Masaya_church_in_the_Central_Park.jpg"
        date="7/09/23"
        editable="Masaya"
        hour={dataWeather.name}
        isChecked={false}
        sizeCard={'sm'}
        time="aaa"
        typeIcon="IconAtom"
      />

      <CardItem
        article="Granada"
        coverImage="https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/04/nicaragua_granda_sunset-over-nicaragua-mountains-e1492099081357-1170x658.jpg"
        date="7/09/23"
        editable="Granada"
        hour="15:21"
        isChecked={false}
        sizeCard={'sm'}
        time="aaa"
        typeIcon="IconFilters"
      />
    </Box>
  );
};
