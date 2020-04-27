import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

const FormThirdStep = () => {
  return (
    <>
      <Field
        name="interests"
        label="Tes centres d'intérêts"
        as={TextField}
      />
    </>
  );
};

export default FormThirdStep;