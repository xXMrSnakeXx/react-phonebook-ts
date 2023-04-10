import { FC } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { IContactForm, IForm, IReset } from "../../types";
import {
  Button,
  Wrapper,
  Input,
  Label,
  ErrorText,
  Box,
} from "./ContactForm.styled";
import { FaUserTie } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required("Required"),
  number: yup
    .string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Must be XXX-XX-XX")
    .required("Required"),
});
const initialValues = {
  name: "",
  number: "",
};
const ContactForm: FC<IForm> = ({ onSubmitData }) => {
  const addContact = (values: IContactForm, { resetForm }: IReset) => {
    onSubmitData(values);
    resetForm();
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={addContact}
      >
        <Form>
          <Label>
            Name
            <Box>
              <FaUserTie />
              <Input type="text" name="name" />
            </Box>
            <ErrorText name="name" component="p" />
          </Label>
          <Label>
            Number
            <Box>
              <BsFillTelephoneFill />
              <Input type="tel" name="number" />
            </Box>
            <ErrorText name="number" component="p" />
          </Label>
          <Button type="submit">
            <IoMdAddCircleOutline /> Add contact
          </Button>
        </Form>
      </Formik>
    </Wrapper>
  );
};

export default ContactForm;
