import React, { useEffect, useState } from 'react'
import { Container, Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { Register } from "../axios/index"
import PhoneInput from "react-phone-input-2"
import toast from "react-hot-toast"

const RegisterScreen = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    password: "",
    correctionPassword: "",
    email: "",
    phoneNumber: phoneNumber
  });
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (
      formData.password.length >= 8 &&
      formData.fullName.length >= 3 &&
      formData.email.length >= 5 &&
      formData.phoneNumber.length >= 12 &&
      formData.password === formData.correctionPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formData])

  useEffect(() => {
    setFormData({ ...formData, phoneNumber: phoneNumber })
  }, [phoneNumber])
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col xs={12} md={6}>
          <Form onSubmit={(e) => {
            e.preventDefault()

            Register(formData).then((res) => {
              navigate("/login")
            }).catch((err) => toast.error(err.response.data.message))

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
              <FormControl onChange={(e) => { setFormData({ ...formData, correctionPassword: e.target.value }) }} type="password" placeholder="Şifrenizi tekrar giriniz"></FormControl>
            </FormGroup>

            <FormGroup className='mb-3' controlId='formBasicPhone'>
              <FormLabel>Telefon</FormLabel>
              <PhoneInput value={phoneNumber} onChange={setPhoneNumber} country={"tr"} ></PhoneInput>
            </FormGroup>

            <FormGroup className="d-grid">
              <Button disabled={disabled} variant="primary" type="submit" className="mt-4">
                <Link className='text-white text-decoration-none' to="/auth">Üye Ol
                </Link>
              </Button>
            </FormGroup>
          </Form>
          <div style={{ display: "flex", flexDirection: "column", textAlign: "center", marginTop: "10px" }}>
            <p style={{ color: "red", display: formData.password.length >= 8 && "none" }}>* Şifreniz en az 8 karakterden oluşmalı</p>
            <p style={{ color: "red", display: formData.fullName.length >= 3 && "none" }}>* Adınız en az 3 karakterden oluşmalı</p>
            <p style={{ color: "red", display: formData.password === formData.correctionPassword && "none" }}>* Şifreleriniz uyuşmuyor.</p>
          </div>
        </Col>
      </Row>

    </Container>
  )
}

export default RegisterScreen