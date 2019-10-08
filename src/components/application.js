import React from 'react';

//Components
import Footer from './footer';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const Application = () =>{
    return(
        <div>
            <br/><br/><br/>
            <Container>
            <Row>
                <Col md={12}>
                    <Card border="dark" bg="light">
                        <Card.Header as="h4" >
                            Application for a place to study at Leadermold
                        </Card.Header>
                        <Card.Body>
                        <br />
                        <p>
                        <div>
                            <InputGroup size="md" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">Surname:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </InputGroup>
                            <br />
                            <InputGroup size="md" className="mb-3">
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-sm">First Names:</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </InputGroup>
                            <br />
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <InputGroup size="md" className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>Date of birth:</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl placeholder="DD/" />
                                        <FormControl placeholder="MM/" />
                                        <FormControl placeholder="YYYY" />
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Control as="select">
                                        <option>Sex...</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <br />
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Control as="select">
                                        <option>Country...</option>
                                        <option>Zimbabwe</option>
                                        <option>South Africa</option>
                                        <option>Botswana</option>
                                        <option>Namibia</option>
                                        <option>Zambia</option>
                                        <option>Mozambique</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Control as="select">
                                        <option>I am applying for a...</option>
                                        <option>Form 1 place</option>
                                        <option>Form 2 place</option>
                                        <option>Form 3 place</option>
                                        <option>Form 4 place</option>
                                        <option>Form 5 place</option>
                                        <option>Form 6 place</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            
                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Control as="select">
                                        <option>Do you stay with both of your parents?</option>
                                        <option>Yes, I stay with both of my parents</option>
                                        <option>No, I do not stay with both of my parents</option>

                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Control as="select">
                                        <option>Which of these best describe you?</option>
                                        <option>My father passed away</option>
                                        <option>My mother passed away</option>
                                        <option>Both my father and mother passed away</option>
                                        <option>Both of my parents are still alive</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <br /> 
                            <Form>

                                <Form.Group controlId="formGridAddress1">
                                    <Form.Label>Address line 1</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                                <Form.Group controlId="formGridAddress2">
                                    <Form.Label>Address line 2</Form.Label>
                                    <Form.Control placeholder="Apartment, studio, or floor" />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Your mobile number</Form.Label>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">+xxx</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control type="email"/>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>Next of kin mobile number</Form.Label>
                                        <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroup-sizing-default">+xxx</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl
                                            aria-label="Default"
                                            aria-describedby="inputGroup-sizing-default"
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                </Form.Row>
                                
                                <InputGroup size="md" className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text>When do you want to join Leadermold?</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl placeholder="MM/" />
                                        <FormControl placeholder="YYYY" />
                                </InputGroup>
                                <br/>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>*If you were asked to lead other people in bringing about improvement in the lives of people in your community today, what improvement (change) would you like to bring about? (limit 500 characters)
                                        </Form.Label>
                                        <Form.Control as="textarea" rows="3" />
                                    </Form.Group>
                                </Form>
                                <br/>
                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Check this box if you agree with the terms and conditions of using this website." />
                                </Form.Group>
                                <br/>
                                <Button variant="primary" type="submit">
                                Submit
                                </Button>
                            </Form>
                        </div>
                        </p>
                        </Card.Body>
                        <Card.Footer >
                            *Please fill out all fields to proceed  
                        </Card.Footer>                        
                    </Card>
                </Col>
            </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default Application;