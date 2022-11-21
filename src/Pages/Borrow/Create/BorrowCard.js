import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function BorrowCard(props) {
  return (
    <Flex
      width={"100%"}
      p={"1.4rem"}
      justifyContent="space-between"
      alignItems={"center"}
      border={"0.2px solid #2c373e"}
      borderRadius={"2xl"}
    >
      <Text fontSize={"lg"} fontWeight={"600"}>
        {props.title}
      </Text>
      <Text color={"green.500"} fontSize={"lg"} fontWeight={"600"}>
        {props.value}
      </Text>
    </Flex>
  );
}

export default BorrowCard;
