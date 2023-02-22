"use client";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {

  ChakraProvider,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Box, List, ListItem, HStack, Flex, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Headerbar() {
  return (
    <ChakraProvider>
      <Box
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        p={"15"}
        pb={"2"}
        fontWeight={"bold"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          {/* Left Box */}
          <Box>
            <Image
              src="/images/logo.png"
              alt="logo"
              width={"125"}
              height={"82"}
            />
          </Box>

          {/* middle box */}
          <Box>
            <List>
              <HStack spacing={"20"} display={["none", "none", "flex", "flex"]}>
                {/* { base: "column", md: "row", lg: "row" } */}
                <ListItem>
                  <Link href={"/"}>Home</Link>{" "}
                </ListItem>
                <ListItem>
                  <Link href={"/Courses"}>Course</Link>
                </ListItem>
                <ListItem>
                  <Link href={"/About"}>About</Link>
                </ListItem>
                <ListItem>
                  <Link href={"/Contact"}>Contact</Link>{" "}
                </ListItem>
              </HStack>
            </List>
          </Box>

          {/* Right Box */}
          <Box>
            <Button colorScheme="red" variant="solid">
              Apply Now
            </Button>
          </Box>
          <Menu>
            <MenuButton
              display={["flex", "flex", "none", "none"]}
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <Link href={"/"}>
                <MenuItem icon={<AddIcon />}>Home</MenuItem>
              </Link>

              <Link href={"/Courses"}>
                <MenuItem icon={<ExternalLinkIcon />}>Course</MenuItem>
              </Link>
              <Link href={"/About"}>
                <MenuItem icon={<RepeatIcon />}>About</MenuItem>
              </Link>
              <Link href={"/Contact"}>
                <MenuItem icon={<EditIcon />}>Contact</MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
