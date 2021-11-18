import React from 'react'
import styles from './ServicesCard.module.scss'

export default function ServicesCard(props:any) {
    return (

        <>
        
        <div className={styles.cards}>
            <br />
            <br />
            <br />
            <div className={styles.cardTitle}>
            <h2>{props.title}</h2>
            
            </div>
            
            
            <div className={styles.card}>
                <div className={styles.cardBody}>
                    
                    <div className={styles.cardDescription}>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Repellat animi perferendis laudantium minima ipsum eos quibusdam cupiditate</p>
                    </div>
                    
                        <br />
                    <div className={styles.imgContainer}>
                        <img src={props.img} className={styles.cardImage} />
                    </div>
                    
                </div>
               
            </div>
        </div>
        </>
    )
}
