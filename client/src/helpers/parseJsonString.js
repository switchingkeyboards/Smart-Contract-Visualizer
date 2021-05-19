const parseJsonString = (str) => {
  const unescapedStr = str
    .replaceAll(/\\n/g, "")
    .replaceAll("\\", "")
    .replaceAll(/\s/g, "")
    .replaceAll(/\"{/g, "{")
    .replaceAll(/\,}"/g, "}");
  return JSON.parse(unescapedStr);
};

export default parseJsonString;
