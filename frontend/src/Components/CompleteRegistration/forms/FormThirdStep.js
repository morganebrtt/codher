import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

const FormThirdStep = () => {
  return (
    <>
      <Field
        name="canHelp"
        label="Tu peux aider en..."
        as={TextField}
      />

      <Field
        name="needHelp"
        label="Tu voudrais de l'aide en..."
        as={TextField}
      />
    </>
  );
};

export default FormThirdStep;