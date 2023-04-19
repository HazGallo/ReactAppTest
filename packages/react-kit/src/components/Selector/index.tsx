import { Box, BoxProps } from '@chakra-ui/react';
import { SelectorLg } from './components/SelectorLg';
import { SelectorMd } from './components/SelectorMd';
import { SelectorSm } from './components/SelectorSm';

interface Props extends BoxProps {
  icon?: any;
  title: string;
  description?: string;
  disabled: boolean;
  warning: boolean;
  type: 'lg' | 'md' | 'sm';
  isSelected?: boolean;
  onClick?: () => void;
}

export const Selector = (props: Props) => {
  const {
    isSelected,
    onClick,
    disabled,
    title,
    description,
    warning,
    icon,
    type,
    ...rest
  } = props;

  return (
    <Box {...rest}>
      {type === 'lg' ? (
        <SelectorLg
          icon={icon}
          title={title}
          description={description}
          disabled={disabled}
          warning={warning}
          isSelected={isSelected}
          onClick={onClick}
        />
      ) : type === 'md' ? (
        <SelectorMd
          icon={icon}
          title={title}
          description={description}
          disabled={disabled}
          warning={warning}
          isSelected={isSelected}
          onClick={onClick}
        />
      ) : (
        <SelectorSm
          icon={icon}
          title={title}
          disabled={disabled}
          warning={warning}
          isSelected={isSelected}
          onClick={onClick}
        />
      )}
    </Box>
  );
};
