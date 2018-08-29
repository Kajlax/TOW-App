export const getStorageValue = (key) => {
  const value = localStorage.getItem(key);
  if (value) {
    return value;
  }
  return "0";
}

export const createArray = (string) => {
  const array = string.split(",");
  array.forEach((element, index) => {
    array[index] = parseInt(array[index], 10);
  });

  return array;
}

export const setStorageValue = (key, value) => {
  localStorage.setItem(key, value);
}