import React from 'react';

//Components
import Footer from './footer';

//Bootstrap
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const WhoWeAre = () => {

    return (
        <div>
            <Container>
                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <img
                            alt="First slide"
                            src='./images/who-we-are-main2.jpg'
                            width="1366"
                            height="500"
                            className="d-inline-block align-top"
                        />
                        <Carousel.Caption>
                        <h1><strong>Who we are</strong></h1><br/><br/><br/><br/><br/><br/><br/><br/>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>

            <br/><br/><br/>

            <Container>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <h4>Leadermold College</h4> 
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <p>
                        ...is a secondary private school which prepares pupils to be employers (not employees) right from teenage. 
                        In addition to providing pupils with top-of-the-range tuition towards Cambridge and ZimSec Ordinary and Advanced level 
                        examinations, we equip the learners with a Billionaire Mindset that prepares them to be leading entrepreneurs while they 
                        are still juveniles. We believe in catching them young. We exist to groom unstoppable leaders; leaders who will overcome 
                        every barrier until they enjoy sweet success. We nurture billionaire mentality, skills and understanding in all individuals 
                        we serve. We will every year, churn out billionaires in the making. The sum total of the seeds we sow will be an increase 
                        the number of youth millionaires in Zimbabwe in fifteen years. We prepare teenagers to become rich employers.
                        </p>
                        <p>
                        We equip our learners with the Billionaire Toolkit that we developed through ten years of research. 
                        The toolkit is a creative curriculum that takes children through transformative processes that engender a new mindset, a new 
                        world view, a new way of doing things (culture) and a new character all of which prepare our children to be self-made billionaires.
                        </p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        <h4>Our Vision</h4>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <p>  
                        A unique school moulding teenage entrepreneurs that will become billionaires in their lifetime.
                        </p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        <h4>Our Mission</h4>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <p> 
                        To mould a crop of unstoppable, continuously victorious entrepreneurs from an early age. 
                        </p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        <h4>Our Model</h4>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        <p>
                        Our business is to impart entrepreneurship and leadership inspiration, principles, theories and concepts to teenagers, 
                        equip them with skills, imbue them with attitudes and inflate them with inspiration and confidence that render their 
                        success in the world of entrepreneurship inevitable. We seek to mould a crop of entrepreneurs who will retire as 
                        millionaires and billionaires by the age of 45 years. We aspire to nurture a crop of entrepreneurs who will make it to 
                        the hall of fame and into the Gneiss book of records for all the right reasons.  We do this by engaging our pupils in 
                        highly interactive Entrepreneurship development simulations and equipping them with our innovative Billionaire Toolkit 
                        during career guidance and extra-curricular activity sessions.   
                        </p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        <h4>Our Ethics and Values</h4>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        <p>
                        We are steeped in Judeo-Christian ethics, believing (as we do) that there is a lot for entrepreneurs to learn from the 
                        Jewish economy. We seek to develop entrepreneurially aggressive citizens of the globe who are unstoppable in their 
                        self-renewal and socio-economic development agenda. We believe that attitudes, principles and practices of success and 
                        wealth creation can be taught. So, we will impart entrepreneurship motivation and training packaged in our ‘Billionaire 
                        Toolkit’. 
                        </p>
                        <p>
                            We are concerned about the disjointed nature of vigour and wisdom typical of the life cycle of most Africans: They have 
                            energy without wisdom during teenage and wisdom without energy when they reach retirement age. This disjointed nature of 
                            vigour and wisdoms spells poverty, lack of innovation and retarded socio-economic development. We aim to bridge this gap: 
                            to add worldwide wisdom of the ages to the vigour of youth. We will do this by encasing ‘worldwide entrepreneurial wisdom 
                            of the ages’ in our innovative ‘Billionaire Toolkit’ which we will provide to our Pupils alongside tuition for Cambridge 
                            and ZIMSEC Ordinary and Advanced level Examinations. 
                        </p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                        <h4>Our values are (CAIEI)</h4>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>
                        <p>
                        •	Christian – We believe in being as wise as serpents and as innocent as doves <br/>
                        Check: International Standard Version of the bible, Matt 10 vs 16: ‘Pay Attention, now! I am sending you out as sheep among 
                        wolves. So be as cunning as serpents and as innocent as doves.’<br/>
                        •	Adventure – we believe in going where no one has ever gone. We believe in beating new paths. We dare to tread where no 
                        one has ever trodden. We would rather die pursuing the new than live comfortably in the old order of things; <br/>
                        •	Innovation – we believe in advancing frontiers of not only knowledge but also action. We believe in starting new things. 
                        Our graduates’ prosperity will be hinged on patents for discoveries. Our graduates will become billionaires through marketing 
                        innovative ‘made in Zimbabwe’ patented products globally;<br/>
                        •	Excellence – We believe in being outstanding. We believe in being different. We believe in being and creating excellent 
                        leaders. Our graduates will be adept at leading enterprises.<br/>
                        •	Integrity – We believe in doing the right thing in the right way. We mould leaders who will avoid cutting corners, shun 
                        corruption and build enterprises on the basis of honesty!
                        </p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="6">
                        <h4>Our business model</h4>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body>
                        <p>
                        Our core business is Research, Education and Leadership Development. We will run: <br/>
                        -	Secondary Schools under the name Leadermold School of Commerce (LSC). <br/>
                        -	Primary Schools under the name Leadermold Basic Education College (LEABEC)<br/>
                        -	Research and training centres under the name Leadermold Education, Research and Management Institute (LERMI)<br/>
                        i.	Online application & payment<br/>
                        ii.	Website: ‘Why we exist’<br/><br/>
                        <p>
                        Zimbabwe has a deficit of employers but a surplus of employees. This is why 4 million Zimbabweans have left Zimbabwe to 
                        look for work. Among those who remained, again millions are un- or under-employed. To us, these are sad, unacceptable 
                        realities. We exist to mould young, energetic employers who will become billionaires before they turn 45 years old. We 
                        major in grooming employers who will employ the jobless.<br/>
                        </p>
                        <p>
                        We add global wisdom of the ages to the vigour of teenage. We groom a brand of unstoppable youth who will persistently 
                        and exponentially grow business even in challenging business environments: youth who can successfully catch fish in both 
                        ‘troubled and settled waters.’<br/> 
                        </p>
                        We enrol and teach children from form 1 to form 6. We provide Cambridge and ZIMSEC Ordinary and Advanced level tuition. 
                        In addition, we equip every pupil with the ‘Billionaire Toolkit’<br/><br/>
                        </p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            </Container>

            <Footer />
        </div>
    )
}

export default WhoWeAre;