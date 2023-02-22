"use client";
import Footer from "@/component/Footer";
import Headerbar from "@/component/Header";
import {
  Box,
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

export default function About() {
  return (
    <ChakraProvider>
      <Headerbar />
      <Box mt={"5%"} px={"15%"}>
        <Heading>Our Mission</Heading>
        <HStack>
          <Text>
            The mission of Panaverse is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things.
          </Text>
          <Box display={["none","none","flex"]}>
          <Image
            src={"/images/panda-removebg-preview.png"}
            alt={"panda photo"}
            width={"900"}
            height={"1"}
          ></Image>
          </Box>
        </HStack>
      </Box>
      <Box mt={"5%"} px={"5%"}>
        <HStack>
        <Box display={["none","none","flex"]}>
          <Image
            src={"/images/panda-removebg-preview.png"}
            alt={"panda photo"}
            width={"900"}
            height={"1"}
          ></Image>
          </Box>
         <Box>
            <Heading>Our Story</Heading>
            <Text>
              The mission of Panaverse is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              augmented reality, and internet of things.
            </Text>
        </Box>
            
            </HStack>
       
      </Box>

      <Footer />
    </ChakraProvider>
  );
}
