import { Avatar, Box, Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {FaFacebook, FaTwitter} from "react-icons/fa";

const avatarSrc = "https://sm.ign.com/ign_pk/cover/a/avatar-gen/avatar-generations_rpge.jpg";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack  direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in Pakistan, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>
        <HStack>
        <a href="http://www.facebook.com" target="_blank">
  <Button colorScheme='facebook' leftIcon={<FaFacebook />}>
    Facebook
  </Button></a>
  <a href="http://www.twitter.com" target="_blank">
    <Button colorScheme='twitter' leftIcon={<FaTwitter />}>
    Twitter
  </Button></a>
</HStack>
        <VStack >
         <Avatar stroke={'2 solid red'} boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;