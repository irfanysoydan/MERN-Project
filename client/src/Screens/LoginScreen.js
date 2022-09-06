import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { Login } from '../axios'
import toast from "react-hot-toast"

const LoginScreen = ({ setUser }) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    return (
        <Container>
            <Row className='justify-content-center'>
                <Col xs={12} md={6}>
                    <Form onSubmit={(e) => {
                        e.preventDefault()

                        Login(formData)
                            .then((res) => {
                                localStorage.setItem("user", JSON.stringify(res.data.user))
                                setUser(res.data.user)
                                navigate("/")

                            })
                            .catch((err) => {
                                toast.error(err.response.data.message)
                            })
                    }}>
                        <FormGroup className='mb-3' controlId='formBasicEmail'>
                            <FormLabel>Email Adresi</FormLabel>
                            <FormControl onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} type='email' placeholder='Mail Adresinizi Giriniz'></FormControl>
                        </FormGroup>
                        <FormGroup className='mb-3' controlId='formBasicPassword'>
                            <FormLabel>Şifre</FormLabel>
                            <FormControl onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} type='password' placeholder='Şifrenizi Giriniz'></FormControl>
                        </FormGroup>
                        <FormGroup className='d-grid'>
                            <Button disabled={formData.email === "" || formData.password === ""} variant="primary" type='submit' size='lg'>
                                Giriş Yap
                            </Button>
                            <Form.Text className="text-center mt-2">
                                Hesabın Yok Mu? <Link to="/register">Üye Ol</Link>
                            </Form.Text>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default LoginScreen