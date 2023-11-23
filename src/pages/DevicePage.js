import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar2 from '../assets/bigStar2.svg.png'

const DevicePage = () => {
    const device = { id: 1, name: 'Iphone 11', price: 11000, rating: 1, img: 'https://images-platform.99static.com//rtkYYwN-Jhzva_5nxTO8cvbEUmg=/168x168:1512x1512/fit-in/500x500/99designs-contests-attachments/145/145591/attachment_145591755' }
    const description = [
        { id: 1, title: 'Оперативная память', description: '5 ГБ' },
        { id: 2, title: 'Камера', description: '12 МП' },
        { id: 3, title: 'Процессор', description: 'Пентиум 3' },
        { id: 4, title: 'Кол-во ядер', description: '2' },
        { id: 5, title: 'Аккумулятор', description: '4000' },

    ];


    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>

                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center" style={{ width: 300, height: 300 }}>
                        <h2 className="d-flex align-items-center justify-content-center"> {device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${bigStar2}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>

                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{ width: 300, height: 300, fontSize: 32, border: '5px solid lightgray' }}
                    >
                        <h3> {`From: ${device.price} CHF`} </h3>
                        <Button variant={'outline-dark'} > Add to basket </Button>
                    </Card>
                </Col>
            </Row>

            <Row className="d-flex flex-column" style={{ marginLeft: '0px', marginTop: '20px' }}>
                <h1> Характеристики </h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }} >
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container >
    )
}

export default DevicePage;