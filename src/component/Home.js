import React from 'react'
import styles from '../../src/myStyles.module.css'
import image from '../../src/full_stack_banner.jpg'

function Home() {
    return (
        <>
        <div className = {styles.aboutDisplay}>
           <p className = {styles.homeContent}>Full Stack Developer <br/> based in Namakkal, Tamilnadu</p> 
            <img className = {styles.image} src ={image} alt = "Full Stack Developer"/>           
        </div>       
        </>

    )
}

export default Home
