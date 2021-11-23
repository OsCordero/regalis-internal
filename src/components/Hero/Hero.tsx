import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
<<<<<<< HEAD
<<<<<<< Updated upstream
    return (
        <>
        
=======
  return (
    <>
      <div className={styles.color}>
>>>>>>> Stashed changes
        <div className={styles.hero}>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet.</p>
            <h1>Landing page Lorem ipsum dolor sit amet adeh.</h1>
          </div>

<<<<<<< Updated upstream
            <div className={styles.text}>
            <h1 >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            </div>
            
=======
  return (
    <>
      <div className={styles.color}>
        <div className={styles.hero}>
          <br />
          <br />

          <div className={styles.text}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          </div>
>>>>>>> main

          <div className={styles.gift}>
            <Image src="/gift.png" height={599} width={596.66} alt="gift" />
          </div>
        </div>
<<<<<<< HEAD
        </>
    )
=======
          <div className={styles.gift}>
            <Image src="/gift.png" height={700} width={700} />
          </div>
        </div>
      </div>
    </>
  );
>>>>>>> Stashed changes
=======
      </div>
    </>
  );
>>>>>>> main
}
