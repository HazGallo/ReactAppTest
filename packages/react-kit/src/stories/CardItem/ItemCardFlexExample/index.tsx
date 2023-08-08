import { Flex } from '@chakra-ui/react';
import { CardItem } from '../../../../src/components/Cards/CardItem';

export const Content = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      gap="6"
      marginTop={8}
    >
      <CardItem
        placeholderSrc="https://ik.imagekit.io/s8b2ycrch/image__5_.png?updatedAt=1679594378559"
        typeStatus="Published"
        typeBadge="audio"
        InfoAndActionBar="5min"
        editableTitle="Meet the team in the office"
        placeholder="title"
        coverImage="/imagen.jpg"
        date="april 10, 2002 03:24:00"
        sizeCard="md"
        checked={false}
        skeleton={false}
        errorMessage={'Error Message'}
        hasError={false}
      />
      <CardItem
        placeholderSrc="https://ik.imagekit.io/s8b2ycrch/image__5_.png?updatedAt=1679594378559"
        typeStatus="Draft"
        typeBadge="external"
        InfoAndActionBar="25min"
        editableTitle="Our new year`s resolutions"
        placeholder="title"
        coverImage="/imagen.jpg"
        date="march 05, 2022 07:24:00"
        sizeCard="md"
        checked={false}
        skeleton={false}
        errorMessage={'Error Message'}
        hasError={false}
      />
      <CardItem
        placeholderSrc="https://ik.imagekit.io/s8b2ycrch/image__5_.png?updatedAt=1679594378559"
        typeStatus="Planned"
        typeBadge="image"
        InfoAndActionBar="35min"
        editableTitle="Welcome dave to the team!"
        placeholder="title"
        coverImage="/imagen.jpg"
        date="november 01, 2000 03:24:00"
        sizeCard="md"
        checked={false}
        skeleton={false}
        errorMessage={'Error Message'}
        hasError={false}
      />
      <CardItem
        placeholderSrc="https://ik.imagekit.io/s8b2ycrch/image__5_.png?updatedAt=1679594378559"
        typeStatus="Draft"
        typeBadge="instagram"
        InfoAndActionBar="2min"
        editableTitle="Safety Protocols"
        placeholder="title"
        coverImage="/imagen.jpg"
        date="july 01, 2000 03:24:00"
        sizeCard="md"
        checked={false}
        skeleton={false}
        errorMessage={'Error Message'}
        hasError={false}
      />
      <CardItem
        placeholderSrc="https://ik.imagekit.io/s8b2ycrch/image__5_.png?updatedAt=1679594378559"
        typeStatus="Published"
        typeBadge="game"
        InfoAndActionBar="50min"
        editableTitle="Winter 2023 collection challange"
        placeholder="title"
        coverImage="/imagen.jpg"
        date="february 28, 2000 03:24:00"
        sizeCard="md"
        checked={false}
        skeleton={false}
        errorMessage={'Error Message'}
        hasError={false}
      />
      <CardItem
        placeholderSrc="https://ik.imagekit.io/s8b2ycrch/image__5_.png?updatedAt=1679594378559"
        typeStatus="Planned"
        typeBadge="express"
        InfoAndActionBar="50min"
        editableTitle="Do you know your coworkers"
        placeholder="title"
        coverImage="/imagen.jpg"
        date="september 05, 1999 03:24:00"
        sizeCard="md"
        checked={false}
        skeleton={false}
        errorMessage={'Error Message'}
        hasError={false}
      />
    </Flex>
  );
};
