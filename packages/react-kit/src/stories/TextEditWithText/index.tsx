
import { Box, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { TextEditable, sizesType } from '../../components/TextEditable'

interface Props {
    readOnly?: boolean;
    errorMessage: string;
    sizesType: sizesType;
    hasError: boolean;
    maxRows?: number
    scrollbar?: boolean;
}

export const Content = ({ errorMessage, sizesType, readOnly, hasError, maxRows, scrollbar }: Props) => {

    const [value, setValue] = useState('Text Editable')

    return (
        <Box
            width="364px"
        >
            <TextEditable
                errorMessage={errorMessage}
                readOnly={readOnly}
                sizesType={sizesType}
                setValue={setValue}
                hasError={hasError}
                value={value}
                maxRows={maxRows}
                scrollbar={scrollbar}
            >
                <Text
                    textStyle={sizesType}
                    noOfLines={[maxRows ?? 1000, maxRows ?? 1000]}
                >
                    {value}
                </Text>
            </TextEditable>
        </Box>
    )
}
