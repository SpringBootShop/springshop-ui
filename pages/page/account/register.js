import React, { useState } from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import { Input, Container, Row, Form, Label ,Col, Button, FormGroup } from 'reactstrap';

const Register = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        // TODO: request to server 
        // try {
        //     const response = await axios.post('/api/register', formData);
        //     console.log('Registration successful:', response.data);
        // } catch (error) {
        //     console.error('There was an error registering:', error);
        // }
    };
    
    return (
        <CommonLayout parent="home" title="register">
            <section className="register-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h3>create account</h3>
                            <div className="theme-card">
                                <Form className="theme-form" onSubmit={handleSubmit}>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label className="form-label" for="email">First Name</Label>
                                                <Input type="text" className="form-control" id="fname" placeholder="First Name"
                                                    required=""
                                                    onChange={handleChange}
                                                    />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label className="form-label" for="review">Last Name</Label>
                                                <Input type="text" className="form-control" id="lname" placeholder="Last Name"
                                                    required=""
                                                    onChange={handleChange} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label className="form-label" for="email">email</Label>
                                                <Input type="email" className="form-control" id="email" placeholder="Email" required=""
                                                    onChange={handleChange} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="6">
                                            <FormGroup>
                                                <Label className="form-label" for="review">Password</Label>
                                                <Input type="password" className="form-control" id="review"
                                                    placeholder="Enter your password" required=""
                                                    onChange={handleChange} />
                                            </FormGroup>
                                        </Col>
                                        <Col md="12">
                                            <Button className="btn btn-solid w-auto">create Account</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}

export default Register