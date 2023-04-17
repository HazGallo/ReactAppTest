import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type FormValues = {
  name: string;
  age: number;
  message: string
};

type HookProps = {
  schema: Yup.ObjectSchema<FormValues>;
  initialState: FormValues;
};

export const useCustomHook = ({ schema, initialState }: HookProps) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: initialState,
  });

  // handle form state
  const [formValues, setFormValues] = useState(initialState);

  const onSubmit = (data: FormValues) => {
    // handle form submission
  };

  return {
    ...formState,
    register,
    handleSubmit,
    formValues,
    setFormValues,
    onSubmit,
  };
};
