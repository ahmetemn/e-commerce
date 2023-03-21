import React from 'react'
import { useFormik } from 'formik';
import "./Login.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import validations from "./Validation.js";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordAgain: '',
    },
    onSubmit:async (values) => {
 
      try {
        const res = await fetch("http://localhost:2800/api/auth/register",
         {
           method: "POST",
           body: JSON.stringify(values),
           headers: { "Content-type": "application/json; charset=UTF-8" },
         })
          if(res.status===201)
          {
           alert("Kayıt işlemi başarılı.");
           navigate("/auth/login");
          }

     } catch (error) { 
      alert("Daha önce alınmış kullanıcı adı veya email")
     }
    },

    validationSchema: validations
  });
  return (
    <Container style={{ display: "flex", minHeight: "100vh", justifyContent: "center", alignItems: "center" }} >
    <Card  style={{width:"25rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} >   
    <Form  className='p-3' onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name="username" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text"  />
        {formik.errors.username && formik.touched.username && (<div className='mt-1 text-danger'>{formik.errors.username}</div>)}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" />

        {formik.errors.email && formik.touched.email && (<div className='mt-1 text-danger'>{formik.errors.email}</div>)}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Şifre</Form.Label>
        <Form.Control name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} type="password"  />
        {formik.errors.password && formik.touched.password && (<div className='mt-1 text-danger'>{formik.errors.password}</div>)}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Şifre Tekrar</Form.Label>
        <Form.Control name="passwordAgain" onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" />
        {formik.errors.passwordAgain && formik.touched.passwordAgain && (<div className='mt-1 text-danger'>{formik.errors.passwordAgain}</div>)}
      </Form.Group>
      
      <div className="d-grid gap-2">
      <Button variant="primary"  type="submit">
       Kayıt Ol
      </Button>
      
    </div>
      
    </Form>
    
    </Card>
    </Container>
  )

}

export default Register;



