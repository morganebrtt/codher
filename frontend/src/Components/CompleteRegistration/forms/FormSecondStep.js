import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

const FormSecondStep = () => {
  return (
    <>
      <Field
        name="experience"
        label="Ton expérience"
        as={TextField}
      />

      <Field
        name="skills"
        label="Tes compétences"
        as={TextField}
      />
    </>
  );
};

export default FormSecondStep;