import { Box, Flex, FormControl, Heading, Image, Text } from '@chakra-ui/react';
import { useState } from 'react'
import { TextEditable } from '../../../../../../packages/react-kit/src/components/TextEditable';
import { sliceInformation } from '../../../store/sliceInformation';
import { FileDropper } from '../../../../../../packages/react-kit/src/components/FileDropper/index';

const BodyExample = () => {
    const { InfoCardDrawer, readonly } = sliceInformation()
    const [value, setValue] = useState(InfoCardDrawer.title ?? 'New Video')
    const [valueDescription, setValueDescription] = useState(InfoCardDrawer.title ?? 'Add a brief description')

    return (
        <div>
            <FormControl>
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
            </FormControl>

            {
                InfoCardDrawer.coverimage ?
                    <Flex flexDirection="column" gap="5">
                        <Heading size="sm">Make it pop!</Heading>
                        <Image height="200px" w="full" rounded="md" objectFit="cover" backgroundPosition="center" src={InfoCardDrawer?.coverimage} alt="image" />
                    </Flex> : <></>
            }
        </div>
    )
}

export default BodyExample