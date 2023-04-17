import { useCustomHook } from "./useCustomHook";
import * as Yup from 'yup';
import { Button, FormControl, FormErrorMessage, FormLabel, Text, Textarea } from "@chakra-ui/react";

const schema = Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.number().required(),
    message: Yup.string().required()
});

const initialState = {
    name: "",
    age: 0,
    message: ''
};


export function FormExample() {
    const {
        register,
        handleSubmit,
        errors,
        formValues,
        setFormValues,
        onSubmit,
    } = useCustomHook({ schema, initialState });


    // ********************* implementation *****************************

    return (
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <FormControl>
                <FormLabel>Name</FormLabel>
                <input {...register("name")} />
                <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl>
                <FormLabel>Age</FormLabel>
                <input type="number" {...register("age")} />
                <FormErrorMessage>{errors?.age?.message}</FormErrorMessage>
            </FormControl>

            <FormControl>
                <FormLabel>Message</FormLabel>
                <Textarea {...register("message")} />
                <FormErrorMessage>{errors?.message?.message}</FormErrorMessage>
            </FormControl>

            <Button type="submit">Submit</Button>
        </form>
    );
}
