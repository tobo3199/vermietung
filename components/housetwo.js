import React from 'react'
import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './houseone.module.css';
import Link from 'next/link'
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import BedIcon from '@mui/icons-material/Bed';
import BathroomIcon from '@mui/icons-material/Bathroom';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);



function Houseone() {
    return (
        <Container className={styles.container}>
            <Row>
                <Col>
                    <Carousel className={styles.carousel}>
                        <Carousel.Item className={styles.item}>
                            <img
                                className="d-block w-100"
                                src="/images/houseone1.jpeg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className={styles.item}>
                            <img
                                className="d-block w-100"
                                src="/images/houseone2.jpeg"
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className={styles.item}>
                            <img
                                className="d-block w-100"
                                src="/images/houseone3.jpeg"
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className={styles.row2}>
                <Col xs={8}>
                    <h1 className={styles.h1}>House somewhere in nowhere</h1>
                    <li>
                        <ul className={styles.ul}><PersonIcon className={styles.iconsize}></PersonIcon>4</ul>
                        <ul className={styles.ul}><BedIcon className={styles.iconsize}></BedIcon>4</ul>
                        <ul className={styles.ul}><BathroomIcon className={styles.iconsize}></BathroomIcon>2.5</ul>

                    </li>
                </Col>
                <Col>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                House Renting
                            </Typography>


                            <Typography variant="body2">
                                If you want to rent this house, click on the button and check the dates
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>
                                Rent
                            </Button>
                        </CardActions>
                    </Card>
                </Col>
            </Row>

        </Container>

    )
}

export default Houseone
