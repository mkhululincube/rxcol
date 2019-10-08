import React from 'react';

//Components
import Footer from './footer';

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

const AcademicOverview = () => {

    return (
        <div>
            <Container>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img
                            alt="First slide"
                            src='./images/academic-overview-main.jpg'
                            width="1366"
                            height="500"
                            className="d-inline-block align-top"
                        />
                        <Carousel.Caption>
                        <h1><strong>Academic overview</strong></h1><br/><br/><br/><br/><br/><br/><br/><br/>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            <br/><br/><br/>
            </Container>

            <Container>
                <Row>
                    <Col sm={6}>
                        <h4>Ordinary Level - Cambridge</h4><br/>
                        <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Subject</th>
                            <th>Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Accounting</td>
                            <td>7707</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Business Studies</td>
                            <td>7115</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Commerce</td>
                            <td>7100</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Computer Science</td>
                            <td>2210</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Science Combined</td>
                            <td>5129</td>
                            </tr>
                            <tr>
                            <td>6</td>
                            <td>Economics</td>
                            <td>2281</td>
                            </tr>
                            <tr>
                            <td>7</td>
                            <td>English Language</td>
                            <td>1123</td>
                            </tr>
                            <tr>
                            <td>8</td>
                            <td>Geography</td>
                            <td>2217</td>
                            </tr>
                            <tr>
                            <td>9</td>
                            <td>Mathematics D</td>
                            <td> 4024</td>
                            </tr>
                            <tr>
                            <td>10</td>
                            <td>French</td>
                            <td>3015</td>
                            </tr>
                            <tr>
                            <td>11</td>
                            <td>Sociology</td>
                            <td>2251</td>
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                    <Col sm={6}>
                        <h4>Advanced Level - Cambridge</h4><br/>
                        <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Subject</th>
                            <th>Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Accounting</td>
                            <td>9706</td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Business</td>
                            <td>9609</td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Computer Science</td>
                            <td>9608</td>
                            </tr>
                            <tr>
                            <td>4</td>
                            <td>Mathematics</td>
                            <td>9709</td>
                            </tr>
                            <tr>
                            <td>5</td>
                            <td>Economics</td>
                            <td>9708</td>
                            </tr>
                            <tr>
                            <td>6</td>
                            <td>Geography</td>
                            <td>9696</td>
                            </tr>
                            <tr>
                            <td>7</td>
                            <td>History</td>
                            <td>9389</td>
                            </tr>
                            <tr>
                            <td>8</td>
                            <td>Law</td>
                            <td>9084</td>
                            </tr>
                            <tr>
                            <td>9</td>
                            <td>Sociology</td>
                            <td>9699</td>
                            </tr>
                            <tr>
                            <td>10</td>
                            <td>French</td>
                            <td></td>
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <br/><br/>

            <Jumbotron fluid>
                <Container>
                    <h4>Billionaire Toolkit (BT)</h4><br/>
                    <h6>
                        The Billionaire Toolkit is a leadership toolkit. It is Leadermold’s innovative flagship 
                        extra-curricular activities syllabus for children pursuing forms 1 -6. The aim of the BT is to 
                        transform any common teenager who enrols with us into a confident, humble, formidable entrepreneur 
                        whose development trajectory will continually give positive surprises to their parents, community 
                        and country for all the right reasons. Its purpose is to bridge the gap between the vigour of youth 
                        and the wisdom of age by giving worldwide entrepreneurial wisdom of the ages to our pupils while 
                        they are still teenagers. The BT demystifies innovation, invention and entrepreneurship and enables 
                        our pupils to see further and higher by ‘standing on the shoulders of the [entrepreneurial leadership] giants.’ 
                    </h6>
                    <br/><br/>
                </Container>
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
                </Jumbotron>
                <Jumbotron>
                <Container>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link variant="outline-secondary" eventKey="first">
                                    <h4>Level One</h4>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <h4>Level Two</h4>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">
                                    <h4>Level Three</h4>
                                </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Card>
                                        <Card.Header>Some aspects of this level include</Card.Header>
                                        <Card.Body>
                                            <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                Building a healthy but high self-esteem: Believing in God and believing in myself as a unique being created to achieve unique dreams and goals in my life time:<br/>
                                                Debunking the myth of miracle money: Does money come through miraculous ways or careful planning and hard work? Can mere praying, fasting, praising & worshiping God 
                                                make one a billionaire? (Key text: Stephen R. Covey: The 7 Habits of Highly Effective People)<br/>
                                                Will money be there for all of us if we all become rich?{' '}
                                            </p>
                                            <footer className="blockquote-footer">
                                                Key text: <cite title="Source Title">George, S. Clason: The Richest Man in Babylon</cite>
                                            </footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Card>
                                        <Card.Header>Some aspects of this level include</Card.Header>
                                        <Card.Body>
                                            <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                How do employers-in-the-making differ from employees-in-the-making?  (Key texts: Robert Kiyosaki: Rich Daddy, Poor Daddy. Titus Mirieri: The Business world & what school didn’t teach you about business)<br/>
                                                How can I start making money when I am still young? (Case studies: Mark Zuckerberg, Bill Gates, Warren Buffet)<br/>
                                                How can set up long term income earning activities?{' '}
                                            </p>
                                            <footer className="blockquote-footer">
                                                <cite title="Source Title">Donald Trump and Robert Kiyosaki: Midas Touch</cite>
                                            </footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Card>
                                        <Card.Header>Some aspects of this level include</Card.Header>
                                        <Card.Body>
                                            <blockquote className="blockquote mb-0">
                                            <p>
                                                {' '}
                                                Can a black person build a billion-dollar business in Africa? (Key Text: Chika Onyeani: The Capitalist Niger. Strive Masiyiwa - How to build a Multi-Billion Dollar Business in Africa from Scratch).<br/>
                                                Applied Research and Testimonies from selected leaders:  How to survive a harsh ever-changing environment –
                                                Study Tours, business simulations, mock business start-ups…{' '}
                                            </p>
                                            <footer className="blockquote-footer">
                                                <cite title="Source Title">
                                                    Charge to empower pupils on departure from the school after writing Advanced Level examinations
                                                </cite>
                                            </footer>
                                            </blockquote>
                                        </Card.Body>
                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>

            </Jumbotron>

            <Footer />
        </div>
    )
}

export default AcademicOverview;