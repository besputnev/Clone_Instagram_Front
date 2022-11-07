import { Avatar, Box, Text, Icon, Image } from "@chakra-ui/react";
import { AiOutlineEllipsis } from "react-icons/ai";
import { TbMessageCircle, TbBrandTelegram } from "react-icons/tb";
import { FiHeart } from "react-icons/fi";
import { RiBookmarkFill } from "react-icons/ri";
import { VscSmiley } from "react-icons/vsc";

const Post = () => {
  return (
    <Box display="flex" justifyContent="center" mt={5}>
      <Box border="1px solid #d6d6d6" borderRadius={10}>
        <Box display="flex" justifyContent="space-between" w={500} p={3}>
          <Box display="flex">
            <Box mr={3}>
              <Avatar name="Gachi" h={7} w={7} />
            </Box>
            <Box>
              <Text fontWeight="bold" fontSize={15}>
                gachi_muchi
              </Text>
            </Box>
          </Box>
          <Box>
            <Icon as={AiOutlineEllipsis} h={7} w={7} />
          </Box>
        </Box>
        <Image
          src="https://icdn.lenta.ru/images/2021/01/29/17/20210129175240891/detail_397f77396617f756170a445e1ae4e7a2.jpg"
          alt="Gachi"
          maxW={500}
          minW={500}
        />
        <Box display="flex" justifyContent="space-between" w={500} p={3}>
          <Box display="flex">
            <Box mr={3}>
              <Icon
                as={FiHeart}
                h={7}
                w={7}
                ml="10%"
                transition="all .15s ease"
                _hover={{
                  transform: "scale(1.33)",
                  filter: "brightness(120%)",
                }}
              />
            </Box>
            <Box mr={3}>
              <Icon
                as={TbMessageCircle}
                h={7}
                w={7}
                ml="10%"
                transition="all .15s ease"
                _hover={{
                  transform: "scale(1.33)",
                  filter: "brightness(120%)",
                }}
              />
            </Box>
            <Box>
              <Icon
                as={TbBrandTelegram}
                h={7}
                w={7}
                ml="10%"
                transition="all .15s ease"
                _hover={{
                  transform: "scale(1.33)",
                  filter: "brightness(120%)",
                }}
              />
            </Box>
          </Box>
          <Box>
            <Icon
              as={RiBookmarkFill}
              h={7}
              w={7}
              ml="10%"
              transition="all .15s ease"
              _hover={{
                transform: "scale(1.33)",
                filter: "brightness(120%)",
              }}
            />
          </Box>
        </Box>
        <Box borderTop="1px solid #d6d6d6" display="flex" justifyContent="space-between" p={3}>
          <Box display="flex">
            <Box mr={3}>
              <Icon
                as={VscSmiley}
                h={7}
                w={7}
                transition="all .15s ease"
                _hover={{
                  transform: "scale(1.33)",
                  filter: "brightness(120%)",
                }}
              />
            </Box>
            <Box mt={1}>
              <Text fontSize={14}>Добавьте комментарий...</Text>
            </Box>
          </Box>
          <Box mt={1}>
            <Text fontSize={14} color="#3ba0ffd3">Опубликовать</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Post;
