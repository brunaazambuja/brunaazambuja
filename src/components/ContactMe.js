import React, { useCallback, useRef, useState } from "react";
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiUser, FiMail, FiPhone, FiBook } from "react-icons/fi";
import { Button } from "@mui/material";
import { Spinner } from 'react-bootstrap';

import api from '../utils/api';
import { useToast } from '../hooks/toast';
import { ContactMeContainer } from './styles/Dashboard';
import Input from './Input';
import getValidationError from "../utils/getValidationError";


const ContactMe = () => {
  const formRef = useRef(null);
  const { addToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (data, { reset }) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});

        const yupSchemaSignIn = Yup.object().shape({
          email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
          name: Yup.string().required('Nome obrigatório'),
          message: Yup.string().required('Mensagem obrigatória'),
        });
        await yupSchemaSignIn.validate(data, { abortEarly: false });
        await api.post('/send-email', { 
          from: 'arthur.vianna.developer@gmail.com',
          to: 'brunazambuja@outlook.com',
          ...data,
          message: `${data.message}<br/><br/>Telefone para contato: ${data.phone}`,
         });


        reset();
        addToast({
          type: 'success',
          title: 'Mensagem enviada!',
          description: 'Entrarei em contato o mais rápido possível.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) formRef.current?.setErrors(getValidationError(err));

        console.log(err);
        addToast({
          type: 'error',
          title: 'Erro no envio.',
          description: 'Ocorreu um erro ao enviar mensagem.',
        });
      }
      setLoading(false);
    },
    [addToast],
  );
  return (
    <ContactMeContainer>
      <h1>Entre em Contato!</h1>
      <Form ref={formRef} className="form" onSubmit={handleSubmit}>
        <Input name="name" icon={FiUser} placeholder="Nome" />
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input name="phone" mask="(99) 99999-9999" icon={FiPhone} placeholder="Telefone para Contato" />
        <Input name="message" big icon={FiBook} placeholder="Mensagem" />
        <Button type="submit">{loading ? <Spinner animation="grow" /> : "Enviar"}</Button>
      </Form>
      

    </ContactMeContainer>
  );
};

export default ContactMe;
