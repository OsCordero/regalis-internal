import React from 'react';
import styles from './Hero.module.scss';
import Image from "next/image"

export default function Hero() {
    return (
        <>
        <div className={styles.color}>
        <div className={styles.hero}>
        <br />
        <br />
        

            <div className={styles.text}>
            <h1 >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            </div>
            

            <div className={styles.gift}>
                <Image src="/gift.png" height={599} width={596.66} />
            </div>
        </div>
        </div>
        </>
    )
}
