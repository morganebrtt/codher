import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

// const FormFirstStep = formikProps => {
//   const { errors, touched } = formikProps;
//   return (
//     <>
//       <Field
//         name="firstName"
//         label="First Name *"
//         as={TextField}
//         error={touched.firstName && errors.firstName}
//         helperText={touched.firstName && errors.firstName}
//       />

//       <Field name="middleName" label="Middle Name" as={TextField} />

//       <Field
//         name="lastName"
//         label="Last Name *"
//         as={TextField}
//         error={touched.lastName && errors.lastName}
//         helperText={touched.lastName && errors.lastName}
//       />
//     </>
//   );
// };

const FormFirstStep = formikProps => {
    const { errors, touched } = formikProps;
    return (
      <>
        <h3>Qui es-tu?</h3>
        <Field
          name="firstName"
          label="Prénom"
          as={TextField}
          error={touched.firstName && errors.firstName}
          helperText={touched.firstName && errors.firstName}
        />
  
        <Field name="profilePic" label="Ta photo de profil" as={TextField} />
  
        <Field
          name="city"
          label="Ta ville"
          as={TextField}
          error={touched.city && errors.city}
          helperText={touched.city && errors.city}
        />

        <Field
          name="bio"
          label="Ici tu peux écrire ce que tu veux sur toi :)"
          as={TextField}
          error={touched.bio && errors.bio}
          helperText={touched.bio && errors.bio}
        />
      </>
    );
  };

export default FormFirstStep;