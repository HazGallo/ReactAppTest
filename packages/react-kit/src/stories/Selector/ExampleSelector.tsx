import { useState } from 'react';
import { Selector } from '../../components/Selector';

interface Props {
  icon?: any;
  title: string;
  description?: string;
  disabled: boolean;
  warning: boolean;
  type: 'lg' | 'md' | 'sm';
}

export const ExampleSelector = (props: Props) => {
  const { type, icon, title, description, disabled, warning } = props;

  const [isSelected, setIsSelected] = useState(false);

  return (
    <Selector
      type={type}
      icon={icon}
      title={title}
      description={description}
      disabled={disabled}
      warning={warning}
      isSelected={isSelected}
      onClick={() => setIsSelected((prev) => !prev)}
    />
  );
};
