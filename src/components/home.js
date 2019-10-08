import React from 'react';
import { Link } from 'react-router-dom'

//Components
import Footer from './footer';

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Home = () => {

    return(
        <div>
            <Container>
                <Carousel interval={12000} indicators={false}>
                    <Carousel.Item>
                        <img
                            alt="First slide"
                            src='./images/home-slide1.jpg'
                            width="1366"
                            height="500"
                            className="d-inline-block align-top"
                        />
                        <Carousel.Caption>
                        <h1>Leadermold</h1>
                        <h4>Private Limited</h4><br/>
                        <p>
                            <h5>
                            We are an education, research, management and leadership development company with a global focus.
                            We leverage technology to ensure global presence.
                            </h5>
                            <br/><Button variant="outline-primary"><Link to="/application">Find out more >></Link></Button>
                        </p><br/><br/><br/><br/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt="First slide"
                            src='./images/home-slide2.jpg'
                            width="1366"
                            height="500"
                            className="d-inline-block align-top"
                        />
                        <Carousel.Caption>
                        <h1>Leadermold College</h1><br/>
                        <p>
                            <h5>is a secondary private school which prepares pupils to be employers (not employees) right from teenage.</h5>
                            <br/><Button variant="outline-primary"><Link to="/academic-overview">Find out more >></Link></Button>
                        </p><br/><br/><br/><br/><br/>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            alt="First slide"
                            src='./images/home-slide3.jpg'
                            width="1366"
                            height="500"
                            className="d-inline-block align-top"
                        />
                        <Carousel.Caption>
                        <h1>Our Model</h1><br/>
                        <p>
                            <h5>Our business is to impart entrepreneurship and leadership inspiration, principles, theories and concepts to 
                                teenagers, equip them with skills, imbue them with attitudes and inflate them with inspiration and confidence 
                                that render their success in the world of entrepreneurship inevitable</h5>
                            <br/><Button variant="outline-primary"><Link to="/who-we-are">Find out more >></Link></Button>
                        </p><br/><br/><br/><br/><br/>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Jumbotron fluid>
                <Container>
                    <h1>Billionaire Toolkit</h1>
                    <p>
                    The Billionaire Toolkit is a leadership toolkit. It is Leadermold’s innovative flagship extra-curricular activities 
                    syllabus for children pursuing forms 1 -6. The aim of the BT is to transform any common teenager who enrols with us 
                    into a confident, humble, formidable entrepreneur whose development trajectory will continually give positive surprises 
                    to their parents, community and country for all the right reasons. Its purpose is to bridge the gap between the vigour 
                    of youth and the wisdom of age by giving worldwide entrepreneurial wisdom of the ages to our pupils while they are still 
                    teenagers.
                    </p>
                </Container>
            </Jumbotron>
            <br/>

            <Container>
                <Card className="bg-dark text-white">
                    <Card.Img src="./images/academic-overview-quote.jpg" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>We take cue from Isaac Newton’s 1675 assertion that:</Card.Title>
                        <Card.Text>
                        <h2>‘If I have seen further, it is by standing on the shoulders of the Giants!’</h2>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Container>
            <br/><br/><br/>

            <Container>
                <Jumbotron>
                    <h1>Join us</h1>
                    <p>
                        All our campuses are located close to the city centre but clear of the hustle, bustle and buzz of the city. 
                        We situate our campuses at secure, quiet locations where we can whisper secrets of success in entrepreneurship 
                        to a few teenagers at a time.
                    </p>
                    <p>
                        <Button variant="outline-dark"><Link to="/application">APPLY ONLINE</Link></Button>
                    </p>
                </Jumbotron>
            </Container>

            <Footer />
        </div>
    )

}

export default Home;