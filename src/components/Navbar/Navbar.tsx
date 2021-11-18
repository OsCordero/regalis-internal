
import React from 'react'
import Link from 'next/link'
import styles from "./Navbar.module.scss"



export default function Navbar() {
    return (
        <>
          <div className={styles.container}>
            <nav className={styles.navbar}>

                <Link href="/"> 
                    <div className={styles.logo}>
                        <img src="/Regalis2.png" height="200px" width="200px" />
                    </div>
                </Link>
                <ul className={styles.navItems}>

                    {/* <li>

                    <Link href="/"> 
                        <div className={styles.logo}>
                            <strong>Logo</strong>
                        </div>
                    </Link>
                    </li> */}
            <li className={styles.navItem}>
              <Link href="/productTest">
                <div>
                  <strong> Product</strong>
                </div>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/aboutTest">
                <div>
                  <strong> About</strong>
                </div>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contactTest">
                <div>
                  <strong>Contact</strong>
                </div>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/reviewsTest">
                <div>
                  <strong>Reviews</strong>
                </div>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/helpTest">
                <div>
                  <strong>Help</strong>
                </div>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/faqsTest">
                <div>
                  <strong>FAQ's</strong>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
