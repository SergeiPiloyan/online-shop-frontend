import React, { useContext } from 'react'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'aliceblue', textDecoration: 'none' }} to={SHOP_ROUTE}> Online Store </NavLink>
                {user.isAuth
                    ? <Nav className="ml-auto"  >
                        <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)} > Admin panel </Button>
                        <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)} style={{ marginLeft: 10 }} > Log in </Button>
                    </Nav>
                    : <Nav className="ml-auto" >
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}> Sign up </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})


export default NavBar;