import React from 'react'
import styles from './Footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <div className={styles.footer}>
            <footer>

                <ul className={styles.footerItems}>

                    {/* <li>
                    <Link href="/"> 
                        <div className={styles.logo}>
                            <strong>Logo</strong>
                        </div>
                    </Link>
                    </li> */}
                    <li className={styles.footerItem}>
                    <Link href="/productTest"> 
                        <div>
                           <strong> Product</strong> 
                        </div>
                    </Link>
                    </li>
                    <li className={styles.footerItem}>
                    <Link href="/aboutTest"> 
                        <div >
                            <strong> About</strong>
                           
                        </div>
                    </Link>
                    </li>
                    <li className={styles.footerItem}>
                    <Link href="/contactTest"> 
                        <div >
                            <strong>Contact</strong>
                            
                        </div>
                    </Link>
                    </li>
                    <li className={styles.footerItem}>
                    <Link href="/reviewsTest"> 
                        <div >
                            <strong>Reviews</strong>
                            
                        </div>
                    </Link>
                    </li>
                    <li className={styles.footerItem}>
                    <Link href="/helpTest"> 
                        <div >
                            <strong>Help</strong>
                            
                        </div>
                    </Link>
                    </li>
                    <li className={styles.footerItem}>
                    <Link href="/faqsTest"> 
                        <div >
                            <strong>FAQ's</strong>
                            
                        </div>
                    </Link>
                    </li>
                </ul>

                <Link href="/"> 
                    <div className={styles.logo}>
                        <img src="/footer-gifts.png" height="124.5" width="286.25" />
                    </div>
                </Link>
            </footer>
            </div>
            
              
            
        </>
    )
}
