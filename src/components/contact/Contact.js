import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "./style";
import { Form } from "./style";
import { Namefield } from "./style";
import { Name } from "./style";
import { Surname } from "./style";
import { Email } from "./style";
import { Button } from "./style";

function Contact() {
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

        <Email>
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
        </Email>

        <Button>
          <button type="submit">Send</button>
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
