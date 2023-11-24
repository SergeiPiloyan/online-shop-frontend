import React, { useContext, useState } from "react";
import { Button, Col, Row, Dropdown, Form } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import { Context } from '../../index'

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => setInfo([...info, { title: '', description: '', number: Date.now() }])
    const removeInfo = (number) => setInfo(info.filter(i => i.number !== number))


    return (
        <Modal size="lg" centered show={show} onHide={onHide} >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new device
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form >

                    <Dropdown className="m-2">
                        <Dropdown.Toggle> Choise the type </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}> {type.name} </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="m-2">
                        <Dropdown.Toggle> Choise the brand </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}> {brand.name} </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control className="m-2" placeholder="Entre device's name" />

                    <Form.Control className="m-2" placeholder="Entre device's price" type='number' />

                    <Form.Control className="m-2" type='file' />
                    <hr />
                    <Button onClick={addInfo} variant={"outline-dark"}> Add new property </Button>

                    {info.map(i =>
                        <Row className="mt-3" key={i.number}>
                            <Col md={4}> <Form.Control placeholder="Enter property's name" /> </Col>

                            <Col md={4}> <Form.Control placeholder="Enter property's description" /> </Col>

                            <Col md={4}>
                                <Button variant={"outline-danger"} onClick={() => removeInfo(i.number)} > Delete </Button>
                            </Col>
                        </Row>
                    )}

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={onHide}>Add device</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default CreateDevice;