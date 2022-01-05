import React from 'react'
import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './kontaktseite.module.css';
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap';




function Kontaktseite() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className={styles.title}>Contact</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className={styles.title2}>Vermieter:</h2>
                    <ul className={styles.liste}>
                        <li>Tobias Sauter</li>
                        <li>Heinrichstrasse 1</li>
                        <li>8400 Winterthur</li>
                        <li>Email: <a className={styles.mail} href="mailto:tobias.sauter@lernende.bbw.ch">Tobias Sauter</a> </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className={styles.title2}>Organisation:</h2>
                    <ul className={styles.liste}>
                        <li>BBW</li>
                        <li>Pionierstrasse 28</li>
                        <li>8400 Winterthur</li>
                        <li>Abteilung Informatik</li>
                        <li>Tel: 052 267 83 00</li>
                        <li>Email: <a className={styles.mail} href="mailto:informatik@bbw.ch">informatik@bbw.ch</a> </li>
                    </ul>
                </Col>
            </Row>

        </Container>

    )
}

export default Kontaktseite
