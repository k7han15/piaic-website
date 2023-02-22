"use client";
import { EmailIcon, LinkIcon, PhoneIcon } from "@chakra-ui/icons";

import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <ChakraProvider>
        {/* left Box */}
        <Flex mt={"5%"} py={"2%"} justifyContent={"space-between"} px="5%" backgroundColor={"gray.200"} display={["column","column","flex"]}>
          <Box w={{base:"100%",md:"25%"}} px={"1%"}>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={"125"}
              height={"82"}
            ></Image>
            <Text>
              The mission of Panaverse is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies.
            </Text>
          </Box>
          {/* Right Box */}

          {/* Links box */}

          <Box display={["row","row","row"]} >
            <Text fontWeight={"bold"} py={"10px"} px={"12px"}>
            LINKS
            </Text>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Courses</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Contact us</ListItem>
            </List>
          </Box>

          {/*Specilization Box  */}
          <Box display={["row","row","row","row"]} >
            <Text fontWeight={"bold"} py={"10px"}>
              SPECIALIZATIONS
            </Text>
            <List>
              <ListItem>Web 3.0 & Metaverse</ListItem>
              <ListItem>Artificial Intelligence & Deep Learning</ListItem>
              <ListItem>Cloud-Native Computing</ListItem>
              <ListItem>Ambient Computing & IoT </ListItem>
              <ListItem>Genomics & Bioinformatics </ListItem>
            </List>
          </Box>
          {/* Contact Box */}
          <Box >
            <Text fontWeight={"bold"} py={"10px"} display={["row","row","row","row"]} >
              CONTACT
            </Text>
            <List>
              <ListItem>
                <EmailIcon/> Phase V, DHA, Karachi.</ListItem>
              <ListItem>
              <LinkIcon/> www.panacloud.ai</ListItem>
              <ListItem>
                <PhoneIcon /> +92 308 2220 203
              </ListItem>
            </List>
          </Box>
        </Flex>
        {/*End of code  */}
      </ChakraProvider>
    </>
  );
}
