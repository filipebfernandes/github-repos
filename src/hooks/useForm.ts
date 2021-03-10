import { useState } from "react";

export default function useForm(initialState: any) {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return {
    handleChange,
    formValues,
  };
}
