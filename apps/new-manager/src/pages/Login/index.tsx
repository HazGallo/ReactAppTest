import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validation/schema';

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
  useColorMode,
} from '@chakra-ui/react';

import Swal from 'sweetalert2';

import Loading from '../../components/Loading';
import BtnColorMode from '../../components/BtnColorMode';

import { useLogin } from './hooks/useLogin';
import { useSettings } from '../../store/settingsStore';

import { LoginParams } from './interfaces/LoginParams';

import Logo from '../../assets/iseazyLight.png';
import Logo2 from '../../assets/iseazyDark.png';

import { shallow } from 'zustand/shallow';

const Login = () => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  const { setInfoUser } = useSettings(
    (state) => ({ setInfoUser: state.setInfoUser }),
    shallow
  );

  // We make the request and destructure the values we want
  const { mutate, isError, isLoading, data, isSuccess } = useLogin();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginParams>({
    resolver: yupResolver(schema),
  });

  // we make the request
  const onSubmit = async ({ username, password }: LoginParams) => {
    mutate({ username, password });
  };

  useEffect(() => {
    if (isError) {
      Swal.fire('Invalid Credentials.');
    }
    if (isSuccess) {
      reset();
      setInfoUser(data);
      navigate('/');
    }
  }, [isError, isSuccess]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Flex
      width="full"
      height="100vh"
      alignItems="center"
      position="relative"
      justifyContent="center"
      bg="primary"
    >
      <Box position="absolute" top="2%" right="2%">
        <BtnColorMode />
      </Box>
      <Box
        p={8}
        minWidth="350px"
        maxWidth="400px"
        borderRadius={8}
        boxShadow="lg"
        shadow="2xl"
        bg="primary"
      >
        <Flex direction="column" alignItems="center">
          <Image
            src={colorMode === 'light' ? Logo2 : Logo}
            w="full"
            alt="Logo"
          />
        </Flex>
        <Box textAlign="left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel color="text">Username</FormLabel>
              <Input
                bg="primary"
                {...register('username')}
                type="text"
                placeholder="enter your username"
                color={'text'}
                isInvalid={false}
              />

              {errors?.username && (
                <Text mt={2} color="red.300" fontSize="sm">
                  {errors?.username?.message}
                </Text>
              )}
            </FormControl>
            <FormControl mt={6}>
              <FormLabel color="text">Password</FormLabel>
              <Input
                {...register('password')}
                type="password"
                placeholder="enter your password"
                bg="primary"
                color={'text'}
              />
              {errors?.password && (
                <Text mt={2} color="red.300" fontSize="sm">
                  {errors?.password?.message}
                </Text>
              )}
            </FormControl>
            <Button
              width="full"
              mt={4}
              type="submit"
              bg="txHighlight"
              _hover={{ bg: 'txHighlight' }}
              color="white"
            >
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;