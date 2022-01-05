import React from 'react'
import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './startseite2.module.css';
import Link from 'next/link';


function Startseite2() {
    return (
        <div className={styles.container} >
            <h1 className={styles.title}>House Renting</h1>
        </div>

    )
}

export default Startseite2