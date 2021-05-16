# SwitchingKeyboardsToken Visualizer

Hello Dear Programmer,

We have deployed a contract with address:

`0x4F6adBC7F644647ed3425513A4EA0Fb22933eF37`

to the Testnet Ropsten Contract Address:

`0x3c460210d54f43b195d6c6ccec39d49b8f577785`
(Link)[https://ropsten.etherscan.io/address/0x3c460210d54f43b195d6c6ccec39d49b8f577785#code]

This is the official token for the great cypher-punk extrodinaire SwitchingKeyboards.
The code has been published and confirmed and can be accessed from the link above.

We need a _one-page visualization_ of this Token that demonstrates its totalSupply and allows for a generic balanceOf call. We have provided the address above and in this repo, we have also included a contract ABI for web3.js access.

For this task, we require the spinning up of a _React_ web frontend and our lead frontend developer has requested that all data state is handled with _React-Redux_ for our future extensions.

We also highly recommend using the web3.js library (Link: https://web3js.readthedocs.io/en/v1.3.4/) for access.

# The tasking for this visualization are as follows:

1. Create a new branch off of `main` called `implementation/SKB`
2. Spin up React Application with Redux state management.
3. Add Metadata (Appendix'd below) to contract with contract write script.
4. Finish Contract with call to `finish()` on contract address above.
5. Link frontend to contract and create a data visualization for the following:
   - totalSupply
   - metadata

# Adding Token Metadata Directions

Token metadata should be placed in a json file on a gist (use the raw reference)
with the filename `tokenMetaSKB.sol` with the following json structure:

```
{
  "name" : "Switching Keyboards Token",
  "description" : "Badass token for SKB",
}
```

The URI for this structure should then be added to the contract with the call:

`set_metadata(<Your_Metadata_URI>)`

# Design Note

Feel free to be a "great artist" about your design. ;)
