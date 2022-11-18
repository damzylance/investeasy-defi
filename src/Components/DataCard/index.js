import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

function DataCard(props) {
  return (
    <Box
      width={"100%"}
      p={"2rem"}
      border={"0.2px solid #2c373e"}
      borderRadius={"2xl"}
    >
      <Text>{props.title} Total Outstanding Loans</Text>
      <Heading>{props.value} $0</Heading>
    </Box>
  );
}

export default DataCard;
