"use client";
import Footer from "@/component/Footer";
import Headerbar from "@/component/Header";
import {
  Accordion,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  Box,
  Center,
  ChakraProvider,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function Courses() {
  return (
    <ChakraProvider>
      <Headerbar />
      <VStack mt={"2%"}>
        <Heading>Each Course is divided into Five Quarters</Heading>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" color={"red"} fontWeight={"bold"} fontSize={"20"}>
                  Quarter 1
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <List>
                <ListItem>CS-101: Object-Oriented Programming using TypeScript</ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" color={"red"} fontWeight={"bold"} fontSize={"20"}>
                  Quarter 2
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <List>
                <ListItem>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" color={"red"} fontWeight={"bold"} fontSize={"20"}>
                  Quarter 3
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            <List>
                <ListItem>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Text px={"15%"} fontSize={"20"} textAlign={"center"}>
          First three quarters are same in each specialization. After completing
          the first three quarters the participants will select one or more
          specialization consisting of two courses each:
        </Text>

        <Box mt={"6%"} textAlign={"center"} >
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          px={"3%"}
          mt={"2%"}
        >
          <Card>
            <CardHeader>
              <Heading size="md" borderBlock={"2px"}>
                {" "}
                Web 3.0 (Blockchain) and Metaverse
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                This Web 3.0 and Metaverse specialization focuses on developing
                full-stack Web 3.0 and Metaverse experiences....
              </Text>
            </CardBody>
            <CardFooter>
              <Button background={"red.600"}>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" borderBlock={"2px"}>
                {" "}
                Artificial Intelligence (AI) and Deep Learning
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                The AI and Deep Learning specialization focuses on building and
                deploying intelligent APIs using OpenAI models....
              </Text>
            </CardBody>
            <CardFooter>
              <Button background={"red.600"}>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" borderBlock={"2px"}>
                {" "}
                Cloud-Native Computing
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                The Cloud-Native Computing Specialization focuses on Containers,
                Kubernetes, and CDK for Kubernetes....
              </Text>
            </CardBody>
            <CardFooter>
              <Button background={"red.600"}>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" borderBlock={"2px"}>
                {" "}
                Ambient Computing and IoT
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                The Ambient Computing and IoT Specialization focuses on building
                Smart Homes, Offices, Factories, and Cities using Voice
                computing, Matter Protocol, and Embedded Devices.
              </Text>
            </CardBody>
            <CardFooter>
              <Button background={"red.600"}>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" borderBlock={"2px"}>
                {" "}
                Genomics and Bioinformatics
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                Genomics is the study of the total genetic makeup of individual
                organisms, and how this genetic information is structured,
                functions, and has evolved; bioinformatics.
              </Text>
            </CardBody>
            <CardFooter>
              <Button background={"red.600"}>View here</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md" borderBlock={"2px"}>
                {" "}
                Network Programmability and Automation
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>
                This course teaches network engineers how to automate systems
                with code using a variety of technologies and tools, including
                Linux, Python, APIs, and Git...
              </Text>
            </CardBody>
            <CardFooter>
              <Button background={"red.600"}>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
        </Box>
      </VStack>
      <Footer />
    </ChakraProvider>
  );
}
