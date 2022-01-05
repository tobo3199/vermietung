
import React, { useState } from "react";

export default function Navbar() {

    const [state, setstate] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link href="/">
                    <a>TRVL</a>
                </Link>
                <div className="menu-icon">

                </div>
            </div>
        </nav>
    )
}