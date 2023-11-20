import React from "react";
import { Button, Col, Container, Form } from 'react-bootstrap'
import { NavLink, useLocation } from "react-router-dom";
import Card from 'react-bootstrap/Card'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE;

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className="p-5" >
                <h2 className="m-auto" > {isLogin ? 'Authorization' : 'Registration'}  </h2>
                <Form className="d-flex flex-column">

                    <Form.Control className="mt-3" placeholder="Enter your email" />
                    <Form.Control className="mt-3" placeholder="Enter your password" />

                    <Col className="d-flex justify-content-between mt-2" style={{ paddingLeft: 5, paddingRight: 5 }} >
                        {isLogin
                            ? <div> Don't have an account?
                                <NavLink style={{ textDecoration: 'none' }} to={REGISTRATION_ROUTE}> Sign up! </NavLink>
                            </div>

                            : <div> Have an account?
                                <NavLink style={{ textDecoration: 'none' }} to={LOGIN_ROUTE}> Log in! </NavLink>
                            </div>}
                        <Button variant="outline-success"> {isLogin ? 'Enter' : 'Registration'} </Button>
                    </Col>

                </Form>
            </Card>
        </Container>
    )
}

export default Auth;