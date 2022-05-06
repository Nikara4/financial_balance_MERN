import { useState } from "react";

export const useValue = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  console.log(value);

  return [value, handleChange];
};
