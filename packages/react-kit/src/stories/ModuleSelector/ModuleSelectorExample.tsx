import { Box } from '@chakra-ui/react';
import { ModuleSelector } from '../../components/ModuleSelector';

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

export const ModuleSelectorExample = (props: Props) => {
  const { checked, isDisabled, placeholder, warning, dataMenu, readOnly } = props;

  return (
    <Box
      w={'1420px'}
      h="110px"
      margin="20px"
      display={'flex'}
      alignItems="center"
      justifyContent="center"
    >
      <ModuleSelector
        isDisabled={isDisabled}
        placeholder={placeholder}
        warning={warning}
        dataMenu={dataMenu}
        valueHeading={'Test'}
        valueText={
          'Test the user knowledge and make sure the content sticks. Unlock the assessment start mode for even more user knowledge data.'
        }
        readOnly={readOnly}
      />
    </Box>
  );
};
