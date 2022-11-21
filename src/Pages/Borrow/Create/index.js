import {
  Box,
  Container,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Input,
  Flex,
  Stack,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import AppLayout from "../../../Components/AppLayout";
import BorrowCard from "./BorrowCard";
function Create() {
  const reducer = (state, action) => {};
  const defaultState = {
    coins: ["BTC", "ETH", "BNB", "MATIC"],
    banks: ["Meta Fi", "Naija Capital", "MATIC Nation"],
    coinUnit: 0,
    amount: 0,
    term: ["One Month", "Two Months", "Three Months"],
    monthlyRepayment: 0,
    loanAmount: 0,
    originationFee: this.loanAmount * 0.005,
    receivable: 0,
  };
  const [state, dispatch] = useReducer(reducer, defaultState);
  return (
    <AppLayout>
      <Container maxW={["100%", "100%", "50%"]}>
        <Heading my={"40px"}>Create Loan</Heading>
        <Box>
          <FormControl display={"flex"} flexDir="column" gap={"20px"}>
            <Box>
              <FormLabel>Choose Coin</FormLabel>
              <Select size={"lg"} placeholder="Select Coin">
                {state.coins.map((coin) => {
                  return <option value={coin}>{coin}</option>;
                })}
              </Select>
            </Box>
            <Box>
              <FormLabel>Choose Bank</FormLabel>
              <Select size={"lg"} placeholder="Select Bank">
                {state.banks.map((bank) => {
                  return <option value={bank}>{bank}</option>;
                })}
              </Select>
            </Box>

            <Flex
              flexDir={["column", "column", "row"]}
              gap={"10px"}
              justifyContent={"space-between"}
              wrap={"wrap"}
            >
              <Box>
                <FormLabel>How Many Units</FormLabel>
                <Input size={"lg"} type={"number"} />
              </Box>
              <Box>
                <FormLabel>Amount($)</FormLabel>
                <Input size={"lg"} type={"number"} />
              </Box>
            </Flex>
            <Box>
              <FormLabel>Term</FormLabel>
              <Select size={"lg"} placeholder="Select Term">
                {state.term.map((term) => {
                  return <option value={term}>{term}</option>;
                })}
              </Select>
            </Box>
            <Stack>
              <BorrowCard title="Monthly Repayment" value="$10" />
              <BorrowCard title="Total Loan Amount " value="$1000" />
              <BorrowCard title="Origination Fee (0.5%)" value="$10" />
              <BorrowCard title="Term End Date" value={"12/02/2022"} />
            </Stack>
          </FormControl>
        </Box>
      </Container>
    </AppLayout>
  );
}

export default Create;
