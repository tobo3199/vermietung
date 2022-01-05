import React from 'react'
import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './startseite.module.css';
import Link from 'next/link'


function Startseite() {
    return (
        <div className={styles.container} >
            <video className={styles.video} src="/videos/Startseite.mp4" autoPlay loop muted />

            <div className={styles.position}>
                <Link href="/posts/first-post">
                    <button className={styles.button75} role="button"><span class="text">RENT NOW</span></button>
                </Link>
            </div>
            <div className={styles.cards}>

            </div>
        </div>
    )
}

export default Startseite
