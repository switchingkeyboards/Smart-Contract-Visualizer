import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Text, VStack, Grid, Heading, Code } from "@chakra-ui/react";
import { setTotalSupply, setMetadata } from "./features/contract/contractSlice";
import fetchContract from "./features/contract/fetchContract";
// import sendMetadata from "./features/contract/sendMetadata";

function App() {
  const dispatch = useDispatch();
  const totalSupply = useSelector((state) => state.contract.totalSupply);
  const metadata = useSelector((state) => state.contract.metadata);

  useEffect(() => {
    (async function () {
      const contract = await fetchContract();
      const supply = await contract.methods.totalSupply().call();
      // await sendMetadata(contract);
      const data = await contract.methods.metadata().call();
      dispatch(setTotalSupply(supply));
      dispatch(setMetadata(data));
    })();
  }, [dispatch]);

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Heading>Token Visualizer</Heading>
          <Text>Total Supply: {totalSupply}</Text>
          <Text>Metadata:</Text>
          <Code>{metadata}</Code>
        </VStack>
      </Grid>
    </Box>
  );
}

export default App;
