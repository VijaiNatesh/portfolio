import React from 'react'
import styles from '../../src/myStyles.module.css'
import image from '../../src/NV.jpg'


function About() {
    return (
        <div className={styles.aboutBackground}>
            <h1 className={styles.aboutHead}>ABOUT ME</h1>
            <div className={styles.aboutDisplay}>
                <img className={styles.myImage} src={image} alt="Vijayakumar" />
                <div>                    
                    <p className={styles.aboutContent}>I'm Full Stack Developer based in Namakkal, Tamilnadu.
           Passionate about building web applications that are performant, accessible and have a great user experience.</p>
                    <p className={styles.aboutContent}> I started coding in 2020 after decided to switch my career from teaching to IT sector.
                    I joined Guvi(IIT Madras) to learn MERN Stack.
                    I had build some basic websites and explored difficulties while building the websites.
                    Now, I'm seeking an opportunity in an organization to expose my skills and to contribute the organization's success.
           </p>
                    <p className={styles.aboutContent}>Outside of work I love playing cricket, watching cricket and being outdoors.</p>

                </div>

            </div>
        </div>
    )
}

export default About
