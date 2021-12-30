import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../modal/Modal";
import {
  Container,
  Form,
  Namefield,
  Name,
  Surname,
  TextField,
  Button,
} from "./style";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset({ ...data });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", surname: "", email: "", subject: "", message: "" });
      setShowModal((prev) => !prev);
    }
  }, [, isSubmitSuccessful, reset]);

  return (
    <Container>
      <ul>
        <li>Let&#39;s talk</li>
      </ul>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Namefield>
          <Name>
            <label htmlFor="name">Name*</label>
            <input
              id="name"
              name="name"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && <p>This field is required</p>}
          </Name>

          <Surname>
            <label htmlFor="surname">Surname*</label>
            <input
              id="surname"
              name="surname"
              type="text"
              {...register("surname", { required: true })}
            />
            {errors.surname && <p>This field is required</p>}
          </Surname>
        </Namefield>

        <TextField>
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            name="email"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <p>This field is required</p>}

          <label htmlFor="subject">Subject*</label>
          <input
            id="subject"
            name="subject"
            type="text"
            {...register("subject", { required: true })}
          />
          {errors.subject && <p>This field is required</p>}

          <label htmlFor="message">Message*</label>
          <textarea
            rows="6"
            id="message"
            name="message"
            {...register("message", { required: true })}
          />
          {errors.email && <p>This field is required</p>}
        </TextField>

        <Button>
          <button type="submit">Send</button>
        </Button>
      </Form>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
}

export default Contact;
