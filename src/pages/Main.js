import React from "react";
import {MDBCollapse} from "mdbreact";
import truck from "../img/tesla-cyber-truck-stage.jpg";
import airbnb from "../img/Airbnb.jpg";
import facebook from "../img/facebook.jpg"
import Image from 'react-image-resizer';
import {Row, Col} from 'react-flexbox-grid';

export default class Main extends React.Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
    };

    render() {
        return (

            <div>
                <Row >
                    <Col xs={1}>
                <Image src={truck} alt="Cybertruck" height={240} width={250}/>
                    </Col>
                    <Col xs={12}>
                        <Row >
                <a href="javascript:void(0)" onClick={this.toggleCollapse("blog1")}>
                    <h3>Tesla’s Cybertruck is made of the same stainless steel alloy that SpaceX is using for
                        Starship</h3>
                </a>
                <h6>@etherington / 8:24 am EST • November 22, 2019</h6>

                <MDBCollapse id="blog1" isOpen={this.state.collapseID}>
                    <h4>
                        <p>
                            “It is, it is literally bulletproof to a nine millimeter handgun,” Musk said onstage during
                            the unveiling. “That’s how strong the skin is — it’s ultra-hard, cold-rolled stainless steel
                            alloy that we’ve developed. We’re going to be using the same alloy in the Starship rocket,
                            and in the Cybertruck.”
                        </p>
                        <p>
                            Using the same stainless steel alloy across both Tesla and SpaceX will obviously provide
                            some cost efficiencies — especially if the Cybertruck manages to become a high-volume
                            production vehicle (unlikely because of its controversial design, but perhaps possible based
                            on the economics if Tesla can stick to the price points it revealed onstage). There’s
                            another way that the Cybertruck could benefit SpaceX’s work, and Elon alluded to it on
                            Twitter ahead of the event — Mars will need ground transportation, too.
                        </p>
                    </h4>
                </MDBCollapse>
                        </Row>
                    </Col>
                </Row>
                {/*End of Blog paper 1*/}

                {/*Blog paper 2*/}
                <div>
                    <Image src={facebook} alt="Cybertruck" height={240} width={250}/>
                    <a href="javascript:void(0)" onClick={this.toggleCollapse("blog2")}>
                        <h3>Facebook prototypes Favorites for close friends microsharing</h3>
                    </a>
                    <h6>@joshconstine / 4:30 pm EST • November 22, 2019</h6>

                    <MDBCollapse id="blog2" isOpen={this.state.collapseID}>
                        <h4>
                            <p>
                                Facebook is building its own version of Instagram Close Friends, the company confirms to
                                TechCrunch. There are a lot people that don’t share on Facebook because it can feel
                                risky or
                                awkward as its definition of “friends” has swelled to include family, work colleagues
                                and
                                distant acquaintances. No one wants their boss or grandma seeing their weekend partying
                                or
                                edgy memes. There are whole types of sharing, like Snapchat’s Snap Map-style live
                                location
                                tracking, that feel creepy to expose to such a wide audience.
                            </p>
                            <p>
                                Now Facebook is in fact prototyping its a feature similar to Instagram Close Friends
                                called
                                Favorites. It lets users designate certain friends as Favorites, and then instantly send
                                them their Facebook Story or a camera-based post from Messenger to just those people,
                                each
                                in their own message thread.
                            </p>
                        </h4>
                    </MDBCollapse>
                </div>
                {/* Ebd of Blog paper 2*/}

                {/*Blog paper 3*/}
                <div>
                    <Image src={airbnb} alt="Cybertruck" height={240} width={250}/>
                    <a href="javascript:void(0)" onClick={this.toggleCollapse("blog3")}>
                        <h3>Airbnb COO Belinda Johnson is leaving the company next year</h3>
                    </a>
                    <h6>@meganrosedickey / 11:48 am EST • November 22, 2019</h6>

                    <MDBCollapse id="blog3" isOpen={this.state.collapseID}>
                        <h4>
                            <p>
                                Airbnb COO Belinda Johnson notified employees of her impending departure next March,
                                CNBC
                                first reported. Airbnb has since confirmed the news, saying Johnson will remain involved
                                with the company on its board of directors. Her last day as COO will be March 1, 2020.
                            </p>
                            <p>
                                News of Johnson stepping down comes as Airbnb gears up to make its initial public
                                offering
                                next year. In September, the company announced it hit more than $1 billion in revenue in
                                Q2
                                2019. Airbnb says it has also been EBITDA profitable for the last two years.
                            </p>
                            <p>
                                However, Airbnb is no stranger to controversy. From regulatory issues stemming from
                                Airbnb’s
                                impact on housing prices, to discrimination, Airbnb has some buttoning up to do before
                                it
                                goes public.
                            </p>
                        </h4>
                    </MDBCollapse>
                </div>
                {/* End of Blog paper 3*/}
            </div>
        );
    }
}
