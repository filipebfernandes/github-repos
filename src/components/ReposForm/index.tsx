import React, { useState, useEffect } from "react";
import useReposQuery from "root/api/useReposQuery";
import useForm from "../../hooks/useForm";

import Button from "../Button";
import InputText from "../InputText";
import ReposTable from "../ReposTable";

import styles from "./index.module.css";

function ReposForm() {
  const { formValues, handleChange } = useForm({ name: "" });
  const [repos, setRepos] = useState(null);
  const [searchName, setSearchName] = useState("");

  const { data } = useReposQuery(searchName);

  const isSubmitDisabled = () => {
    return !formValues || formValues.name === "";
  };

  const handleSearch = async (event?: React.ChangeEvent<HTMLInputElement>) => {
    if (event) {
      event.preventDefault();
    }

    if (isSubmitDisabled()) {
      return null;
    }

    setSearchName(formValues.name);
  };

  useEffect(() => {
    if (formValues && formValues.name !== "") {
      handleSearch();
    }
  }, []);

  useEffect(() => {
    if (data) {
      setRepos(data);
    }
  }, [data]);

  const renderForm = () => {
    return (
      <form className={styles.root} onSubmit={handleSearch}>
        <InputText
          placeholder="Repo name.."
          value={formValues.name}
          name="name"
          handleInputChange={handleChange}
        />

        <Button
          type="submit"
          handleClick={handleSearch}
          disabled={isSubmitDisabled()}
        >
          Search
        </Button>
      </form>
    );
  };

  return (
    <>
      {renderForm()}
      <ReposTable repos={repos} />
    </>
  );
}

export default ReposForm;
