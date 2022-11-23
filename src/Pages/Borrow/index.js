import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Button,
} from "@chakra-ui/react";
import AppLayout from "../../Components/AppLayout";
import DataCard from "../../Components/DataCard";
import { useNavigate } from "react-router-dom";
function Borrow() {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <Box width={"100%"}>
        <Container
          maxWidth={["100%", "100%", "100%"]}
          display="flex"
          padding={0}
          flexDir={"column"}
          gap={"80px"}
        >
          <Box display={"flex"} flexDirection="column" gap={"30px"}>
            <Heading as={"h1"}>Total Value Locked</Heading>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={6}
            >
              <GridItem>
                <DataCard />
              </GridItem>
              <GridItem>
                <DataCard />
              </GridItem>
              <GridItem>
                <DataCard />
              </GridItem>
              <GridItem>
                <DataCard />
              </GridItem>
              <GridItem>
                <DataCard />
              </GridItem>
              <GridItem>
                <DataCard />
              </GridItem>
            </Grid>
          </Box>
          <Box display={"flex"} flexDirection="column" gap={"30px"}>
            <Flex
              p={"3rem"}
              justifyContent={"space-between"}
              alignContent={"center"}
              border={"0.2px solid #2c373e"}
              borderRadius={"2xl"}
            >
              <Heading as={"h1"}>Loans</Heading>
              <Button
                _hover={{
                  background: "white",
                  color: "purple.600",
                }}
                background={"purple.600"}
                size={"lg"}
                onClick={() => navigate("create")}
              >
                Apply for Loan
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>
    </AppLayout>
  );
}

export default Borrow;
