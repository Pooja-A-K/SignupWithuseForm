import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from './Signup.module.css';

const schema = yup.object().shape({
  username: yup.string().required('Enter Username'),
  email: yup.string().email('Invalid Email').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmpassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, 
    } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    },
    resolver: yupResolver(schema),
  });
 const onSubmit = data => alert('Form was submitted: ' + JSON.stringify(data));
  

  return (
   
    <div className={styles.container}>
       <h1 className={styles.title}>Signup</h1>
      <Form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" id="username" name="username" {...register('username')} />
          {errors.username && <span className={styles.error}>{errors.username.message}</span>}
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" id="email" name="email" {...register('email')} />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" id="password" name="password" {...register('password')} />
          {errors.password && <span className={styles.error}>{errors.password.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control type="password" id="confirmpassword" name="confirmpassword" {...register('confirmpassword')} />
          {errors.confirmpassword && <span className={styles.error}>{errors.confirmpassword.message}</span>}
        </Form.Group>

        <Button variant="primary" type="submit" className={styles.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
