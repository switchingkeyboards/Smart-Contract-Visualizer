const setMetadata = async (contract) => {
  const res = await fetch(
    "https://api.github.com/gists/c5c743c343d355a4ba2d1015942ca350"
  );
  const json = await res.json();
  const metadata = json.files["tokenMetaSKB.sol"].content;

  await contract.methods
    .set_metadata(metadata)
    .send({ from: process.env.REACT_APP_OWNER_ADDRESS, gas: 1000000 });
};

export default setMetadata;
