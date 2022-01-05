import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'



const name = 'Tobias Sauter'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <a className={styles.navlogo}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" className={styles.houseicon}>
                            <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                            <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                        </svg>
                    </a>
                    <ul className={isOpen === false ?
                        styles.navmenu : styles.navmenu + ' ' + styles.active}>
                        <li className={styles.navitem}>
                            <Link href="/">
                                <a className={styles.navlink}>Home</a>
                            </Link>
                        </li>
                        <li className={styles.navitem}>

                            <a className={styles.navlink}>About</a>

                        </li>
                        <li className={styles.navitem}>
                            <Link href="/posts/contact">
                                <a className={styles.navlink}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                    <button className={isOpen === false ?
                        styles.hamburger : styles.hamburger + ' ' + styles.active}
                        onClick={openMenu}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}