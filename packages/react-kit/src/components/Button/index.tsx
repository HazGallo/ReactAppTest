import { Button as CustomButton, ButtonProps, Text } from '@chakra-ui/react';

interface Props extends ButtonProps {
  label: string;
}

export const Button = (props: Props) => {
  const { label, ...rest } = props;

  return (
    <CustomButton
      w="full"
      h="40px"
      bg="neAccent.500"
      _hover={{
        bg: 'neAccent.400',
      }}
      _dark={{
        bg: 'neAccent.400',
        _hover: {
          bg: 'neAccent.500',
        },
      }}
      rounded="25px"
      px="30px"
      {...rest}
    >
      <Text textStyle="lg" color="neWhite.500">
        {label}
      </Text>
    </CustomButton>
  );
};
