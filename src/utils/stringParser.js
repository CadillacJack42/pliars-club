export const stringParser = (string) => {
  // BREAKDOWN OF STEPS UNDER FUNCTION
  const newString = string.split(";").map((str) => str.split("="));
  const parsedString = {
    [newString[0][0].trim()]: newString[0][1],
    [newString[1][0].trim()]: newString[1][1],
  };
  return parsedString;
};
