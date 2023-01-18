export const getLocalStorage = (key: string) => {
  const value =
    typeof window !== "undefined" ? localStorage.getItem(key) : null;
  if (value) {
    return JSON.parse(value);
  }
  return null;
};
