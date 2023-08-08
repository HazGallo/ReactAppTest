import { Box, BoxProps } from '@chakra-ui/react';

import { SelectorLg } from './components/SelectorLg';
import { SelectorMd } from './components/SelectorMd';
import { SelectorPath } from './components/SelectorPath';
import { SelectorSm } from './components/SelectorSm';
import { types, noIcoType } from '../../shared/iconsTypes/icons';
import { SelectorBig } from './components/SelectorBig';

interface Props extends BoxProps {
  typeIcon?: types | noIcoType; //It is optional, but for as long as it is not, until they send the new icons
  title: string;
  description?: string;
  isDisabled?: boolean;
  warning?: boolean;
  type:
    | 'lg'
    | 'md'
    | 'sm'
    | 'selectorBig'
    | 'SelectorPathExpress'
    | 'SelectorPathSteps'
    | 'SelectorPathWizard'
    | 'SelectorPathInstagram'
    | 'SelectorPathCourse';
  isSelected?: boolean;
  onClick?: () => void;
}

export const Selector = (props: Props) => {
  const {
    isSelected,
    onClick,
    isDisabled,
    title,
    description,
    warning,
    typeIcon,
    type,
    ...rest
  } = props;

  return (
    <Box {...rest}>
      {type === 'lg' ? (
        <SelectorLg
          typeIcon={typeIcon}
          title={title}
          description={description}
          isDisabled={isDisabled}
          warning={warning}
          isSelected={isSelected}
          onClick={onClick}
        />
      ) : type === 'md' ? (
        <SelectorMd
          typeIcon={typeIcon}
          title={title}
          description={description}
          isDisabled={isDisabled}
          warning={warning}
          isSelected={isSelected}
          onClick={onClick}
        />
      ) : type === 'sm' ? (
        <SelectorSm
          typeIcon={typeIcon}
          title={title}
          isDisabled={isDisabled}
          warning={warning}
          isSelected={isSelected}
          onClick={onClick}
        />
      ) : type === 'selectorBig' ? (
        <SelectorBig
          typeIcon={typeIcon}
          title={title}
          description={description}
          isDisabled={isDisabled}
          warning={warning}
          isSelected={isSelected}
          onClick={onClick}
        />
      ) : (
        <SelectorPath
          title={title}
          description={description}
          isDisabled={isDisabled}
          warning={warning}
          isSelected={isSelected}
          onClick={onClick}
          type={type}
        />
      )}
    </Box>
  );
};
