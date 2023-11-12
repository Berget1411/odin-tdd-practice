const capitalize = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (isUpperCase(str[i])) return str;
    else if (isLowerCase(str[i])) {
      return (
        str.slice(0, i) +
        str[i].toUpperCase() +
        str.slice(i + 1, str.length + 1)
      );
    }
  }
  return 'no valid characters';
};

const isLowerCase = (char) =>
  char == char.toLowerCase() && char != char.toUpperCase();

const isUpperCase = (char) =>
  char == char.toUpperCase() && char != char.toLowerCase();

export default capitalize;
