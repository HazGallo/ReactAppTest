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

export const ModuleSelectorExampleV2Extra = (props: Props) => {
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
        valueHeading={"Home"}
        valueText={
          'Share news and relevant content in a global and open timeline'
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
          <Box mr="20px" w="400px">
            <Text textStyle={'lg'} mb="10px">
              App home
            </Text>

            <Box width={'full'}>
              <InputText
                hasError={false}
                placeholder="Home"
                sizes="md"
                isDisabled={isDisabled} onChange={function (event: any): void {
                  throw new Error('Function not implemented.');
                } }              />
            </Box>
          </Box>

          <Box w="full">
            <Text textStyle={'lg'} mb="10px">
              Module description
            </Text>

            <Box width={'full'}>
              <InputText
                hasError={false}
                placeholder="Stay tuned to the latests news and events!"
                sizes="md"
                isDisabled={isDisabled} onChange={function (event: any): void {
                  throw new Error('Function not implemented.');
                } }              />
            </Box>
          </Box>
        </Box>
      </ModuleSelector>
    </Box>
  );
};
