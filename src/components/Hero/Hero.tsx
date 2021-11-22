import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
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
            

            <div className={styles.gift}>
                <Image src="/gift.png" height={898.5} width={895} />
            </div>
        </div>
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
}
