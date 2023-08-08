import { useState } from 'react';
import { ButtonIco } from '../../components/ButtonIco';
import { ButtonIcoGroup } from '../../components/ButtonIcoGroup';

interface Props {
  sizeName: 'sm' | 'md' | 'lg' | 'xl';
  isDisabled?: boolean;
  warning?: boolean;
  readOnly?: boolean;
}

export const ButtonIcoGroupExample = ({
  sizeName,
  isDisabled,
  readOnly,
  warning,
}: Props) => {
  const [buttonStates, setButtonStates] = useState([false, false, false]);

  const handleButtonClick = (index: number) => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index] = !newButtonStates[index];
    setButtonStates(newButtonStates);
  };

  return (
    <ButtonIcoGroup isDisabled={isDisabled}>
      <ButtonIco
        sizeName={sizeName}
        warning={warning}
        isDisabled={isDisabled}
        readOnly={readOnly}
        typeIcon="IconCardBig"
        aria-label={'buttoIcoNumberOne'}
        backgroundType="noBackground"
        isSelected={buttonStates[0]}
        onClick={() => handleButtonClick(0)}
      />
      <ButtonIco
        sizeName={sizeName}
        warning={warning}
        isDisabled={isDisabled}
        readOnly={readOnly}
        typeIcon="IconCardSmall"
        aria-label={'buttoIcoNumberOne'}
        backgroundType="noBackground"
        isSelected={buttonStates[1]}
        onClick={() => handleButtonClick(1)}
      />
      <ButtonIco
        sizeName={sizeName}
        warning={warning}
        isDisabled={isDisabled}
        readOnly={readOnly}
        typeIcon="IconBullets"
        aria-label={'buttoIcoNumberOne'}
        backgroundType="noBackground"
        isSelected={buttonStates[2]}
        onClick={() => handleButtonClick(2)}
      />
    </ButtonIcoGroup>
  );
};

