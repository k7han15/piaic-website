"use client"
import { Box, Image, Badge, Heading, Text } from "@chakra-ui/react";

export default function Card() {
  return (
    
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src="https://bit.ly/2Z4KKcF" alt="Card image" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            ml="2"
          >
            POSTED ON MAY 22, 2022
          </Box>
        </Box>

        <Heading size="md" my="2">
          Chakra UI Card
        </Heading>

        <Text color="gray.700" fontSize="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Text>
      </Box>
    </Box>
  );
}
