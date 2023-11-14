import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  age: yup
    .number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required("Age is required")
    .min(18, "Minimum age limit is 18")
    .max(151, "Maximum age limit is 151"),
  email: yup
    .string()
    .required("Emails are required")
    .transform((originalValue) => originalValue.replace(/\s/g, ""))
    .test({
      name: "isValidEmails",
      exclusive: true,
      message: "Invalid email",
      test: (value) => {
        const emails = value.split(",");
        return emails.every(
          (email) => email === "" || yup.string().email().isValidSync(email)
        );
      },
    }),
  contact: yup
    .string()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .matches(/^[0-9]+$/, "Invalid contact")
    .length(11, "Contact should have exactly 11 digits"),
  password: yup
    .string()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
      "Password should contain atleast one uppercase & lowercase letter, and one digit"
    )
    .length(8, "Password should be 8 characters long"),
  confirmPassword: yup
    .string()
    .nullable()
    .transform((curr, orig) => (orig === "" ? null : curr))
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid, isDirty },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    console.log("Form submitted with data: ", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-items">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            placeholder="Enter your first name"
          />
          <span className="error-message">{errors.firstName?.message}</span>
        </div>

        <div className="form-items">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            placeholder="Enter your last name"
          />
          <span className="error-message">{errors.lastName?.message}</span>
        </div>

        <div className="form-items">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age")}
            placeholder="Enter your age"
          />
          <span className="error-message">{errors.age?.message}</span>
        </div>

        <div className="form-items">
          <label htmlFor="email">Notification Emails</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Enter your emails"
          />
          <span className="error-message">{errors.email?.message}</span>
        </div>

        <div className="form-items">
          <label htmlFor="contact">Contact Number</label>
          <input
            type="tel"
            id="contact"
            {...register("contact")}
            placeholder="Enter your contact number"
          />
          <span className="error-message">{errors.contact?.message}</span>
        </div>

        <div className="form-items">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Enter your password"
          />
          <span className="error-message">{errors.password?.message}</span>
        </div>

        <div className="form-items">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            placeholder="Confirm your password"
          />
          <span className="error-message">
            {errors.confirmPassword?.message}
          </span>
        </div>

        <input type="submit" disabled={!isValid && isDirty} value={"Submit"} />
      </form>
      <DevTool control={control} />
    </>
  );
};

export default Form;
