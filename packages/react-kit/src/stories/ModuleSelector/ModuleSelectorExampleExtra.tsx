import { Box, Text } from '@chakra-ui/react';
import { InputText } from '../../components/InputText';
import { ModuleSelector } from '../../components/ModuleSelector';
import { Selector } from '../../components/Selector';

interface contentData {
  title: string;
  isMenuItem?: boolean;
}

interface Props {
  dataMenu: contentData[];
  isDisabled?: boolean;
  checked?: boolean;
  children?: any;
  placeholder?: string;
  warning?: boolean;
  readOnly?: boolean;
}

export const ModuleSelectorExampleExtra = (props: Props) => {
  const { checked, isDisabled, placeholder, warning, dataMenu, readOnly } = props;

  return (
    <Box
      w={'1420px'}
      display={'flex'}
      alignItems="center"
      justifyContent="center"
      margin="20px"
    >
      <ModuleSelector
        isDisabled={isDisabled}
        checked={checked}
        placeholder={placeholder}
        warning={warning}
        dataMenu={dataMenu}
        valueHeading={'Welcome page'}
        valueText={
          'Welcome to out app! We are so happy to have you join us!'
        }
        readOnly={readOnly}
      >
        <Box
          h="full"
          width={'full'}
          display="flex"
          alignContent={'center'}
          justifyContent={'center'}
          pt="20px"
        >
          <Text textStyle={'lg'} mr="20px" mt="8px">
            Set the cut-off mark
          </Text>

          <Box width={'100px'}>
            <Selector
              title={'4,5'}
              isDisabled={isDisabled}
              warning={false}
              type={'sm'}
            />
          </Box>

          <Box mx="20px" width={'100px'}>
            <Selector
              title={'5'}
              isDisabled={isDisabled}
              warning={false}
              type={'sm'}
            />
          </Box>

          <Box mr="20px" width={'100px'}>
            <Selector
              title={'7,5'}
              isDisabled={isDisabled}
              warning={false}
              type={'sm'}
            />
          </Box>
          <Box width={'100px'}>
            <InputText
              hasError={false}
              placeholder="Custom"
              sizes="md"
              isDisabled={isDisabled} onChange={function (event: any): void {
                throw new Error('Function not implemented.');
              } }            />
          </Box>

          <Text textStyle={'lg'} ml="60px" mr="25px" mt="8px">
            Set the available attempts
          </Text>

          <Box mr="20px" width={'100px'}>
            <Selector
              title={'1'}
              isDisabled={isDisabled}
              warning={false}
              type={'sm'}
            />
          </Box>

          <Box mr="20px" width={'100px'}>
            <Selector
              title={'3'}
              isDisabled={isDisabled}
              warning={false}
              type={'sm'}
            />
          </Box>

          <Box mr="20px" width={'100px'}>
            <Selector
              title={'5'}
              isDisabled={isDisabled}
              warning={false}
              type={'sm'}
            />
          </Box>
          <Box width={'100px'}>
            <InputText
              hasError={false}
              placeholder="Custom"
              sizes="md"
              isDisabled={isDisabled} onChange={function (event: any): void {
                throw new Error('Function not implemented.');
              } }            />
          </Box>
        </Box>
      </ModuleSelector>
    </Box>
  );
};
