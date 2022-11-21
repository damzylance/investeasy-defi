import React from "react";
import { Box, Flex, Heading, Container, Link, Button } from "@chakra-ui/react";

function AppLayout(props) {
  return (
    <Box background={"#141a1e"}>
      <Box minH={"100vh"} color={"#fff"} paddingBottom="20px">
        <Box
          alignItems={"center"}
          paddingY="20px"
          borderBottom={"0.2px solid gray"}
          position={"sticky"}
          top={"0px"}
          background={"#141a1e"}
          zIndex={"999"}
        >
          <Container
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            maxW={["100%", "100%", "90%"]}
          >
            <Box>
              <Heading>InvestEasy</Heading>
            </Box>
            <Flex justifyContent={"space-between"} gap={"30px"}>
              <Link target={""}>Home</Link>
              <Link target={""}>Lend</Link>
              <Link target={""}>Borrow</Link>
            </Flex>
            <Flex>
              <Button background={"orange.600"}>Connect Wallet</Button>
            </Flex>
          </Container>
        </Box>
        <Box>
          <Container
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            maxW={["100%", "100%", "90%"]}
            my="40px"
          >
            {props.children}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default AppLayout;
