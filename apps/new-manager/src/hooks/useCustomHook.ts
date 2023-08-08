import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type Field = {
  type: any;
  label: any;
  value?: any; // Agregar la propiedad 'value'
};

export type FormValues = {
  [key: string]: Field;
};

type HookProps = {
  schema: any; //Yup.ObjectSchema<FormValues>
  initialState: FormValues;
  onSubmit: (values: FormValues) => Promise<void>;
};

export const useCustomHook = ({
  schema,
  initialState,
  onSubmit,
}: HookProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [formValues, setFormValues] = useState(initialState);
  const [error, setError] = useState<string>('');

  const handleFormSubmit = async (data: FormValues) => {
    try {
      await onSubmit(data);
      setError('');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return {
    errors,
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    setFormValues,
    error,
    formValues,
  };
};
