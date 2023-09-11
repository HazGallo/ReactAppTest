import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Card } from './components/Card';
import { Button } from './components/button';
import SearchInput from './components/SearchInput';
import { useWeather } from './hooks/useWeather';
import useInputStore from './store/weatherlyStore';
import { DataWeatherInfo } from './components/DataWeatherInfo';
import { TransButton } from './components/TransButton';

function App({}) {
  // Initialize inputValue from localStorage or an empty string
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('inputValue') || ''
  );

  const handleInputChange = (value: string) => {
    // Update inputValue when the input changes
    setInputValue(value);
  };

  // The rest of your component code remains the same
  const { isError, isLoading, data, mutate, isSuccess } = useWeather();
  const { dataWeather, setDataWeather } = useInputStore();

  useEffect(() => {
    mutate({ city: inputValue ? inputValue : 'London' });
  }, [inputValue, mutate]);

  useEffect(() => {
    console.log('UseEffectDataWeather');
    console.log(data);
    console.log(isSuccess);
    console.log(isError);
    console.log(Error);
    if (data && isSuccess) {
      setDataWeather(data);
    }
  }, [data, isSuccess, setDataWeather, isError, Error]);

  if (isLoading) {
    return (
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        w={'100%'}
        h={'100vh'}
      >
        <Heading>Loading..</Heading>
      </Box>
    );
  }
  if (isError) {
    return <Heading>Error</Heading>;
  }

  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      bg={'blue.800'}
      w={'100%'}
      h={'100vh'}
      gap={'20px'}
    >
      <TransButton />
      {/* Weather Api */}
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={'10px'}
        p={'1rem'}
        w={'70%'}
        h={'65%'}
      >
        {/* Weather */}
        <Box
          bg={'white'}
          borderRadius={'md'}
          p={'1rem'}
          w={'90%'}
          h={'100%'}
          color={'bgShadow'}
          boxShadow={'0px 3px 6px'}
        >
          <Box
            mb={'20px'}
            justifyContent={'center'}
            width={'100%'}
            display={'flex'}
          >
            <SearchInput
              inputValue={inputValue}
              handleChange={handleInputChange}
            />
            <Button />
          </Box>
          <Box color={'black'}>
            <DataWeatherInfo />
          </Box>
        </Box>
        {/* Cards */}
        {/* <Box
          className="overflow"
          display={'flex'}
          alignItems={'center'}
          gap={'10px'}
          bg={'white'}
          borderRadius={'md'}
          p={'1rem'}
          w={'35%'}
          h={'100%'}
          color={'bgShadow'}
          boxShadow={'0px 3px 6px'}
          overflowX={'scroll'}
          justifyContent={'center'}
        >
          <Card />
        </Box> */}
      </Box>
    </Box>
  );
}

export default App;
