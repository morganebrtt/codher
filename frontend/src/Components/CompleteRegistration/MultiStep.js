import React, { useState } from "react";
import { Formik, Form } from "formik";
import FormFirstStep from "./forms/FormFirstStep";
import FormSecondStep from "./forms/FormSecondStep";
import FormThirdStep from "./forms/FormThirdStep";
import FormFourthStep from "./forms/FormFourthStep";
import StepButton from "./StepButton";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "stretch",
    height: '100vh'
  }
}));

const renderStep = (step, values, errors, touched) => {
  //console.log(values)
  switch (step) {
    case 1:
      return <FormFirstStep errors={errors} touched={touched} />;
    case 2:
      return <FormSecondStep errors={errors} touched={touched} />;
    case 3:
      return <FormThirdStep errors={errors} touched={touched} />;
    case 4:
      return <FormFourthStep errors={errors} touched={touched} />;
    default:
      return <div>merci</div>;
  }
};

const MultiStep = () => {
  const [step, setStep] = useState(1);
  const classes = useStyles();
  const formData = {
    firstName: "",
    profilePic: "",
    city: "",
    bio: "",
    experience: "",
    skills: "",
    canHelp: "",
    needHelp: "",
    interests: ""
  };
  const handleSubmit = () => setStep(step => step + 1);
  // console.log(step)

  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Requis";
    }

    if (!values.city) {
      errors.city = "Requis";
    }

    return errors;
  };
  return (

      <Formik
        enableReinitialize
        initialValues={{ ...formData }}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({values, errors, touched }) => (
          <Form className={classes.form}>
            {renderStep(step, values, errors, touched)}
            <StepButton step={step} />
          </Form>
        )}
      </Formik>

  );
};

export default MultiStep;