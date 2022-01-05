import React from 'react'
import { Image } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './startseite.module.css';
import Link from 'next/link';
import CabinIcon from '@mui/icons-material/Cabin';


function Startseite() {
    return (
        <div className={styles.container} >

            <video className={styles.video} src="/videos/Startseite.mp4" autoPlay loop muted />

            <p className={styles.title}>House Renting</p>

            <div className={styles.position}>
                <Link href="/posts/first-post">
                    <button className={styles.button75} role="button"><span class="text">RENT NOW</span></button>
                </Link>
            </div>
            <div className={styles.cards}>

            </div>

            <div>
                <a href='#section2'>
                    <CabinIcon className={styles.icon}></CabinIcon>
                </a>
            </div>
        </div>

    )
}

export default Startseite
