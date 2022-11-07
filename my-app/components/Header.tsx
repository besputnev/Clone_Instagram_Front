/* eslint-disable react/no-children-prop */
import React from "react";
import Image from "next/image";
import {
  Box,
  Input,
  Stack,
  InputGroup,
  InputLeftElement,
  Icon,
  Avatar,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { MdHomeFilled } from "react-icons/md";
import { FiPlusSquare, FiHeart } from "react-icons/fi";
import { TbMessageCircle } from "react-icons/tb";
import { RiCompass3Line } from "react-icons/ri";

const Header = () => {
  return (
    <Box shadow="sm" position="sticky" mb={10}>
      <Box display="flex" justifyContent="space-between" maxW="4xl" m="auto">
        <Box position="relative" h={24} w={24}>
          <Image
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="instImage"
            layout="fill"
            objectFit="contain"
          />
        </Box>
        <Box position="relative" mt="auto" mb="auto">
          <Stack spacing={4}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon color="gray.300" />}
                pb={1}
              />
              <Input
                placeholder="Search"
                focusBorderColor="black"
                bgColor="#f0f0f0"
                h={9}
              />
            </InputGroup>
          </Stack>
        </Box>
        <Box display="flex" position="relative" mt="auto" mb="auto">
          <Icon
            as={MdHomeFilled}
            h={7}
            w={7}
            transition="all .15s ease"
            _hover={{ transform: "scale(1.33)", filter: "brightness(120%)" }}
          />
          <Icon
            as={TbMessageCircle}
            h={7}
            w={7}
            ml="10%"
            transition="all .15s ease"
            _hover={{ transform: "scale(1.33)", filter: "brightness(120%)" }}
          />
          <Icon
            as={FiPlusSquare}
            h={7}
            w={7}
            ml="10%"
            transition="all .15s ease"
            _hover={{ transform: "scale(1.33)", filter: "brightness(120%)" }}
          />
          <Icon
            as={RiCompass3Line}
            h={7}
            w={7}
            ml="10%"
            transition="all .15s ease"
            _hover={{ transform: "scale(1.33)", filter: "brightness(120%)" }}
          />
          <Icon
            as={FiHeart}
            h={7}
            w={7}
            ml="10%"
            transition="all .15s ease"
            _hover={{ transform: "scale(1.33)", filter: "brightness(120%)" }}
          />
          <Avatar name="Gachi" h={7} w={7} ml="10%" />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
