"use client";

import {
  Avatar,
  AvatarGroup,
  border,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  ChakraBaseProvider,
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Mainbox() {
  return (
    <ChakraProvider>
      <Box mt={"5%"} py={"8px"}>
        <HStack>
          {/* Left box */}
          <Box w={{base:"100%",md:"50%",xl:"50%"}} pl={"5%"} color={"black"} >
            <Heading fontSize={"50"} fontWeight={"bold"}>
              Get Ready
              <br />
              For the <span style={{ color: "red" }}>Next Generation</span>
              <br />
              Future of the Internet
            </Heading>
            <Text fontSize={"35"} mt={"15px"}>
              Join a 13 Trillion Dollar Industry with 5 Billion Users
            </Text>
            <Button colorScheme={"red"}>Join Now</Button>
            <AvatarGroup size={"md"} max={2} mt={"10px"}>
              <Avatar name="Zia Khan" src="/images/sir-zia.webp" />
              <Avatar name="Kent Dodds" src="/images/sir-daniyal.webp" />
              <Avatar name="Kent Dodds" src="/images/sir-zia.webp" />
            </AvatarGroup>
            <Text>Created by: Muhammad Faizan</Text>
          </Box>
          {/* RightBox */}

          <Box w={"50%"} display={["none", "none", "flex", "flex"]}>
            <Image
              src={"/images/panda-removebg-preview.png"}
              alt={"panda photo"}
              width={"900"}
              height={"1"}
            ></Image>
          </Box>
        </HStack>

        <Box
          backgroundImage={"/images/ai1.jpg"}
          backgroundSize={"contain"}
          color={"white"}
          py={"5%"}
          mt={"15%"}
        >
          <Center flexDirection={"column"} mt={"5%"}>
            <Heading>
              <span style={{ color: "red" }}>Earn</span> While{" "}
              <span style={{ color: "red" }}>You</span> Learn
            </Heading>

            <Text textAlign={"center"} px={"5%"} fontSize={"20px"}>
              In this brand-new type of curriculum, students will learn how to
              make money and boost exports in the classroom and will begin doing
              so within{" "}
              <span
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontStyle: "italic",
                }}
              >
                SIX Months
              </span>{" "}
              of the program's beginning. It resembles a cross between a
              corporate venture and an educational project.
            </Text>
          </Center>
          <Box mt={"6%"} textAlign={"center"}>
            <Heading>
              Course <span style={{ color: "red" }}>We</span> Offer
            </Heading>

            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              px={"15%"}
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
                    This Web 3.0 and Metaverse specialization focuses on
                    developing full-stack Web 3.0 and Metaverse experiences....
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
                    The AI and Deep Learning specialization focuses on building
                    and deploying intelligent APIs using OpenAI models....
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
                    The Cloud-Native Computing Specialization focuses on
                    Containers, Kubernetes, and CDK for Kubernetes....
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
                    The Ambient Computing and IoT Specialization focuses on
                    building Smart Homes, Offices, Factories, and Cities using
                    Voice computing, Matter Protocol, and Embedded Devices.
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
                    Genomics is the study of the total genetic makeup of
                    individual organisms, and how this genetic information is
                    structured, functions, and has evolved; bioinformatics.
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
                    This course teaches network engineers how to automate
                    systems with code using a variety of technologies and tools,
                    including Linux, Python, APIs, and Git...
                  </Text>
                </CardBody>
                <CardFooter>
                  <Button background={"red.600"}>View here</Button>
                </CardFooter>
              </Card>
            </SimpleGrid>
          </Box>
        </Box>

        {/* Scheme of Study */}
        <Box mt={"3%"}>
          <VStack>
            <Heading pb={"1%"}>
              <span style={{ color: "red" }}>Scheme</span> of Study
            </Heading>
            <Text textAlign={"center"} px={"8%"} fontSize={"25px"}>
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first three quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development.
              <br /> <br />
              It is going to be a fifteen-month-long hybrid program that
              includes both onsite and online classes and is divided into five
              quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
              format, with core onsite classes complemented by online Zoom
              laboratories and recorded videos.
            </Text>
          </VStack>
        </Box>

        {/* Instrutor Tab */}
        <Box textAlign={"center"} mt={"3%"}>
          <Heading>
            Our <span style={{ color: "red" }}>Top</span> Instructors
          </Heading>

          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            px={"15%"}
          >
            <Card>
              <CardHeader>
                <Avatar size="lg" src="/images/sir-zia.webp" />
                <Heading size="md"> Zia Khan</Heading>
              </CardHeader>
              <CardFooter>
                <Text>COO PIAIC, CEO Panacloud</Text>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Avatar size="lg" src="/images/sir-daniyal.webp" />
                <Heading size="md"> Daniyal Nagori</Heading>
              </CardHeader>
              <CardFooter>
                <Text>CEO PIAIC, Full Stack Developer.</Text>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Avatar size="lg" src="/images/sir-zia.webp" />
                <Heading size="md"> Zia Khan</Heading>
              </CardHeader>
              <CardFooter>
                <Text>COO PIAIC, CEO Panacloud</Text>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Avatar size="lg" src="/images/sir-daniyal.webp" />
                <Heading size="md">Daniyal Nagori</Heading>
              </CardHeader>
              <CardFooter>
                <Text>CEO PIAIC, Full Stack Developer.</Text>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Avatar size="lg" src="/images/sir-zia.webp" />
                <Heading size="md"> Zia Khan</Heading>
              </CardHeader>
              <CardFooter>
                <Text>COO PIAIC, CEO Panacloud</Text>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Avatar size="lg" src="/images/sir-daniyal.webp" />
                <Heading size="md">Daniyal Nagori</Heading>
              </CardHeader>
              <CardFooter>
                <Text>CEO PIAIC, Full Stack Developer.</Text>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
