import React from 'react'
import styles from './OurServices.module.scss';
import ServicesCard from '../ServicesCard/ServicesCard'

export default function OurServices() {
    return (

        <>
        
        <div className={styles.wrapper}>
        <br />
        
        <h1 className="center">Lorem Ipsum</h1>
        
        
        <div className={styles.cards}>

                
            <ServicesCard title="Title 1" img="/gift.png" />
            <ServicesCard title="Title 2" />
            <ServicesCard title="Title 3" />
            <ServicesCard title="Title 4" />
        </div>
            
            
        </div>
        </>
    )
}
