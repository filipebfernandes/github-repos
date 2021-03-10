import React, { useState, useEffect } from "react";
import useReposQuery from "root/api/useReposQuery";

import Button from "../Button";
import InputText from "../InputText";
import useForm from "../../hooks/useForm";

import styles from "./index.module.css";

function ReposForm() {
  const windowGlobal = typeof window !== "undefined" && window;
  const unparsedStorageSearch = windowGlobal.localStorage.getItem("repoSearch");
  const storageSearch = JSON.parse(unparsedStorageSearch) || { name: "" };

  const { loading, data } = useReposQuery(storageSearch.name);

  const { formValues, handleChange } = useForm(storageSearch);
  const [repos, setRepos] = useState(null);

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

    windowGlobal.localStorage.setItem("repoSearch", JSON.stringify(formValues));

    setRepos(data);
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

  console.log(repos);

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
      {loading && <h1>Loading...</h1>}
    </>
  );
}

export default ReposForm;
