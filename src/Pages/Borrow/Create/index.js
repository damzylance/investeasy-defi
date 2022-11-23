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
const reducer = (state, action) => {
  if (action.type === "CHANGE") {
    const data = action.payload;
    console.log(state);
    return {
      ...state,
      ...data,
      monthlyRepayment: state.amount / state.term,
    };
  }

  return state;
};
const defaultState = {
  coins: ["BTC", "ETH", "BNB", "MATIC"],
  banks: ["Meta Fi", "Naija Capital", "MATIC Nation"],
  coinUnit: "",
  amount: 0,
  terms: [
    { value: 1, name: "1 months" },
    { value: 2, name: "2 months" },
    { value: 3, name: "3 months" },
  ],
  term: "1",
  originationFee: 0.005,
  receivable: 0,
};
function Create() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const Change = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: "CHANGE", payload: { [name]: value } });
  };
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
                <Input
                  size={"lg"}
                  value={state.coinUnit}
                  type={"number"}
                  name="coinUnit"
                  onChange={Change}
                />
              </Box>
              <Box>
                <FormLabel>Amount($)</FormLabel>
                <Input
                  size={"lg"}
                  type={"number"}
                  name="amount"
                  value={state.amount}
                  onChange={Change}
                />
              </Box>
            </Flex>
            <Box>
              <FormLabel>Term</FormLabel>
              <Select
                size={"lg"}
                value={state.term}
                name="term"
                placeholder="Select Term"
                onChange={Change}
              >
                {state.terms.map((term) => {
                  return <option value={term.value}>{term.name}</option>;
                })}
              </Select>
            </Box>
            <Stack>
              <BorrowCard
                title="Monthly Repayment"
                value={`$${state.amount / state.term}`}
              />
              <BorrowCard
                title="Total Loan Amount "
                value={`$${state.amount}`}
              />
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
