import React from "react";
import {Row, Col} from 'react-flexbox-grid';

export default class Header extends React.Component{
    render() {
        return(
            <Col xs = {12}>
                <Row center="xs">
                    <Col cs={6}>
                        <h1>Startup and Technology News</h1>
                    </Col>
                </Row>
            </Col>
        )
    }
}