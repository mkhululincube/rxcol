import React from 'react';

//Components
import Footer from './footer';

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const OurCampuses = () => {

    return (
        <div>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <img
                        alt="First slide"
                        src='./images/our-campuses-main2.jpg'
                        width="1366"
                        height="500"
                        className="d-inline-block align-top"
                    />
                    <Carousel.Caption>
                    <h1><strong>Our campuses</strong></h1><br/><br/><br/><br/><br/><br/><br/><br/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br/><br/><br/>
            
            <Container>
                <h4>Our Campuses</h4>
                All our campuses are located close to the city centre but clear of the hustle, bustle and buzz of the city. We situate our 
                campuses at secure, quiet locations where we can whisper secrets of success in entrepreneurship to a few teenagers at a time. 
                <br/><br/><br/>

                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="./images/our-campuses-1.jpg" />
                        <Card.Body>
                        <Card.Title>Campus 1<hr/></Card.Title>
                        <Card.Text>
                            Our Harare Campus is at 29 Bodle Road Eastlea
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/our-campuses-2.jpg" />
                        <Card.Body>
                        <Card.Title>Campus 2<hr/></Card.Title>
                        <Card.Text>
                            Our Mutare Campus is at the First Floor, CAIPF Building, Corner 3rd Street & 1st Avenue, Mutare
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="./images/our-campuses-uniform.jpg" />
                        <Card.Body>
                        <Card.Title>Uniform<hr/></Card.Title>
                        <Card.Text>
                        Black Suit with white shirt – Our Belief in equality among Black and White People, Red tie/ bow tie
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <br/><br/>

            </Container>

            <Footer />
        </div>
    )
}

export default OurCampuses;