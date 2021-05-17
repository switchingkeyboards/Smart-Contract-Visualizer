import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  useBreakpointValue,
  Spinner,
  VStack,
  Button,
  Code,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMetadata, setTotalSupply } from "./features/contract/contractSlice";
import fetchContract from "./features/contract/fetchContract";
// import sendMetadata from "./features/contract/sendMetadata";
import parseJsonString from "./helpers/parseJsonString";

function App() {
  const dispatch = useDispatch();
  const totalSupply = useSelector((state) => state.contract.totalSupply);
  const metadata = useSelector((state) => state.contract.metadata);
  const variant = useBreakpointValue({ base: "md", md: "2xl" });

  const updateContractState = async () => {
    const contract = await fetchContract();
    const supply = await contract.methods.totalSupply().call();
    dispatch(setTotalSupply(supply));

    // await sendMetadata(contract);
    let data = await contract.methods.metadata().call();
    data = parseJsonString(JSON.stringify(data));
    dispatch(setMetadata(data));

    // await contract.methods.finish().send({ from: process.env.REACT_APP_OWNER_ADDRESS, gas: 1000000 });
  };

  useEffect(() => {
    updateContractState();
  }, [dispatch]);

  const TokenStat = ({ label, number }) => (
    <Stat>
      <StatLabel color="gray.500" fontSize="md">
        {label}
      </StatLabel>
      {number ? (
        <StatNumber fontSize={variant}>{number}</StatNumber>
      ) : (
        <Spinner />
      )}
    </Stat>
  );

  return (
    <Box textAlign="center">
      <VStack h="100vh">
        <Heading mt={16}>Token Visualizer</Heading>
        <Box w="full" h="full">
          <Link
            href={`https://ropsten.etherscan.io/address/${process.env.REACT_APP_CONTRACT_ADDRESS}`}
            isExternal
          >
            <Text as="samp">{process.env.REACT_APP_CONTRACT_ADDRESS}</Text>
          </Link>
          <Grid p={3} h="full">
            <GridItem display="flex" alignItems="flex-end">
              <TokenStat label="Total Supply" number={totalSupply} />
            </GridItem>
            <GridItem display="flex" justifyContent="center">
              <Image src="eth.svg" alt="eth" />
            </GridItem>
            <GridItem>
              <StatGroup>
                <TokenStat label="Name" number={metadata?.name} />
                <TokenStat label="Description" number={metadata?.description} />
              </StatGroup>
            </GridItem>
            <GridItem>
              <Button onClick={updateContractState} size="lg">
                Refresh
              </Button>
            </GridItem>
          </Grid>
        </Box>
      </VStack>
    </Box>
  );
}

export default App;
