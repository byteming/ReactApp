import React from "react";
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Link} from "react-router-dom";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import Main from "./Main";

export default class HomePage extends React.Component {
    navigate() {
        // console.log(this.props);
        this.props.history.push('/');
    }

    render() {
        return (
            <Grid>
                {/*<Row>*/}
                {/*    <Col xs={8}>*/}
                {/*        <Row start="xs">*/}
                {/*            <Col cs={6}>*/}
                {/*                <Link to={"archives"}>*/}
                {/*                    <button className="btn btn-success">Archives</button>*/}
                {/*                </Link>*/}
                {/*                <Link to={"features"}>*/}
                {/*                    <button className="btn btn-success">Featured</button>*/}
                {/*                </Link>*/}
                {/*                <Link to={"settings"}>*/}
                {/*                    <button className="btn btn-success">Settings</button>*/}
                {/*                </Link>*/}
                {/*                <button className="btn btn-success" onClick={this.navigate.bind(this)}>Return</button>*/}
                {/*            </Col>*/}
                {/*        </Row>*/}
                {/*    </Col>*/}
                {/*</Row>*/}
                <Row>

                    <Col xs={9}>
                        <Row>
                            <Main/>
                        </Row>
                    </Col>
                    <Col xs={3}>
                        <nav id="navbar" className="navbar bg-light">
                            <a className="list-group-item list-group-item-action " href="/">Home</a>
                            <a className="list-group-item list-group-item-action" href="https://www.google.com">Google</a>
                            <a className="list-group-item list-group-item-action" href="https://techcrunch.com/2019/11/23/tesla-cybertruck-reservations-hit-146000/">Tesla</a>
                            <a className="list-group-item list-group-item-action" href="https://techcrunch.com/2019/11/22/facebook-favorites/">Facebook</a>
                            <a className="list-group-item list-group-item-action" href="">Airbnb</a>
                        </nav>
                        <div className="card">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="elonmusk"
                                options={{height: 400, width:400}}
                            />
                            <TwitterMentionButton
                                screenName={'elonmusk'}
                            />
                            <TwitterFollowButton
                                screenName={'elonmusk'}
                            />
                            <TwitterShareButton
                                url={'https://facebook.com/elonmusk'}
                                options={{ text: '#reactjs is awesome', via: 'elonmusk' }}
                            />
                            <TwitterHashtagButton
                                tag={'cybersecurity'}
                            />
                            <TwitterDMButton
                                id={1364031673}
                            />
                            <TwitterMomentShare
                                momentId={'650667182356082688'}
                                options={{height: 400, width:400}}
                            />

                        </div>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

