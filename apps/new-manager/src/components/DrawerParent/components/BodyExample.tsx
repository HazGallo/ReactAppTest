import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FileDropper, TextEditable } from '@iseazy/react-kit';
import { useState } from 'react'
import { useNavSize } from '../../../store/BtnMenu';

const BodyExample = () => {
    const [value, setValue] = useState('New Video')
    const [valueDescription, setValueDescription] = useState('Add a brief description')

    const { InfoCardDrawer, readonly } = useNavSize()


    return (
        <div>
            <Box
                width="full"
                marginTop="20px"
            >
                <TextEditable
                    errorMessage="Error Message"
                    readOnly={readonly}
                    sizesType="lg"
                    setValue={setValue}
                    hasError={false}
                    value={value}
                    maxRows={1000}
                    scrollbar={false}
                >
                    <Heading
                        size="lg"
                        noOfLines={[1000, 1000]}
                        lineHeight={"unset"}
                    >
                        {value}
                    </Heading>
                </TextEditable>

            </Box>
            <TextEditable
                errorMessage="Error Message"
                readOnly={readonly}
                sizesType="md"
                setValue={setValueDescription}
                hasError={false}
                value={valueDescription}
                maxRows={1000}
                scrollbar={false}
            >
                <Text size='md' textStyle={'md'} noOfLines={[1000, 1000]} color="gray.300">{valueDescription}</Text>
            </TextEditable>

            <Flex w="100%" justifyContent="space-between" alignItems="center">
                <Heading size="sm">Content</Heading>
                {/* <FormControl justifyContent="end" display='flex' alignItems='center'>
            <FormLabel fontSize="13px" htmlFor='email-alerts' mb='0'>
              multi-language
            </FormLabel>
            <Switch id='email-alerts' size="md" />
          </FormControl> */}
            </Flex>

            <Flex marginTop="20px" w="100%">
                <FileDropper
                    type='video'
                    disabled={false}
                    errorMessage="Error Message"
                    hasError={false}
                    warning={false}
                    onDrop={(files: any) => {
                        console.log({ files });
                    }}
                    maxFiles={1}
                    maxSize={10 * 1000 * 1000}
                />
            </Flex>
            <Flex flexDirection="column" gap="5">
                <Heading size="sm">Make it pop!</Heading>
                <Image height="200px" w="full" rounded="md" objectFit="cover" backgroundPosition="center" src={InfoCardDrawer?.coverimage} alt="image" />
            </Flex>
        </div>
    )
}

export default BodyExample