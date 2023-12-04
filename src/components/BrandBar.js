import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from '../index'
import { Card, Col } from "react-bootstrap";

const BrandBar = observer(() => {
    const { device } = useContext(Context)

    return (
        <Col className="d-flex flex-wrap">
            {device.brands.map((brand) =>
                <Card
                    className="mx-2 my-2 p-2"
                    key={brand.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? 'warning' : 'light'}
                >
                    {brand.name}
                </Card>
            )}
        </Col>
    )
})

export default BrandBar;