import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { Register } from "../axios/index"

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    email: "",
    phoneNumber: ""
  });
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <Form onSubmit={(e) => {
            e.preventDefault()

            Register(formData).then((res)=>{
              console.log(res.data);
            }).catch((err) => console.log(err))
  
          }}>
            <FormGroup className='mb-3' controlId='formBasicName'>
              <FormLabel>Tam İsim</FormLabel>
              <FormControl onChange={(e) => { setFormData({ ...formData, fullName: e.target.value }) }} type="name" placeholder="İsminizi giriniz"></FormControl>
            </FormGroup>

            <FormGroup className='mb-3' controlId='formBasicEmail'>
              <FormLabel>E-mail Adresi</FormLabel>
              <FormControl onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} type="email" placeholder="Mail adresinizi giriniz"></FormControl>
            </FormGroup>

            <FormGroup className='mb-3' controlId='formBasicPassword'>
              <FormLabel>Şifre</FormLabel>
              <FormControl onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} type="password" placeholder="Şifrenizi giriniz"></FormControl>
            </FormGroup>

            <FormGroup className='mb-3' controlId='formBasicPasswordAgain'>
              <FormLabel>Şifre(Tekrar)</FormLabel>
              <FormControl type="password" placeholder="Şifrenizi tekrar giriniz"></FormControl>
            </FormGroup>

            <FormGroup className='mb-3' controlId='formBasicPhone'>
              <FormLabel>Telefon</FormLabel>
              <FormControl onChange={(e) => { setFormData({ ...formData, phoneNumber: e.target.value }) }} placeholder="Telefon numaranızı giriniz"></FormControl>
            </FormGroup>

            <FormGroup className="d-grid">
              <Button variant="primary" type="submit" className="mt-4">
                <Link className='text-white text-decoration-none' to="/auth">Üye Ol
                </Link>
              </Button>
            </FormGroup>

          </Form>
        </Col>
      </Row>

    </Container>
  )
}

export default RegisterScreen