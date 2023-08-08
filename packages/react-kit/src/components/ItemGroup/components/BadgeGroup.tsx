import { Box } from '@chakra-ui/react';

interface Props {
  BadgeGroupColor: string;
}

const BadgeGroup: React.FC<Props> = ({ BadgeGroupColor }) => {
  return (
    <Box
      width="32px"
      height="32px"
      background={BadgeGroupColor}
      boxShadow="0px 3px 6px"
      color="bgShadow"
      borderRadius="4px"
    ></Box>
  );
};

export default BadgeGroup;
