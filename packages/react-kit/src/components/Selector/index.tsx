import { Box, CheckboxProps } from '@chakra-ui/react';
import { SelectorLg } from './components/SelectorLg';
import { SelectorMd } from './components/SelectorMd';
import { SelectorSm } from './components/SelectorSm';

interface Props {
  icon?: any;
  title: string;
  description?: string;
  disabled: boolean;
  warning: boolean;
  type: 'lg' | 'md' | 'sm';
}

export const Selector = (props: Props) => {
  const { disabled, title, description, warning, icon, type, ...rest } = props;

  return (
    <Box {...rest}>
      {type === 'lg' ? (
        <SelectorLg
          icon={icon}
          title={title}
          description={description}
          disabled={disabled}
          warning={warning}
        />
      ) : type === 'md' ? (
        <SelectorMd
          icon={icon}
          title={title}
          description={description}
          disabled={disabled}
          warning={warning}
        />
      ) : (
        <SelectorSm
          icon={icon}
          title={title}
          disabled={disabled}
          warning={warning}
        />
      )}
    </Box>
  );
};
