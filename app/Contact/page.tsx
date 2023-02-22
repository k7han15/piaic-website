"use client";
import Footer from "@/component/Footer";
import Headerbar from "@/component/Header";
import {
  Center,
  ChakraProvider,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <ChakraProvider>
        <Headerbar/>
      <Center my={"6.5%"} px={"3%"}>
        <VStack>
          <Heading>Contact Us</Heading>
          <Text>
            Got any issue? Want to send feedback about any course? Need more
            details about any specialization? Let us know.
          </Text>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
            <FormLabel>Country</FormLabel>
            <Select placeholder="Select country">
              <option>United Arab Emirates</option>
              <option>Nigeria</option>
              <option>Pakistan</option>
            </Select>
            <FormLabel>Your Message</FormLabel>
            <Textarea></Textarea>
          </FormControl>
        </VStack>
      </Center>
      <Footer/>
    </ChakraProvider>
  );
}
