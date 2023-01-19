"use client";

export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
  return null;
};
