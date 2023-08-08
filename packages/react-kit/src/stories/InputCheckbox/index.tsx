import { InputCheckbox } from '../../../src/components/InputCheckbox';

interface Props {
  checked: boolean;
  isDisabled: boolean;
}

const InputCheckboxExample = ({ checked, isDisabled }: Props) => {
  return <InputCheckbox checked={checked} isDisabled={isDisabled} />;
};

export default InputCheckboxExample;
