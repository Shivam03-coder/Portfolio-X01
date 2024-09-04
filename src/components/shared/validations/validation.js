import * as Yup from "yup";

export const contactUsFormSchema = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    contactNumber: Yup.string()
      .matches(/^[0-9]+$/, "Must be a number")
      .required("Required"),
    message: Yup.string()
      .min(10, "Must be 10 characters or more")
      .required("Required"),
  });