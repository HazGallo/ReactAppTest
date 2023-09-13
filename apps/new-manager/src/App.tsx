import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
// import { Card } from './components/Card';
// import { Button } from './components/button';
import SearchInput from './components/SearchInput';
import { useWeather } from './hooks/useWeather';
import useInputStore from './store/weatherlyStore';
import { DataWeatherInfo } from './components/DataWeatherInfo';
import { TransButton } from './components/TransButton';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

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

  const [pageLoaded, setPageLoaded] = useState(true);

  useEffect(() => {
    // This effect will run only once when the component is mounted
    setPageLoaded(false);
  }, []);

  // Use localStorage to save and load inputValue
  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (pageLoaded) {
      return; // Don't make the API call and show loading message
    }
    mutate({ city: inputValue ? inputValue : 'London' });
  }, [inputValue, mutate, pageLoaded]);

  useEffect(() => {
    if (isError) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: 'Please Enter A valid city name',
      });
    }
    if (data && isSuccess) {
      setDataWeather(data);
    }
  }, [data, isSuccess, setDataWeather, isError]);

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
        w={['100%', '70%']}
        h={['75%', '65%']}
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
            mb={['5px', '10px']}
            justifyContent={'center'}
            width={'100%'}
            display={'flex'}
          >
            <SearchInput
              inputValue={inputValue}
              handleChange={handleInputChange}
            />
          </Box>
          <Box color={'black'}>
            <DataWeatherInfo />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
