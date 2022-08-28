import React, {useState} from 'react'
import { Container, Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { Login } from '../axios'

const AuthScreen = ({ setUser }) => {
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
                            .then((res) => { console.log(res.data.user) })
                            .catch((err) => { console.log(err); })
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
                            <Button variant="primary" type='submit' size='lg'>
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

export default AuthScreen