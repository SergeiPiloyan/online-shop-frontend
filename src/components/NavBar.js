import React, { useContext } from 'react'
import { Context } from '../index'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { Button } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const { user } = useContext(Context)

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'aliceblue' }} to={SHOP_ROUTE}> Online Store </NavLink>
                {user.isAuth
                    ? <Nav className="ml-auto"  >
                        <Button variant={'outline-light'} > Admin panel </Button>
                        <Button variant={'outline-light'} style={{ marginLeft: 10 }} > Login up </Button>
                    </Nav>
                    : <Nav className="ml-auto" >
                        <Button variant={'outline-light'} onClick={() => user.SetIsAuth(true)}> Sign up </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})


export default NavBar;