const caesarCipher = (str) => {
  const alfa = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const encrypt = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  let newStr = "";

  for (const char of str) {
    if (alfa.includes(char)) {
      const index = alfa.indexOf(char);
      newStr += encrypt[index];
    } else {
      newStr += char;
    }
  }

  return newStr;
};

export default caesarCipher;
