import React from 'react'
import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './houseone.module.css';
import Link from 'next/link'
import { Container, Row, Col, Carousel } from 'react-bootstrap';




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
            <Row>
                <Col>
                    <h1>hallo</h1>
                </Col>
            </Row>

        </Container>

    )
}

export default Houseone
