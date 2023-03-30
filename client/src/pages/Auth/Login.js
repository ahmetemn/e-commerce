import React from 'react'
import { useFormik } from 'formik';
import "./Login.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import SecondNav from "../../components/SecondNav/SecondNav.js"
import Loginvalidations from './LoginValidations';
import { useDispatch } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from '../../redux/userRedux';
const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {

      email: '',
      password: '',

    },
    onSubmit: async (values) => {
      dispatch(loginStart())
      try {
        const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/auth/login",

          {
            method: "POST",
            body: JSON.stringify(values),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          },values)

        if (res.status === 200) {

          
         
          dispatch(loginSuccess(values))
          alert("Giriş işlemi başarılı.");
          navigate("/");
        }

    
      } catch (error) {
        dispatch(loginFailure())
      }
    },

    validationSchema: Loginvalidations

  });





  return (
    <>


      <SecondNav></SecondNav>
      <Container style={{ display: "flex", minHeight: "100vh", justifyContent: "center", alignItems: "start", marginTop: "1rem" }} >
        <Card style={{ width: "25rem", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} >
          <Form className='p-3' onSubmit={formik.handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>E-posta</Form.Label>
              <Form.Control name="email" onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" />

              {formik.errors.email && formik.touched.email && (<div className='mt-1 text-danger'>{formik.errors.email}</div>)}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Şifre</Form.Label>
              <Form.Control name="password" onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" />
              {formik.errors.password && formik.touched.password && (<div className='mt-1 text-danger'>{formik.errors.password}</div>)}
            </Form.Group>


            <div className="d-grid gap-2">
              <Button  variant="primary" type="submit" style={{ fontWeight: "600" }}>
                Giriş Yap
              </Button>

            </div>

          </Form>

          <Link to="/auth/register"> <span>Hesabın Yokmu Kayıt Ol</span></Link>
        </Card>


      </Container>
    </>
  )

}


export default Login;