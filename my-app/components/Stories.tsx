import { Box, Image, Text } from "@chakra-ui/react";

const Stories = ({ data }: any) => {
  const { first } = data.name;
  const { thumbnail } = data.picture;
  return (
    <Box>
      <Box>
        <Image
          maxW={20}
          src={thumbnail}
          alt="avatar"
          borderRadius={30}
          border="2px solid #de285fef"
          padding={0.5}
        />
      </Box>
      <Box>
        <Text textAlign="center" fontSize={13}>
          {first.substr(0, 7)}
        </Text>
      </Box>
    </Box>
  );
};

export default Stories;
