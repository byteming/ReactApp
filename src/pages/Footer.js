import React from "react";
import {Col, Row} from "react-flexbox-grid";

export default class Footer extends React.Component{
    render() {
        return(
            <Col xs = {12}>
                <Row center="xs">
                    <Col cs={6}>
                        <h5>@2019 All rights reserved.</h5>
                    </Col>
                </Row>
            </Col>

        )
    }
}